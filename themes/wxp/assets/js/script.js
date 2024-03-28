/*
    Global
*/
const pxtonum = (val) => {
    var str = val.replace("px", "");
    return Number(str);
}

/* 
    Autostart
*/
window.onload = () => {
    js_time();
    clippy();
    window_exist();
    disable_application();
    
}

/*
    window
*/
const window_exist = () => {
    if(document.querySelector("#window")){
        window_first();
        window_reset();
        window_move();
    }
}

const window_reset = () => {
    var desktop = JSON.parse(localStorage.getItem("screen_size"));
    var windo = JSON.parse(localStorage.getItem("window_pos"));
    var win = document.querySelector("#window");

    var w_min = windo[0];
    var w_max = (w_min + windo[2]);
    var h_min = windo[1];
    var h_max = (h_min + windo[3]);

    if(
        (w_min < 0 || w_min > desktop[0] || w_max > desktop[0]) ||
        (h_min < 0 || h_min > desktop[1] || h_max > desktop[1]) 
    ){
        console.log("mimo");
        
        if((windo[2] > desktop[0]) && (windo[3] > desktop[1])){
            win.style.left = "0px";
            win.style.top = "0px";
            win.style.width = desktop[0] + "px";
            win.style.height = desktop[1] + "px";
        } else {
            win.style.left = Number((desktop[0] - windo[2])/2) + "px";
            win.style.top = ((desktop[1] - windo[3])/2) + "px";
            win.style.width = (windo[2]) + "px";
            win.style.height = (windo[3]) + "px";
        }
    }
}

const window_first = () => {
    var desktop = document.querySelector("#desktop #content");
    var windo = document.querySelector("#desktop #content #window");

    localStorage.setItem("screen_size", JSON.stringify([
        Number(desktop.offsetWidth), 
        Number(desktop.offsetHeight)
    ]));

    if(localStorage.getItem("window_pos")){
        var window_pos = JSON.parse(localStorage.getItem("window_pos"));
        windo.style.left = window_pos[0] + "px";
        windo.style.top = window_pos[1] + "px";
        windo.style.width = window_pos[2] + "px";
        windo.style.height = window_pos[3] + "px";
    } else {
        if(desktop.offsetWidth > 1000){
            windo.style.width = "1000px";
            windo.style.height = ((desktop.offsetHeight - 100)) + "px";
            windo.style.left = ((desktop.offsetWidth - pxtonum(windo.style.width)) / 2) + "px";
            windo.style.top = ((desktop.offsetHeight - pxtonum(windo.style.height)) /2) + "px";
        } else {
            windo.style.left = "0px";
            windo.style.top = "0px";
            windo.style.width = desktop.offsetWidth + "px";
            windo.style.height = desktop.offsetHeight + "px";
        }
        localStorage.setItem("window_pos", JSON.stringify([
            pxtonum(windo.style.left),
            pxtonum(windo.style.top),
            pxtonum(windo.style.width),
            pxtonum(windo.style.height)
        ]));
    }
}

const window_move = () => {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    var win = document.querySelector("#window");
    var titlebar = win.querySelector(".titlebar");

    if(titlebar){
        titlebar.onmousedown = dragMouseDown;
    } else {
        win.onmousedown = dragMouseDown;
    }

    function window_location(){
        localStorage.setItem("window_pos", JSON.stringify([
            win.style.left, 
            win.style.top, 
            win.style.width,
            win.style.height
        ]));
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        win.style.top = (win.offsetTop - pos2) + "px";
        win.style.left = (win.offsetLeft - pos1) + "px";
      }
      
      function closeDragElement() {
        window_location();
        document.onmouseup = null;
        document.onmousemove = null;
      }
}

const window_resize = () => {
    this.addEventListener("mouseup", () => {
        var windo = document.querySelector("#desktop #content #window");
        localStorage.setItem("window_pos", JSON.stringify([
            pxtonum(windo.style.left),
            pxtonum(windo.style.top),
            pxtonum(windo.style.width),
            pxtonum(windo.style.height)
        ]));
    })
}

const window_minimalize = () => {
    application();
}

