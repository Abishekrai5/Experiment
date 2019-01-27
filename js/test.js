var randomLeft = [];


function generateRandomBox( num) {
    var box= {};
    for(var i=0; i<num; i++) {
        box = {
            left:Math.floor((Math.random() * 500 ) + 1),
            top:Math.floor((Math.random() * 400 ) + 1)
        }
        randomLeft.push(box)
    }
}

function plotBox(boxProp) {
     for( var i=0; i<boxProp.length;i++){
            var $box=document.createElement("div");
        
            $box.style.width=20+"px";
            $box.style.height=20+"px";
            $box.style.position="relative";
            $box.style.backgroundColor="red";
            $box.style.top=boxProp[i].top +"px";
            $box.style.left=boxProp[i].left+"px";
        
            var $parent=document.getElementById("parentDiv");
            $parent.appendChild($box);
        }
}

generateRandomBox(10);
plotBox(randomLeft);
console.log(randomLeft);