var confirm = 0

function move(e,click) {
    var x = e.offsetX;
    var full = document.getElementById("full_star");
    if(click == 1){
        confirm = 1;
        if (x > 113 * 0.8) {
            full.style.width = "100%";
        } else if (x > 113 * 0.6) {
            full.style.width = "80%";
        } else if (x > 113 * 0.4) {
            full.style.width = "60%";
        } else if (x > 113 * 0.2) {
            full.style.width = "40%";
        } else if (x > 0) {
            full.style.width = "20%";
        } else {
            full.style.width = "0%";
        }
    }else if(click == 0 && confirm == 0){
        if (x > 113 * 0.8) {
            full.style.width = "100%";
        } else if (x > 113 * 0.6) {
            full.style.width = "80%";
        } else if (x > 113 * 0.4) {
            full.style.width = "60%";
        } else if (x > 113 * 0.2) {
            full.style.width = "40%";
        } else if (x > 0) {
            full.style.width = "20%";
        } else {
            full.style.width = "0%";
        }
    }
    
}