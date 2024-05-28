
let tela=1
let isPaused = true;
let trilhas
//mouser
let xmouse = 200
let ymouse = 200
let lmouse = 200
let hmouse = 50

//voltar
let x = 15
let y = 11
let l = 70
let h = 25
function setup() {
  createCanvas(600, 400);
  //trilha.loop()
}

function draw() {
  //menu
  if(tela==1){
  tela1()
  }
  //play 1
  if (tela==2){
  tela2()
  }
  // 2 jogadores
  if (tela==3){
  tela3()
  }

trilhas = createAudio('trilha.mp3')
}