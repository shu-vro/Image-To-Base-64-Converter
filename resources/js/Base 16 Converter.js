let file = document.getElementById("file");
let img = document.querySelector("img");
let convertedText = document.querySelector(".convertedText");
var copyButton = document.querySelector(".copy");
let caption = document.querySelector(".caption");

file.addEventListener("change", () => {
    let reader = new FileReader();
    reader.onload = function () {
        img.src = reader.result;
        convertedText.value = reader.result;
        convertedText.setAttribute("title", `${reader.result.length} characters of code.`);
        caption.textContent = file.value.substring(12, file.value.length);
    };
    reader.readAsDataURL(file.files[0]);
});
function copyTextNow() {
    let copyText = convertedText;
    copyText.select();
    document.execCommand("copy");
}
