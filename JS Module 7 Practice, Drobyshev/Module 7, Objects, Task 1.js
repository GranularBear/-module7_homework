// Module 7, Objects, Task 1 - A function which takes an object as an argument and puts all the own key-value entries in the console. The function must not return the value.

function getOwnElem(obj) {
    for(let elem in obj) {
        if (obj.hasOwnProperty(elem)) {
            console.log(elem)
        }
    }
}

const protoObj = {
    song0: "exile",
}

const testObj = Object.create(protoObj);

testObj.song1 = "evermore";

getOwnElem(testObj)


