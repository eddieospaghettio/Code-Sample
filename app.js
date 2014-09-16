var n = 5;

function isOdd(num) { return num % 2;}

function setupBaggage() {
    var baggage = [];
    //Setup the baggage list with n*2 baggage spaces and n*2 extra space with alternating B/A values starting at index n*2
    var twoN = n * 2;
    for ( i = 0 ; i < twoN*2; i++) {
        if( i > twoN - 1) {
            if( isOdd(i) ) {
                baggage[i] = "A";
            }
            else {
                baggage[i] = "B";
            }
        }
        else {
            baggage[i] = "";
        }
    }
    return baggage;
}

var baggageList = setupBaggage();

//console.log(baggageList[-8]);
console.log("Before: " + baggageList);

function moveBaggage(list, old_index, new_index) {
    nextToOldIndex = old_index + 1;
    nextToNewIndex = new_index + 1;
    list[old_index] = list[new_index], list[new_index] = "";
    list[nextToOldIndex] = list[nextToNewIndex], list[nextToNewIndex] = "";
}

function sortBaggage(list) {
    listLength = list.length;
    startPoint = listLength / 2 - 1;
    moveOne = listLength - 3;
    moveBaggage(list, startPoint, moveOne);
    moveBaggage(list, 17, 12);
    moveBaggage(list, 12, 15);
    moveBaggage(list, 15, 9);
    moveBaggage(list, 9, 18);
    console.log("After: " + list + " " + listLength + " " + startPoint);
}

sortBaggage(baggageList);
