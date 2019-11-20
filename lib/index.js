const t = require('babel-types')
const { getFunctionName } = require('./getFunctionName')
// const fs = require('fs')
// const babylon = require('babylon')

// const code = fs.readFileSync(process.cwd() +  '/test/class.js').toString();

// const ast = babylon.parse(code, {sourceType: 'module'})

// debugger

// https://github.com/jamiebuilds/babel-docs/blob/master/en_US/authors/guides/transformation-operations.md
module.exports = function({ types: t }) {
    return {
      visitor: {
        Function(path) {
          let body = path.get('body')
          if (!t.isBlockStatement(body)) {
            path.replaceExpressionWithStatements([body]);
          }
          const name = t.StringLiteral(`${getFunctionName(path)}`)
          const group = t.callExpression(
            t.memberExpression(t.identifier('console'), t.identifier('group')), 
            [name]
          )
          if (t.isBlockStatement(body)) {
            body.unshiftContainer(
              'body',
              group
            )  
          } else {
            body.insertBefore(group)
          }
          
          if (t.isSequenceExpression(body)) {
            body = t.expressionStatement(body);
          }
          body.replaceWith(t.blockStatement([
            t.tryStatement(path.node.body, null,
              t.blockStatement(
                [t.expressionStatement(
                  t.callExpression(
                    t.memberExpression(t.identifier('console'), t.identifier('groupEnd')), 
                    [name]
                  )
                )]
              )
            )
          ]))
        },
      }
    };
  };