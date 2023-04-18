let contentBody = document.getElementById("contentBody");
let colorCode = document.getElementById("colorCode");
let contentVelg = document.querySelectorAll(".contentVelg");
let colorCodeVelg = document.getElementById("colorCodeVelg");
let img = document.getElementById("image");
let order = document.getElementById("order");
let bodyCode = localStorage.getItem("body").slice(1);
let velgCode = localStorage.getItem("velg").slice(1);

contentBody.style.backgroundColor = localStorage.getItem("body");
colorCode.value = localStorage.getItem("body");
colorCode.style.color = localStorage.getItem("body");

for (let i = 0; i < contentVelg.length; i++) {
    contentVelg[i].style.backgroundColor = localStorage.getItem("velg");
}
colorCodeVelg.value = localStorage.getItem("velg");
colorCodeVelg.style.color = localStorage.getItem("velg");

img.setAttribute("src", localStorage.getItem("image"));

order.setAttribute("href", `https://wa.me/6281246571421?text=Halo%20saya%20ingin%20order%20Fazzio%20custom%20dengan%20rincian%20berikut%3A%0A%0AWarna%20Body%3A%20%23${bodyCode}%0AWarna%20Velg:%20%23${velgCode}%0A%0APreview%3A%20https://fazzio.yamahabismagroup.com/preview.php?image=${localStorage.getItem("imageName")}%26body=${bodyCode}%26velg=${velgCode}`);