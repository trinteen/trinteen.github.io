
window.onload = () => {
    clippy();
    js_time();
}

//js_time:
const js_time = () => {
    setInterval(() => {
        let time = new Date();
        let hh = time.getHours();
        let mm = time.getMinutes();
        let ss = time.getSeconds();
        document.querySelector("#js_time").innerHTML = String(hh).padStart(2, "0") + ":" + String(mm).padStart(2, "0") + ":" + String(ss).padStart(2, "0");
    }, 1000);
}

//js_menu:
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

//menu_section:
const menu_section = (section_box) => {
    const boxes = document.querySelectorAll("#pages div");
    boxes.forEach((box) => {
        box.style.display = "none";
    })
    const section = document.querySelector("#" + section_box);
    section.style.display = "";
}

//clippy:
const clippy = (value) => {
    var clip = document.querySelector("#clippy");
    if(value == null){
        if(localStorage.getItem("newvisitor") == null){
            localStorage.setItem("newvisitor", 1);
            clip.style.display = "block";
        } else {
            clip.style.display = "none";
        }
    } else if (value == "exit"){
        clip.style.display = "none";
    } else if (value == "show"){
        localStorage.removeItem("newvisitor");
        clip.style.display = "block";
    }
}