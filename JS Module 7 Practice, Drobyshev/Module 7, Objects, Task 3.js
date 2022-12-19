// Module 7, Task 3 - A function that creates an empty object with no prototype

function createObjNoProto () {
    return Object.create(null);
}

const testObj = createObjNoProto();