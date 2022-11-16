var myImage={
    alt:"Mountains",
    url:"https://upload.wikimedia.org/wikipedia/en/1/1f/NandaDevi.jpg"
};
window.onload = function(){
    var container = document.querySelector("#image");
    var imageStr = "<img alt='"+ myImage.alt + "'" + "src='" + myImage.url +"'/>";
    container.innerHTML = imageStr;
}