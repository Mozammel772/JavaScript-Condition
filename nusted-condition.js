        //   nusted-function
// var myBuget = 160;
// var daniryMilk = 150;
// var tastBiskit = 120;
// var dryCack = 100;
// if(daniryMilk < myBuget){
//     console.log('Ami Danirymilk Cha diye Khabo');
// }
// else if(tastBiskit < myBuget) {
//      console.log('ami Tastybiskit diye cha khabo');
// }
// else if(dryCack < myBuget){
//      console.log('ami dry cake diye cha khabo');
// }
// else{
//     console.log('Ami Akhn khabo na khide lage nai');
// }



var myBuget = 160;
var daniryMilk = 150;
var tastBiskit = 120;
var dryCack = 100;
var daniryCheck = false;
if(daniryMilk < myBuget){
    console.log('Ami Danirymilk Cha diye Khabo');
    if(daniryCheck == true){
        console.log('valo thakle ami nite pari na hoile nibu na');
    }
    else{
        console.log('Valo na Aita tumi khaba na');
    }
}
else if(tastBiskit < myBuget) {
     console.log('ami Tastybiskit diye cha khabo');
}
else if(dryCack < myBuget){
     console.log('ami dry cake diye cha khabo');
}
else{
    console.log('Ami Akhn khabo na khide lage nai');
}