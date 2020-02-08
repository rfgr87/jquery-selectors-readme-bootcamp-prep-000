// declare your functions here...

function paragraphSelector(){
  var ptags = [];
  ptags = $('p');
  return ptags;
}

function ImageSelector(){
  var img;
  img = $('img:last');
  return  img
}

function ninjaBabySelector(){
  var img;
  img = $('baby-ninja');
  return img;
}

function firstListItem(){
  var l;
  l = $('ul pic-list:first-child');
  return l;
}