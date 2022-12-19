// Module 7, Task 2 - A function that takes a string and an object as arguments and then checks whether the object has the indicated property. The function must return either true or false

function checkElem (obj, nameOfElem) {
    for (let elem in obj) {
        if (elem === nameOfElem && obj.hasOwnProperty(elem)) {
            console.log(true);
            return;
        }
    }
    console.log(false);
}

const testObj = {
    song0: 'exile',
    song1: 'evermore',
    artist: 'TS',
}

checkElem(testObj, 'song1')
