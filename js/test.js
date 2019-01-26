// var obj={
//     name:"Abishek",
//     getName:function(){
//     return this.name;
//     }}
//     console.log(obj.getName)
// function getName(name){
// this.name=name;
// };

// var $para=document.getElementById("testId");
// $para.innerHTML="i am paragraph";
// $para.style.color="white";
// $para.style.backgroundColor="red";
// var active=false;
// if(isActive){
//     $para.classList.add("active");
// }
// //document.getElementById("testId").innerHTML="i am Paragraph";
// /*for(var i=1; i<=5; i++)
// {
//     console.log("*".repeat(i));
// }*/

// var pat;
// for(var i=0;i<10;i++)
// {
//     for( var j=1;j<i;j++)
//     {
//         pat+="*";  
//     }
//     console.log(pat);
//     pat="";
// }






















// var boxProp=[
//     {left: 20,top:20},
//     {left: 200,top:200},
//     {left: 100,top:200},
//     {left: 50,top:250},
//     {left: 400,top:100},
//     {left: 200,top:50},
//     {left: 300,top:150},
//     {left: 450,top:60},
// ];
// for( var i=0; i<boxProp.length;i++){
//     var $box=document.createElement("div");

//     $box.style.width=20+"px";
//     $box.style.height=20+"px";
//     $box.style.position="relative";
//     $box.style.backgroundColor="red";
//     $box.style.top=boxProp[i].top +"px";
//     $box.style.left=boxProp[i].left+"px";

//     var $parent=document.getElementById("parentDiv");
//     $parent.appendChild($box);
// }

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