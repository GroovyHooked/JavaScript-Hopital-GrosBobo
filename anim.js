/*function rouge(a) {
    var button = document.getElementById("rond" + a);
        button.className = "rond rond"+ a + " rouge";
    }
*/
//if (window.matchMedia("(max-width: 700px)").matches) {
function rouge(a) {
    document.getElementById("titre").style.margin = "calc(1.5rem + 3vw) 0 calc(1.5rem + 3vw)"
    document.getElementById('hide').style.display = "none";
    document.getElementById('corps').style.left = "5%";
    document.getElementById('desc').style.display = "block";
    document.getElementById('corps').style.marginLeft = "calc(5% + 2vw)";
    document.getElementById('corps').style.marginRight = "0";
    document.getElementById('block' + a).style.marginLeft = "calc(2% + 1vw";

    let button = document.getElementsByClassName("rond");
    for (let i = 0; i < button.length; i++) {
        let btn = button[i];
        if (btn.classList.contains("rond" + a)) {
            btn.classList.add("rouge")
        } else if (btn.classList.contains("rouge")) {
            btn.classList.remove("rouge")
        }
    }
    let texte = document.getElementsByClassName("block");
    for (let x = 0; x < texte.length; x++) {
        let text = texte[x];
        if (text.classList.contains("block" + a)) {
            text.classList.add("visible")
        } else if (text.classList.contains("visible")) {
            text.classList.remove("visible")
        }
    }
}

//} /*else if (window.matchMedia("(min-width: 700px)").matches) {

/*function rouge(a) {
    document.getElementById("titre").style.margin = "1rem 0 1rem -10%"
    document.getElementById('hide').style.display = "none";
    document.body.style.alignItems = "flex-start";
    document.body.style.paddingLeft = "10%";

    var button = document.getElementsByClassName("rond");
    for (let i = 0; i < button.length; i++) {
        let btn = button[i];
        if (btn.classList.contains("rond" + a)) {
            btn.classList.add("rouge")
        } else if (btn.classList.contains("rouge")) {
            btn.classList.remove("rouge")
        }
    }
    var texte = document.getElementsByClassName("block");
    for (let x = 0; x < texte.length; x++) {
        let text = texte[x];
        if (text.classList.contains("block" + a)) {
            text.classList.add("visible")
        } else if (text.classList.contains("visible")) {
            text.classList.remove("visible")
        }
    }*/
/* }


}*/

/*if ((button.className.match(/(?:^|s)rond rond1 rouge(?!S)/)) || (button.className.match(/(?:^|s)rond rond2 rouge(?!S)/)) || (button.className.match(/(?:^|s)rond rond3 rouge(?!S)/)) || (button.className.match(/(?:^|s)rond rond4 rouge(?!S)/)) || (button.className.match(/(?:^|s)rond rond5 rouge(?!S)/)) || (button.className.match(/(?:^|s)rond rond6 rouge(?!S)/)) ){
        button.className = button.className.replace( /(?:^|\s)rouge(?!\S)/g , '' );
*/

//console.log(document.getElementById("block" + a))
//console.log(texte[i])
//for (var i = 0; i < texte.length; i++){


//var text = texte[i];

/* if (texte.style.display === "none") {
            texte.style.display = "block";
        } else {
            texte.style.display = "none";
        }

    }






/*function rouge(a) {       Fonctionne mais pas correctement et trop lourd
    var button = document.getElementById("rond" + a);
    if ((button.className.match(/(?:^|s)rond rond1 rouge(?!S)/)) || (button.className.match(/(?:^|s)rond rond2 rouge(?!S)/)) || (button.className.match(/(?:^|s)rond rond3 rouge(?!S)/)) || (button.className.match(/(?:^|s)rond rond4 rouge(?!S)/)) || (button.className.match(/(?:^|s)rond rond5 rouge(?!S)/)) || (button.className.match(/(?:^|s)rond rond6 rouge(?!S)/)) ){
        button.className = button.className.replace( /(?:^|\s)rouge(?!\S)/g , '' );

    } else {
        button.className = "rond rond" + a + " rouge";
    }
}*/







/*document.querySelector('#rond1').addEventListener('click', function (e) {
    if (e.ClassName === "rond"){
        e.ClassName = "rouge";
    }
}
button.addEventListener('click', event => {
    button.className = "rouge";
  }); */