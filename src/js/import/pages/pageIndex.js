import "../carousel/owl.carousel";
import "%modules%/banner/banner";
import "%modules%/ourDoctors/ourDoctors";
import "%modules%/upButton/upButton";
const WOW = require('../wow/wow.min.js');

let link = document.querySelectorAll(".card__a");
let v = false;
for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function () {
        localStorage.setItem('key', i);
        v = true;
    });
    if (v == false) {
        localStorage.clear();
    }
}
window.wow = new WOW.WOW({       // default
    mobile: true,       // default
    live: false       // default
});

window.wow.init();