const button = document.getElementsByClassName('first_html_banner_button_1')[0];
console.log(button);
function updateContent() {
    if (window.matchMedia("(max-width: 470px)").matches) {
      button.textContent = "LIVE LINK";
    }
    else if(window.matchMedia("(max-width: 2000px)").matches){
        button.textContent = "PROJECT LINK";
    }
}
updateContent();
window.addEventListener('resize', updateContent);