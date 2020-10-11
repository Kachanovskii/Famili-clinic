import "../carousel/owl.carousel";
import "%modules%/banner/banner";
import "%modules%/ourDoctors/ourDoctors";
import "%modules%/upButton/upButton";
const WOW = require('../wow/wow.min.js');


window.wow = new WOW.WOW({       // default
    mobile: true,       // default
    live: false       // default
});

window.wow.init();