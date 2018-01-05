function theBeatlesPlay(arrMusicians,arrInstruments){
  var array = [];
  for (let i=0; i<arrMusicians.length; i++){
    array[array.length] = arrMusicians[i] + " plays " + arrInstruments[i];
  }
  return array;
}

function johnLennonFacts(arrFacts){
  var array = [];
  for (let i=0; i<arrFacts.length; i++){
    array[array.length] = arrFacts[i] + "!!!";
  }
  return array;
}

