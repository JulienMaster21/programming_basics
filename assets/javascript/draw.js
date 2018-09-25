function drawdiamond() {
    terminate = true;
    const c = document.getElementById("drawingsurface");
    const ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 1000, 1000);
    ctx.beginPath();
    drawside(500, 0, 1000, 500, "teal");
    ctx.closePath();
    ctx.beginPath();
    drawside(1000, 500, 500, 1000, "red");
    ctx.closePath();
    ctx.beginPath();
    drawside(500, 1000, 0, 500, "green");
    ctx.closePath();
    ctx.beginPath();
    drawside(0, 500, 500, 0, "purple");
    ctx.closePath();
}
function drawfancydiamond() {
    terminate = true;
    var c = document.getElementById("drawingsurface");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 1000, 1000);
    ctx.beginPath();
    //Outline
    drawside(0, 300, 300, 0, "blue");
    drawside(300, 0, 700, 0, "blue");
    drawside(700, 0, 1000, 300, "blue");
    drawside(500, 1000, 1000, 300, "blue");
    drawside(0, 300, 500, 1000, "blue");
    //Middle Lines
    drawside(1000, 300, 0, 300, "blue")
    drawside(500, 1000, 500, 0, "blue");
    drawside(500, 1000, 300, 0, "blue");
    drawside(500, 1000, 700, 0, "blue");
    drawside(500, 0, 360, 300, "blue");
    drawside(500, 0, 640, 300, "blue");
    ctx.closePath();
}
function drawside(a, b, d, e, f) {
    var c = document.getElementById("drawingsurface");
    var ctx = c.getContext("2d");
    ctx.moveTo(a, b);
    ctx.lineTo(d, e);
    ctx.strokeStyle = f;
    ctx.stroke();
}
function drawarc(a, b, c1, c2, r, d, e, f, anti) {
    var c = document.getElementById("drawingsurface");
    var ctx = c.getContext("2d");
    ctx.moveTo(a, b);
    ctx.arc(c1, c2, r, d, e, anti);
    ctx.strokeStyle = f;
    ctx.stroke();
}
function drawhelmet() {
    terminate = true;
    var c = document.getElementById("drawingsurface");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 1000, 1000);
    ctx.beginPath();
    //Outline
    drawside(10, 1000, 10, 500, "#000000");
    drawside(990, 1000, 990, 500, "#000000");
    drawside(10, 500, 100, 400, "#000000");
    drawside(990, 500, 900, 400, "#000000");
    drawarc(100, 400, 400, 400, 300, 3.3, 4.5, "#000000", false);
    drawarc(900, 400, 600, 400, 300, 0, 4.92, "#000000", true);
    drawside(336, 108, 336, 10, "#000000");
    drawside(664, 108, 664, 10, "#000000");
    drawside(336, 10, 664, 10, "#000000");
    ctx.closePath();
    //Eyes
    //Left
    ctx.beginPath();
    drawside(140, 380, 380, 480, "#ff0000");
    drawarc(380, 480, 260, 430, 130, 0.4, 3.53, "#ff0000", false);
    ctx.closePath();
    //Right
    ctx.beginPath();
    drawside(860, 380, 620, 480, "#ff0000");
    drawarc(620, 480, 740, 430, 130, 2.7, 5.9, "#ff0000", true);
    ctx.closePath();
    //Mouth
    ctx.beginPath();
    drawside(336, 980, 664, 980, "silver");
    drawside(336, 980, 336, 750, "silver");
    drawside(664, 980, 664, 750, "silver");  
    drawarc(336, 750, 500, 750, 164, 3.2, 0, "silver", false);
    drawside(400, 980, 400, 620, "silver");
    drawside(600, 980, 600, 620, "silver");
    drawside(500, 980, 500, 585, "silver");
    ctx.closePath();
}
async function animatediamond(terminate) {
    var c = document.getElementById("drawingsurface");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 1000, 1000);
    //State 1
    ctx.beginPath();
    drawside(500, 0, 1000, 500, "teal");
    ctx.closePath();
    ctx.beginPath();
    drawside(1000, 500, 500, 1000, "red");
    ctx.closePath();
    ctx.beginPath();
    drawside(500, 1000, 0, 500, "green");
    ctx.closePath();
    ctx.beginPath();
    drawside(0, 500, 500, 0, "purple");
    await sleep(1000);
    ctx.closePath();
    //console.log("Hello");
    ctx.clearRect(0, 0, 1000, 1000);
    //State 2
    ctx.beginPath();
    drawside(500, 0, 1000, 500, "purple");
    ctx.closePath();
    ctx.beginPath();
    drawside(1000, 500, 500, 1000, "teal");
    ctx.closePath();
    ctx.beginPath();
    drawside(500, 1000, 0, 500, "red");
    ctx.closePath();
    ctx.beginPath();
    drawside(0, 500, 500, 0, "green");
    ctx.closePath();
    await sleep(1000);
    //console.log("World");
    ctx.clearRect(0, 0, 1000, 1000);
    //State 3
    ctx.beginPath();
    drawside(500, 0, 1000, 500, "green");
    ctx.closePath();
    ctx.beginPath();
    drawside(1000, 500, 500, 1000, "purple");
    ctx.closePath();
    ctx.beginPath();
    drawside(500, 1000, 0, 500, "teal");
    ctx.closePath();
    ctx.beginPath();
    drawside(0, 500, 500, 0, "red");
    ctx.closePath();
    await sleep(1000);
    ctx.clearRect(0, 0, 1000, 1000);
    ctx.beginPath();
    drawside(500, 0, 1000, 500, "red");
    ctx.closePath();
    ctx.beginPath();
    drawside(1000, 500, 500, 1000, "green");
    ctx.closePath();
    ctx.beginPath();
    drawside(500, 1000, 0, 500, "purple");
    ctx.closePath();
    ctx.beginPath();
    drawside(0, 500, 500, 0, "teal");
    ctx.closePath();
    await sleep(1000);
    if (terminate) {
        return;
    }
    window.requestAnimationFrame(animatediamond);
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
let terminate = false;