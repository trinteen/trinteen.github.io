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

const showmenu = () => {
    var menu = document.querySelector("#menumobile .content");
    if(menu.style.display == "none"){
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

const showsubmenu = (elem) => {
    menureset();
    var submenu = document.querySelector("." + elem + " ul.submenu");
    var cat = document.querySelector("." + elem + " a.category");

    if(submenu.style.display == "none"){
        submenu.style.display = "block";
        cat.classList.add("active");
    } else {
        submenu.style.display = "none";
        cat.classList.remove("active");
    }
}

const menureset = () => {
    var reset = document.querySelectorAll("#menumobile .content ul.submenu");
    var cat = document.querySelectorAll("#menumobile .content ul li a.category");

    reset.forEach((elem) => {
        elem.style.display = "none";
    });
    cat.forEach((elem1) => {
        elem1.classList.remove("active");
    })
}