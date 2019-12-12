// 先写测试用例，然后写 demo
// 普通函数
var aa = function() { }
function aa() { }

() => { console.log(222)}

var aa = {
    bb: function() {},
    cc: function name() { console.log(222) }
};

aa.prototype.bb = function () { console.log(222)};
aa.prototype.bb = function name () { console.log(222)};

[].forEach(function() {})

try {
    function name() {
        console.log(222)
    }
} catch(e) {

}

function aa() {
    return function () {
        console.log(222)
    }
}