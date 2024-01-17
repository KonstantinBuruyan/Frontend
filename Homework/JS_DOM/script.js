
const fn = () => {
    const color = document.querySelector("#color"); //
    const container = document.querySelector(".container");

    const oldColor = container.style.backgroundColor; //keep old valid color
    container.style.backgroundColor = ""; //remove old color

    let tmpColor = color.value.replace(/\s/g, ""); //remove all spaces

    const colorData = tmpColor.split(",");

    if (tmpColor.split("%").length - 1 > 0) {   // hsl(9, 100 %, 64 %) or hsla(9, 100 %, 64 %, 0.5)

        if (colorData.length > 3) // hsla
        {
            tmpColor = `hsla(${tmpColor})`;
        }
        else {  // hsl
            tmpColor = `hsl(${tmpColor})`;
        }
    }
    else if (colorData.length - 1 > 0) { //rgb(155, 102, 102) or rgba(155, 102, 102, 0.5)

        if (colorData.length > 3) { //rgba
            tmpColor = `rgba(${tmpColor})`;
        }
        else { //rgb
            tmpColor = `rgb(${tmpColor})`;
        }
    }
    else if (tmpColor.length === 6) { //maybe hex or color name like yellow

        container.style.backgroundColor = tmpColor; //set color then check container.style.background Color if differs that means hex
        if (container.style.backgroundColor !== tmpColor) {  //hex
            tmpColor = `#${tmpColor}`;
        }

    }

    container.style.backgroundColor = tmpColor;
    if (!container.style.backgroundColor.startsWith("rgb") && container.style.backgroundColor !== tmpColor) {  //wrong color formats or name such as redd, yellor and so on
        container.style.backgroundColor = oldColor;// back old color
        alert("Wrong color name");
    }

}


const btn = document.querySelector(".btn");

btn.addEventListener("click", fn);