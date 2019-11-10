const t = require('babel-types')

/**
 * 获取方法名称
 * @param {Object} path
 * @returns {string}
 */
exports.getFunctionName = function getFunctionName(path) {
    let { id } = path.node
    if (id) return id.name;

    // 处理 xxx.abc = function () {}
    if (path.key === 'right' && path.container.type === 'AssignmentExpression' && path.container.operator === '=') {
        path.parentPath.get('left').traverse({
            Identifier(path) {
                id = path.node.name
            }
        })
    }

    return id
}