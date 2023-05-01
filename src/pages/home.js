import cardColaboradores from "../components/cardColaboradores.js"
import relogio from "../components/relogio.js"
import newsletter from "../components/newsletter.js"
import cookie from "../components/cookie.js"
import video from "../components/video.js"




export default async function Home() {

function scrolll(){
  var floatingButton = document.getElementById("floating-button");

  window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
      floatingButton.style.display = "block";

      setTimeout(function() {
        floatingButton.style.display = "none";
      }, 3000);
    }
  });
  


}

window.aparecervideo = () =>{
  var floatingButton = document.getElementById("pop-video")
  var videoPalyPause = document.getElementById("videoPalyPause")
  floatingButton.style.display = "block";


}


window.aparecerFecha = () =>{
  var floatingButton = document.getElementById("pop-video")
  var videoPalyPause = document.getElementById("videoPalyPause")

  

  floatingButton.style.display = "none";
  videoPalyPause.pause()


}



  document.addEventListener('DOMContentLoaded', scrolll)
 
  return ` 



<div id="floating-button" onclick="aparecervideo()">
    <h4>Videos</h4>
    <div class="loader-tres-pontinhos">                   
    <span></span>
    <span></span>
    <span></span>                
    </div>
</div>

<div id="video"></div>

 

<div class="video"><div>
  <div class="container_home">  
    <br>      

          <img src="./src/img/vivivi.png" alt="Logo" width="200" height="50" loading="lazy"> 
  
       
          ${relogio()}
          <br>  
          <br>    
          <img src="./src/img/banner2.png" alt="Logo" width="250" height="400" loading="lazy"> 
         
          <br>   
          <br>   
          <br>        
          ${cardColaboradores()} 
                 
          <div class="container_home_texto">
          <br>
            <h2 style="text-align: center;">Workshop de Vivência terapêutica</h2>
       
              <h3 style="text-align: center;">Atenção Maravilhosa!!!</h3>
              <br>
              <p>Você está passando por um momento difícil?</p>
              <p>Sente que é hora de cuidar do seu emocional?</p>
              <p>Está cansada, estressada e precisa de um tempo para si mesma?</p>
              <p>Quer relaxar e fazer networking com mulheres maravilhosas?</p>
            
              <p>Então não perca mais tempo!</p>
              <p>
              Este evento é exatamente o que você precisa para se reconectar com sua essência e se cuidar como a rainha que você é.
              </p>
              <p>Não perca a oportunidade de participar do 
              <span style="font-size:16px; color: #e25959; font-weight: 900;">WORKSHOP DE VIVÊNCIAS FLORESCER </span> onde irá despertar cada pétala de autoestima e sabedoria que existe dentro de você. 

              Aprenda coisas novas, descubra como se tornar ainda mais poderosa e sinta-se renovada em todos os sentidos.
              
              Não perca essa oportunidade única!

              Junte-se a nós e experimente momentos inesquecíveis!

          </p>
          </div>

     

          <div class="container_home_buttons"> 
            <a class="btn  btn-2" target="_blank" href="https://chat.whatsapp.com/KPtnnddG5muFxaCYtYCOzK">Promoções Grupo VIP</a>         
            <a class="btn btn-1" target="_blank" href="https://www.sympla.com.br/evento/workshop-de-vivencias-florescer/1955194">Garantir meu ingresso</a>
            <a class="btn btn-3" target="_blank" href="https://t.me/+GECkthe-9nlhMzY5"> Comunidade Terapeutica</a>      
          </div>

          <div class="whatsapp">
            <a href="https://wa.me/5531971253590?text=Oi%2C+tudo+bem%21+Tenho+interesse+no+Workshop." target="_blank">
            <img src="./src/img/whatsapp.png"  width="40" height="40">
            </a>
          </div>

          <div class="cards">
              <div class="card">
            <div class="content">
              <div class="title">1° Lote</div>
              <div class="price">grupo VIP</div>
              <div class="description">Apenas para os primeiro 20 ingressos</div>
            </div>
            <a href="https://chat.whatsapp.com/KPtnnddG5muFxaCYtYCOzK" target="_blank">
              <button>
              Comprar com ADM
              </button>
            </a>
          </div>

            <div class="cards">
              <div class="card">
            <div class="content">
              <div class="title">2° lote</div>
              <div class="price">Sympla</div>
              <div class="description">Em até 12X</div>
            </div>
            <a href="https://www.sympla.com.br/evento/workshop-de-vivencias-florescer/1955194" target="_blank">
              <button>
              Compre agora
              </button>
            </a>
            
          </div>

       

         </div>
        
  
            
          </div>
          ${newsletter()}
          ${await cookie()}
          <div id="pop-video">
          ${await video()}
          </div>
          <br>
          <br>
          `
}
