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