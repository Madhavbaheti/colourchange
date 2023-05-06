
const orange = document.querySelector(".orange");
const white = document.querySelector(".white");
const green = document.querySelector(".green");
const center = document.querySelector(".center");
const getbgcolor = (selectedelement)=> {
    return window.getComputedStyle(selectedelement).backgroundColor;
}
var color = getbgcolor(orange);
const magicColorChanger = (element,color)=> {
    return element.addEventListener("mouseenter", ()=> {
        center.style.background= color;
    })
};

magicColorChanger(orange,getbgcolor(orange));
magicColorChanger(white,getbgcolor(white));
magicColorChanger(green,getbgcolor(green));
