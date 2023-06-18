let isim= prompt("Lütfen isminizi giriniz");
let myname= document.querySelector("#myname");
myname.innerHTML= `${isim}`;

function zaman(){
const tarih= new Date;
let saat=tarih.getHours();
let dakika=tarih.getMinutes();
let saniye=tarih.getSeconds();

let gun=["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];
let gunadi=gun [tarih.getDay()];

let clock=document.querySelector("#myclock");
clock.innerHTML=`${saat}: ${dakika}: ${saniye} ${gunadi}`;
}
setInterval(zaman,1000);