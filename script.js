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

function downloadQR() {
const canvas = document.querySelector("#qrcode canvas");
if (!canvas) {
alert("Generate QR terlebih dahulu");
return;
    }

const link = document.createElement("a");
link.download = "QR_" + document.getElementById("kode").value + ".png";
link.href = canvas.toDataURL("image/png");
link.click();
}
