var tourPlace = ['india', 'nepal', 'Kuakata', 'Dhaka', 'London'];
tourPlace.indexOf('Dhaka');
console.log(tourPlace);
var tourPlaces = tourPlace [3];
console.log(tourPlaces);
tourPlace[1] = 'Coxbajar';
tourPlace[4] = 'bandorbon';
console.log(tourPlace);
tourPlace.push('Faridpur');
console.log(tourPlace);
if(tourPlace[1] == 'nepal'){
    console.log('Nepal jabo');
  else if( tourPlace[4] == 'Dhaka'){
    console.log('Dhaka jabo');
  }
}
else{
    console.log('Jabo na');
}
