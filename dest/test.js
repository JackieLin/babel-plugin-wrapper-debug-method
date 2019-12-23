// 先写测试用例，然后写 demo
// 普通函数
var aa = function () {
  try {
    console.group("aa")
  } finally {
    console.groupEnd("aa");
  }
};

function aa4() {
  try {
    console.group("aa4")
  } finally {
    console.groupEnd("aa4");
  }
}

var cc;

cc = function () {
  try {
    console.group("/Users/jackielin/tencent/babel-plugin-wrapper-debug-method/test/test.js: start: 7, end: 7")
  } finally {
    console.groupEnd("/Users/jackielin/tencent/babel-plugin-wrapper-debug-method/test/test.js: start: 7, end: 7");
  }
};

() => {
  try {
    console.group("/Users/jackielin/tencent/babel-plugin-wrapper-debug-method/test/test.js: start: 9, end: 9")
    console.log(222);
  } finally {
    console.groupEnd("/Users/jackielin/tencent/babel-plugin-wrapper-debug-method/test/test.js: start: 9, end: 9");
  }
};

var aa1 = {
  bb: function () {
    try {
      console.group("bb")
    } finally {
      console.groupEnd("bb");
    }
  },
  cc: function name() {
    try {
      console.group("name")
      console.log(222);
    } finally {
      console.groupEnd("name");
    }
  }
};

aa.prototype.bb1 = function () {
  try {
    console.group("bb1")
    console.log(222);
  } finally {
    console.groupEnd("bb1");
  }
};

aa.prototype.bb2 = function name() {
  try {
    console.group("name")
    console.log(222);
  } finally {
    console.groupEnd("name");
  }
};

[].forEach(function () {
  try {
    console.group("/Users/jackielin/tencent/babel-plugin-wrapper-debug-method/test/test.js: start: 19, end: 19")
  } finally {
    console.groupEnd("/Users/jackielin/tencent/babel-plugin-wrapper-debug-method/test/test.js: start: 19, end: 19");
  }
});

try {
  function name() {
    try {
      console.group("name")
      console.log(222);
    } finally {
      console.groupEnd("name");
    }
  }
} catch (e) {}

function aa2() {
  try {
    console.group("aa2")
    return function () {
      try {
        console.group("/Users/jackielin/tencent/babel-plugin-wrapper-debug-method/test/test.js: start: 30, end: 32")
        console.log(222);
      } finally {
        console.groupEnd("/Users/jackielin/tencent/babel-plugin-wrapper-debug-method/test/test.js: start: 30, end: 32");
      }
    };
  } finally {
    console.groupEnd("aa2");
  }
}