function mouseClicked(){
  
    if (mouseX>=xmouse && mouseX<=(xmouse + lmouse) && mouseY>=ymouse && mouseY<=ymouse + hmouse) {
     borda=200
     
     setTimeout(function() {
     tela=2;
 }, 100)
      
   } else if (mouseX>=100 && mouseX<=300 && mouseY>=300 && mouseY<=350){
     borda=300
     setTimeout(function() {
     tela=3;
 }, 100)
       
     }else if(mouseX>=x && mouseX<=(x + l) && mouseY>=y && mouseY<=(y + h)) {
     placaroponente = 0
     meuplacar = 0
     borda=500
     setTimeout(function() {
     tela=1;
 }, 100)
  
    
   
 }          
   }
 
 
 