var n = 5;

function isOdd(num) { return num % 2;}

//Setup the baggage list with n*2 baggage spaces and n*2 extra space with alternating B/A values starting at index n*2
function setupBaggage() {
    var baggage = [];
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

console.log("Before: " + baggageList);

function moveBaggage(list, old_index, new_index) {
    nextToOld = old_index + 1;
    nextToNew = new_index + 1;
    list[old_index] = list[new_index], list[new_index] = "";
    list[nextToOld] = list[nextToNew], list[nextToNew] = "";
}

function findLastAB(list) {
    for( i = list.length; i <= list.length; i--) {
        if( list[i] == "B" ) {
            var index = i - 1;
            return index;
        }
    }
}

function findFirstBA(list) {
    for( i = list.length /2+1; i <= list.length; i++) {
        if( list[i] == "B" ) {
            var index = i;
            return index;
        }
    }
}

function findFirstBag(list) {
    for( i = 0; i <= list.length; i++) {
        if( list[i] == "B" || list[i] == "A") {
            var index = i;
            return index;
        }
    }
}

function findLastABbeforePair(list) {
    for( i = list.length - 1; i <= list.length; i--) {
        var prev = i - 1;
        var before = i - 2;
        var beefore = i - 3;
        var index = i - 2;
        var listBefore = list[before];
        var listBeefore = list[beefore];
            
        if( (list[i] == list[prev]) && (listBefore != listBeefore) ) {
            /*console.log("i = "+i);
            console.log("prev = "+list[prev]+" "+prev);
            console.log("before ="+list[before]);
            console.log("beefore ="+list[beefore]);*/
            return index;
        }
        else {
            continue;
        }
        
    }
}

function findFirstBAafterOne(list) {
     for( i = list.length /2+1; i <= list.length; i++) {
        var next = i + 1;
        if( list[i] == "B" && list[next] == "A" ) {
            var index = i;
            return index;
        }
     }
}

var lastAB = findLastAB(baggageList);
var firstBA = findFirstBA(baggageList);
var firstBag = findFirstBag(baggageList);

function sortBaggage(list) {
    listLength = list.length;
    startPoint = listLength / 2;
    firstMove = startPoint - 2;
    moveBaggage(list, firstMove, lastAB);
    console.log("move "+firstMove+" to "+lastAB);
    moveBaggage(list, lastAB, firstBA); 
    console.log("move "+lastAB+" to "+firstBA);
    var lastABbeforePair = findLastABbeforePair(baggageList);
    moveBaggage(list, firstBA, lastABbeforePair);
    console.log("move "+firstBA+" to "+lastABbeforePair);
    firstBAafterOne = findFirstBAafterOne(baggageList);
    console.log("After: " + list);
    console.log(list[15]);
    moveBaggage(list, 15, 9);
    moveBaggage(list, 9, 18);
   
}

sortBaggage(baggageList);

// http://keet.wordpress.com/2014/06/28/acm-icpc-2014-solution-to-problem-a-baggage/

// http://icpc.baylor.edu/download/worldfinals/problems/icpc2014.pdf
