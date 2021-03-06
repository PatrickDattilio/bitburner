//General helper functions

//Returns the size (number of keys) of an object
function sizeOfObject(obj) {
	var size = 0, key;
	for (key in obj) {
		if (obj.hasOwnProperty(key)) size++;
	}
	return size;
}

//Adds a random offset to a number within a certain percentage
//e.g. addOffset(100, 5) will return anything from 95 to 105.
//The percentage argument must be between 0 and 100;
function addOffset(n, percentage) {
    if (percentage < 0 || percentage > 100) {return;}

    var offset = n * (percentage / 100);

    return n + ((Math.random() * (2 * offset)) - offset);
}

//Given an element by its Id(usually an 'a' element), removes all event listeners
//from that element by cloning and replacing. Then returns the new cloned element
function clearEventListeners(elemId) {
    var elem = document.getElementById(elemId);
    if (elem == null) {console.log("ERR: Could not find element for: " + elemId); return null;}
    var newElem = elem.cloneNode(true);
    elem.parentNode.replaceChild(newElem, elem);
    return newElem;
}

function getRandomInt(min, max) {
    if (min > max) {return getRandomInt(max, min);}
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Returns true if all elements are equal, and false otherwise
//Assumes both arguments are arrays and that there are no nested arrays
function compareArrays(a1, a2) {
    if (a1.length != a2.length) {
        return false;
    }

    for (var i = 0; i < a1.length; ++i) {
        if (a1[i] != a2[i]) {return false;}
    }
    return true;
}

function printArray(a) {
    return "[" + a.join(", ") + "]";
}

//Returns bool indicating whether or not its a power of 2
function powerOfTwo(n) {
    if (isNaN(n)) {return false;}
    return n && (n & (n-1)) === 0;
}

export {sizeOfObject, addOffset, clearEventListeners, getRandomInt,
        compareArrays, printArray, powerOfTwo};
