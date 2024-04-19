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