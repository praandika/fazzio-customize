let colorInput = document.getElementById('colorInput');
let contentBody = document.getElementById("contentBody");
let colorCode = document.getElementById("colorCode");

let colorInputVelg = document.getElementById('colorInputVelg');
let contentVelg = document.querySelectorAll(".contentVelg");
let colorCodeVelg = document.getElementById("colorCodeVelg");
// Whenever the user changes the color, the input event will be called.
colorInput.addEventListener('input', () => {
    contentBody.style.backgroundColor = colorInput.value;
    colorCode.value = colorInput.value;
    colorCode.style.color = colorInput.value;
    textLabel.style.backgroundColor = colorInput.value;
    console.log(colorInput.value);
});

colorInputVelg.addEventListener('input', () => {
    for (let i = 0; i < contentVelg.length; i++) {
        contentVelg[i].style.backgroundColor = colorInputVelg.value;
    }
    colorCodeVelg.value = colorInputVelg.value;
    colorCodeVelg.style.color = colorInputVelg.value;
    textLabelVelg.style.backgroundColor = colorInputVelg.value;
    console.log(colorInputVelg.value);
});

function addSticker(){
    let image = document.getElementById("image");
    let sticker = document.getElementById("sticker");
    let button = document.getElementById("button");
    image.removeAttribute("src");
    image.setAttribute("src", "image/model.png");
    sticker.innerHTML = "- Remove";
    button.removeAttribute("class");
    button.setAttribute("class", "btn btn-small danger-borderless");
    button.removeAttribute("onclick");
    button.setAttribute("onclick", "removeSticker()");
}

function removeSticker(){
    let image = document.getElementById("image");
    let sticker = document.getElementById("sticker");
    let button = document.getElementById("button");
    image.removeAttribute("src");
    image.setAttribute("src", "image/model2.png");
    sticker.innerHTML = "+Add";
    button.removeAttribute("class");
    button.setAttribute("class", "btn btn-small success-borderless");
    button.removeAttribute("onclick");
    button.setAttribute("onclick", "addSticker()");
}

function save(){
    let image = document.getElementById("image").src;
    let imageName = /[^/]*$/.exec(image)[0];
    let body = document.getElementById("colorCode").value;
    let velg = document.getElementById("colorCodeVelg").value;

    localStorage.setItem("image", image);
    localStorage.setItem("imageName", imageName);
    localStorage.setItem("body", body);
    localStorage.setItem("velg", velg);

    location.href = "http://localhost:3000/model.php";
}