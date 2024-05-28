let chanceDeErrar = 0;
//function tela2()
//Variáveis da Bolinha
let colidiu = false;
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//velocidade de Bolinha
let VelocidadeX = 6;
let VelocidadeY = 6;

//variaveis da raquete
let xraquete = 2;
let yraquete = 150;
let requeteComprimemto = 10;
let raqueteAltura = 90;

//variaveis do oponente
let xraqueteoponente= 585;
let yraqueteoponente=150;
let velocidadeYoponente
let velocidadeXoponente

//placar do jogo
let meuplacar = 0 
let placaroponente = 0

//sons do jogo
let raquetada
let ponto
let trilha
function tela2(){
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
  trilha = loadSound("trilha.mp3")
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
  movimentarequeteoponente()
  //colisãodaraqueteoponente()
  placar()
  marcaponto()
  colisaoMinhaRaqueteBiblioteca()
  colisaoMinhaRaqueteoponenteBiblioteca()
  calculaChanceDeErrar()
  bolinhaNaoFicaPresa()
  
function verificarColisaoBolinha() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    VelocidadeX *= -1;
  }

  if (yBolinha + raio > height || yBolinha - raio < 0) {
    VelocidadeY *= -1;
  }
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentoBolinha() {
  xBolinha += VelocidadeX;
  yBolinha += VelocidadeY;
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
    xBolinha + raio < xraquete + requeteComprimemto &&
    yBolinha - raio < yraquete + raqueteAltura &&
    yBolinha + raio > yraquete
  ) {
    VelocidadeX *= -1;
    raquetada.play()
  }
}

function raqueteopnente() {
  rect(xraqueteoponente, yraqueteoponente, requeteComprimemto, raqueteAltura);
}

function movimentarequeteoponente(){
  velocidadeYOponente = yBolinha -yraqueteoponente - requeteComprimemto / 2 - 50;
  yraqueteoponente += velocidadeYOponente + chanceDeErrar
  calculaChanceDeErrar()
}

function colisãodaraqueteoponente(){
  if (
    xBolinha + raio > xraqueteoponente + requeteComprimemto &&
    yBolinha + raio < xraqueteoponente + raqueteAltura &&
    yBolinha - raio > yraqueteoponente
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

function marcaponto(){
  if (xBolinha > 590){
    meuplacar += 1
    ponto.play()
  }
  if(xBolinha < 10){
    placaroponente += 1
    ponto.play()
  }
}
  
function colisaoMinhaRaqueteBiblioteca() {
    colidiu = collideRectCircle(xraqueteoponente, yraqueteoponente, requeteComprimemto, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu) {
        VelocidadeX *= -1;
        raquetada.play()
    }
}
  
function colisaoMinhaRaqueteoponenteBiblioteca() {
    colidiu = collideRectCircle(xraquete, yraquete, requeteComprimemto, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu) {
        VelocidadeX *= -1;
        raquetada.play()
    }
}
  
function calculaChanceDeErrar() {
  if (placaroponente >= meuplacar) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 59){
    chanceDeErrar = 50
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 55){
    chanceDeErrar = 55
    }
  }
}

  
function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
    if(xBolinha - raio > 600){
      xBolinha = 585
    }
}

  
}

