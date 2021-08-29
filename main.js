var mouseEvent = "";
var lastPositionofx, LastPositionofy;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext('2d');
var color = "black"
var widthOfLine = 1;
width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;
if (width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";

}





canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
    color = document.getElementById("color").value;
    widthOfLine = document.getElementById("width_of_line").value;
    lastPositionofx = e.touches[0].clientX - canvas.offsetLeft;
    LastPositionofy = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {
    currentPositionofmousex = e.touches[0].clientX - canvas.offsetLeft;
    currentPositionofmousey = e.touches[0].clientY - canvas.offsetTop;


    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthOfLine;
    ctx.moveTo(lastPositionofx, LastPositionofy);
    ctx.lineTo(currentPositionofmousex, currentPositionofmousey);
    ctx.stroke();


    lastPositionofx = currentPositionofmousex;
    LastPositionofy = currentPositionofmousey;



}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}