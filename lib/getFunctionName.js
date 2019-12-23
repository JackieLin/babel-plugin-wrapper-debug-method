const t = require('babel-types')

/**
 * 获取方法名称
 * @param {Object} path
 * @returns {string}
 */
exports.getFunctionName = function getFunctionName(path, state) {
    let { id } = path.node
    if (id) return id.name;

    // 处理 xxx.abc = function () {}
    if (path.key === 'right' && path.container.type === 'AssignmentExpression' && path.container.operator === '=') {
        path.parentPath.get('left').traverse({
            Identifier(path) {
                id = path.node.name
            }
        })
    } else if (path.parent.type === 'ObjectProperty') {
        id = path.parent.key.name;
    } else if (path.findParent(path => path.type === 'VariableDeclarator')) {
        const item = path.findParent(path => path.type === 'VariableDeclarator');
        id = item.node.id.name;
    }

    const { start, end } = path.node.loc;

    return id || `${state.filename}: start: ${start.line}, end: ${end.line}`
}