const window_maximalize = () => {
    var windo = document.querySelector("#desktop #content #window");
    
    if(!localStorage.getItem("window_state") || localStorage.getItem("window_state") == null || localStorage.getItem("window_state") == "normal"){
        localStorage.setItem("window_state", "full");
        localStorage.setItem("window_back", JSON.stringify([
            pxtonum(windo.style.left),
            pxtonum(windo.style.top),
            pxtonum(windo.style.width),
            pxtonum(windo.style.height)
        ]));
        windo.style.left = "0px";
        windo.style.top = "0px";
        windo.style.width = "100%";
        windo.style.height = "calc(100% - 30px)";
        windo.style.borderRadius = "0px";
    } else {
        localStorage.setItem("window_state", "normal");
        var restore = JSON.parse(localStorage.getItem("window_back"));
        windo.style.left = restore[0] + "px";
        windo.style.top = restore[1] + "px";
        windo.style.width = restore[2] + "px";
        windo.style.height = restore[3] + "px";
        windo.style.borderRadius = "17px 17px 5px 5px";
    }

    /*
    var desktop = document.querySelector("#desktop #content");
    var win = document.querySelector("#desktop #content #window");
    if(localStorage.getItem("window_full") == null || localStorage.getItem("window_full") == false){
        win.style.left = 0;
        win.style.top = 0;
        win.style.width = desktop.offsetWidth + "px";
        win.style.height = desktop.offsetHeight + "px";
        localStorage.setItem("window_full", true);
    } else {
        win.style.left = localStorage.getItem("window_left");
        win.style.top = localStorage.getItem("window_top");
        win.style.width = localStorage.getItem("window_width") + "px";
        win.style.height = localStorage.getItem("window_height") + "px";
        localStorage.setItem("window_full", false);
    }
    */
}

/*
    taskbar - time
*/
const js_time = () => {
    setInterval(() => {
        let time = new Date();
        let hh = time.getHours();
        let mm = time.getMinutes();
        let ss = time.getSeconds();
        var str = String(hh).padStart(2, "0") + ":" + String(mm).padStart(2, "0") + ":" + String(ss).padStart(2, "0");
        document.querySelector("#js_time").innerHTML = str;
    }, 1000);
}

/*
    taskbar - application
*/
const application = () => {
    var app = document.querySelector("#panel #application");
    var windo = document.querySelector("#desktop #content #window");

    if(windo.style.display == "none"){
        windo.style.display = "";
        app.setAttribute("class", "active");
    } else {
        windo.style.display = "none";
        app.setAttribute("class", "");
    }
}

/*
    taskbar - start
*/
document.querySelector("#js_menu_button").addEventListener("click", () => {
    const menu = document.querySelector("#js_menu");
    const button = document.querySelector("#panel .left");
    if(menu.style.display == "none"){
        menu.style.display = "";
        button.style.background = "linear-gradient(180deg, rgba(54,126,54,1) 2%, rgba(77,178,77,1) 5%, rgba(74,183,74,1) 7%, rgba(64,181,64,1) 12%, rgba(69,201,69,1) 20%, rgba(56,168,57,1) 87%, rgba(54,126,54,1) 100%)";
    } else {
        menu.style.display = "none";
        button.style.background = "linear-gradient(180deg, rgba(54,126,54,1) 2%, rgba(95,161,95,1) 5%, rgba(146,193,148,1) 7%, rgba(79,154,79,1) 12%, rgba(57,163,57,1) 20%, rgba(56,168,57,1) 87%, rgba(54,126,54,1) 100%)";
    }
})

const menu_section = (section_box) => {
    const boxes = document.querySelectorAll("#pages div");
    boxes.forEach((box) => {
        box.style.display = "none";
    })
    const section = document.querySelector("#" + section_box);
    section.style.display = "";
}

const disable_application = () => {
    if(document.querySelector("#window")){
        document.querySelector("#panel #application").style.display = "";
    } else {
        document.querySelector("#panel #application").style.display = "none"
    }
}

/*
    clippy
*/
const clippy = (value) => {
    var clip = document.querySelector("#clippy");
    if(value == null){
        if(localStorage.getItem("clippy") == null){
            localStorage.setItem("clippy", 1);
            clip.style.display = "block";
        } else {
            clip.style.display = "none";
        }
    } else if (value == "exit"){
        clip.style.display = "none";
    } else if (value == "show"){
        localStorage.removeItem("clippy");
        clip.style.display = "block";
    }
}

/*
    gallery
*/
const gallery = (image) => {
    var show = document.querySelector("#gallery-show");
    var img = document.querySelector("#gallery-show-image");
    if(image == "exit"){
        show.style.display = "none";
        img.style.display = "none";
        img.src = "";
    } else {
        img.src = image;
        img.style.display = "block";
        show.style.display = "block";
    }
}
