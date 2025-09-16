//export { oldName as newName } = rename when exporting.
//import { oldName as newName } from ... = rename when importing.
//import * as alias from ... = import everything under one alias.

// import as 
//Rename when using a module
//  (avoid conflicts or shorten names).

//export as
//Rename when sharing a module 
// (make names user-friendly for others).

// Internal names are short for convenience
function fn1(a, b) {
  return a + b;
}

function fn2(a, b) {
  return a * b;
}

// Export with clearer names
export { fn1 as addNumbers, fn2 as multiplyNumbers };

