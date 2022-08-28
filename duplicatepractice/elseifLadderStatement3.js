unit=340

if(unit>=0 && unit <=100){
    console.log('your unit charge will be: 3.36')
}
else if(unit>=101 && unit<=300){
    console.log('your per unit charge will be: 7.34')
}
else if(unit>=301 && unit<=500){
    console.log('your per unit charge will be: 10.37')
}
else if (unit>=501 && unit <=1000){
    console.log('your per unit charge will be: 11.36')
}
else {
    console.log('your per unit charge will be : 11.36')
}