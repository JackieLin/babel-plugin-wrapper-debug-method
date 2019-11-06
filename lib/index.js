const t = require('babel-types')

module.exports = function({ types: t }) {
    return {
      visitor: {
        FunctionDeclaration(path) {
          const body = path.get('body')
          body.replaceWith(t.blockStatement([
            t.tryStatement(path.node.body, null,
              t.blockStatement(
                [t.expressionStatement(
                  t.callExpression(
                    t.memberExpression(t.identifier('console'), t.identifier('log')), 
                    [t.StringLiteral('test')]
                  )
                )]
              )
            )
          ]))
        }
      }
    };
  };