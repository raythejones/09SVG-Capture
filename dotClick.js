svg = document.getElementById("svg_id");
button = document.getElementById("button");

var drawCircle = function(x, y){
    var cir = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    cir.setAttribute("cx", x);
    cir.setAttribute("cy", y);
    cir.setAttribute("r", 20);
    cir.addEventListener("click", changeColor);
    svg.appendChild(cir);
};

//change the color and switch the position
var changeColor = function(){
    event.stopPropagation();
    //changecolor
    this.setAttribute("fill", "blue");
    this.addEventListener("click", function(){
	svg.removeChild(this);
	
	//set coordinates for switching the position, and if its overlapping the border move it it
	circX = Math.random() * 500;
	if (circX > 480) {
		circX -= 20;
	}
	if (circX < 20) {
		circX += 20;
	}
	circY = Math.random() * 500
	if (circY > 480) {
		circY -= 20;
	}
	if (circY < 20) {
		circY += 20;
	}
	//switch it
	drawCircle(circX, circY);
    });
};


svg.addEventListener("click", function(){
    drawCircle(event.offsetX, event.offsetY);
});

button.addEventListener("click", function(){
    while(svg.firstChild){
	svg.removeChild(svg.firstChild);
    }
});
