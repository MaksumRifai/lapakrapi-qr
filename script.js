let qr;
function buatQR(){
let kode=document.getElementById("kode").value.trim();
let nama=document.getElementById("nama").value.trim();
if(kode==""){
alert("Masukkan kode pedagang");
return;
}
  
document.getElementById("qrcode").innerHTML="";
qr=new QRCode(document.getElementById("qrcode"),{
text:kode,
width:250,
height:250
});

document.getElementById("judul").innerHTML=
kode+"<br>"+nama;
}

function downloadQR(){
let img=document.querySelector("#qrcode img");
if(!img){
alert("Generate QR terlebih dahulu");
return;
}

let a=document.createElement("a");
a.href=img.src;
a.download="QR_"+document.getElementById("kode").value+".png";
a.click();
}
