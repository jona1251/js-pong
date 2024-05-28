//function play2()
//Variáveis da Bolinha
let xbolinha = 300;
let ybolinha = 200;
//let diametro = 15;
//let raio = diametro / 2;

//velocidade de Bolinha
//let VelocidadeX = 6;
//let VelocidadeY = 6;

//variaveis da raquete
//let xraquete = 2;
//let yraquete = 150;
//let requeteComprimemto = 10;
//let raqueteAltura = 90;

//variaveis do oponente
//let xraqueteoponente= 585;
//let yraqueteoponente=150;
//let velocidadeYoponente
//let velocidadeXoponente

//placar do jogo
//let meuplacar = 0 
//let placaroponente = 0

//sons do jogo
//let raquetada
//let ponto
//let trilha
function tela3(){
  background(0)
  fill(color(255,140,0))
  rect(15,11,70,25,10)
  textSize(20)
  textAlign(CENTER)
  fill(0)
  text('voltar',50,30)
  fill(255)
  chanceDeErrar = null
  
function preload(){
  //trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada  = loadSound("raquetada.mp3")
}

function setup() {
  createCanvas(600, 400);
  
}


  
  movimentoBolinha();
  mostraBolinha();
  raqueteusoario(xraquete,yraquete);
  movimentodaraquete();
  colisãodaraquete();
  verificarColisaoBolinha();
  raqueteopnente(xraqueteoponente,yraqueteoponente);
  movimentarequeteOponente()
  //colisãodaraqueteoponente()
  placar()
  marquecaponto()
  colisaoMinhaRaqueteBiblioteca()
  bolinhanaoFicaPresa()

function verificarColisaoBolinha() {
  if (xbolinha + raio > width || xbolinha - raio < 0) {
    VelocidadeX *= -1;
  }

  if (ybolinha + raio > height || ybolinha - raio < 0) {
    VelocidadeY *= -1;
  }
}

function mostraBolinha() {
  circle(xbolinha, ybolinha, diametro);
}

function movimentoBolinha() {
  setTimeout(function() {
    
}, 10000)
  xbolinha += VelocidadeX;
  ybolinha += VelocidadeY;
}

function raqueteusoario(x,y) {
  rect(x, y, requeteComprimemto, raqueteAltura);
}

function movimentodaraquete() {
  if (keyIsDown(UP_ARROW)) {
    yraquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yraquete += 10;
  }
}

function colisãodaraquete() {
  if (
    xbolinha - raio < xraquete + requeteComprimemto &&
    ybolinha - raio < yraquete + raqueteAltura &&
    ybolinha + raio > yraquete
  ) {
    VelocidadeX *= -1;
    raquetada.play()
  }
}

function raqueteopnente() {
  rect(xraqueteoponente, yraqueteoponente, requeteComprimemto, raqueteAltura);
}

function movimentarequeteOponente(){
if (keyIsDown(87)) {
    yraqueteoponente -= 10;
  }
  if (keyIsDown(83)) {
    yraqueteoponente += 10;
  }
}

function colisãodaraqueteoponente(){
  if (
    xbolinha + raio > xraqueteoponente + requeteComprimemto &&
    ybolinha + raio < xraqueteoponente + raqueteAltura &&
    ybolinha - raio > yraqueteoponente
  ) {
    VelocidadeX *= -1;
    raquetada.play()
  }
}

function placar(){
  stroke(255)
  textAlign(CENTER)
  textSize(20)
  fill(color(255,140,0))
  rect(150, 10, 40, 20)
  fill(255)
  text(meuplacar, 170, 27 )
  fill(color(255,140,0))
  rect(450, 10, 40, 20)
  fill(255)
  text(placaroponente,470, 27)
}

function marquecaponto(){
  if (xbolinha > 590){
    meuplacar += 1
    ponto.play()
  }
  if(xbolinha < 10){
    placaroponente += 1
    ponto.play()
  }
}
  
function colisaoMinhaRaqueteBiblioteca() {
    colidiu = collideRectCircle(xraqueteoponente, yraqueteoponente, requeteComprimemto, raqueteAltura, xbolinha, ybolinha, raio);
    if (colidiu) {
        VelocidadeX *= -1;
        raquetada.play()
    }
}
  
function bolinhanaoFicaPresa(){
    if (xbolinha - raio < 0){
    xbolinha = 23
    }
    if(xbolinha - raio > 600){
      xbolinha = 580
    }
}
}