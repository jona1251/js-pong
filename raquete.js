function preload(){
    trilha = loadSound("trilha.mp3")
    ponto = loadSound("ponto.mp3")
    raquetada  = loadSound("raquetada.mp3")
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