


let borda=500
function tela1(){
  background(131,111,255)
  

  noStroke()
  
  fill(255,255,255)
  text('Menu',300,100)
 
  fill(25,25,200)
  
  rect(200,200,200,50,10)
  rect(200,300,200,50,10)
   
  textSize(20)
  textAlign(CENTER)
  fill(255)
  
  
  textSize(30)
  textAlign(CENTER)
  fill(255)
  text('play 1',300,235)
  text('play 2',300,335)
  
  noFill()
  stroke(255,255,255)
  rect(200,borda,200,50,10)
}

function mouseClicked() {
  if (mouseX>=200 && mouseX<=200 && mouseY>=200 && mouseY<=250) {
    borda=200
  } else if (mouseX>=200 && mouseX<=300 && mouseY>=200 && mouseY<=350){
    borda=300
  }
  else if(mouseX>=15 && mouseX<=11 && mouseY>=70 && mouseY<=36) {
    borda=15
    setTimeout(function() {
    tela=1;
}, 1000)
 
   
}
}



