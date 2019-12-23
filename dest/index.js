function method(aaa) {
  try {
    console.group("method")
    console.log('hello world');
  } finally {
    console.groupEnd("method");
  }
}