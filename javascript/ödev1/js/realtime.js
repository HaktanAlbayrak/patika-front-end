
let name = prompt("lütfen isminizi giriniz");

let title1 = document.querySelector("#title1");

let title2 = document.querySelector("#title2");

title2.innerHTML = `Hoş Geldin ${name}`;


function myFunc(arg) {

    let date_ob = new Date();

    // current hours
    let hours = date_ob.getHours();

    // current minutes
    let minutes = date_ob.getMinutes();

    // current seconds
    let seconds = date_ob.getSeconds();

    title1.innerHTML = `${hours}:${minutes}:${seconds}`;

    console.log(`arg was => ${arg}`);

    setTimeout(myFunc, 1000, 'funky');
}
  
myFunc()
