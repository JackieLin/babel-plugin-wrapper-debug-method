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
        Function(path, state) {
          let body = path.get('body')
          // 处理箭头函数
          if (t.isArrowFunctionExpression(path.node) && !t.isBlockStatement(body.node)) {
            body.replaceWith(t.blockStatement([
              t.returnStatement(body.node)
            ]));

            body = path.get('body')
          }
          const name = t.StringLiteral(`${getFunctionName(path, state)}`)
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