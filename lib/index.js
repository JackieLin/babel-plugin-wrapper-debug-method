const t = require('babel-types')
const { getFunctionName } = require('./getFunctionName')
// const fs = require('fs')
// const babylon = require('babylon')

// const code = fs.readFileSync(process.cwd() +  '/test/class.js').toString();

// const ast = babylon.parse(code, {sourceType: 'module'})

// debugger

module.exports = function({ types: t }) {
    return {
      visitor: {
        Function(path) {
          const body = path.get('body')
          const name = t.StringLiteral(`${getFunctionName(path)}`)
          body.insertBefore(
            t.callExpression(
              t.memberExpression(t.identifier('console'), t.identifier('group')), 
              [name]
            )
          )
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