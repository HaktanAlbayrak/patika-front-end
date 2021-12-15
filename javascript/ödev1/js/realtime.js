
let name = prompt("lütfen isminizi giriniz");

let title1 = document.querySelector("#title1");

let title2 = document.querySelector("#title2");

title2.innerHTML = `Hoş Geldin ${name}`;


function myFunc(arg) {

    let date_ob = new Date();

    let day = date_ob.getDay()

    if(day = 1)
    {
        day = "Pazartesi"
    }
    else if(day = 2)
    {
        day = "Salı"
    }
    else if(day = 3)
    {
        day = "Çarşanba"
    }
    else if(day = 4)
    {
        day = "Perşenbe"
    }
    else if(day = 5)
    {
        day = "Cuma"
    }
    else if(day = 6)
    {
        day = "Cumartesi"
    }
    else if(day = 7)
    {
        day = "Pazar"

    }

    title1.innerHTML = `${date_ob.getHours()}:${date_ob.getMinutes()}:${date_ob.getSeconds()}:${day}`;

    setTimeout(myFunc, 1000, 'funky');
}
  
myFunc()
