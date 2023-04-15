import cardColaboradores from "../components/cardColaboradores.js";
import relogio from "../components/relogio.js"

export default async function Home() {
  
  return `
    <div class="container_home">     
      
       ${relogio()}
       <img src="./src/dados/IMG-20230414-WA0018-removebg-preview.png" >
       ${cardColaboradores()}


      <div class="texte-container">
        <h2>Workshop de Vivência - Espaço Jacarandá</h2>      
        <p>
          Venha participar do nosso workshop de vivência no Espaço Jacarandá em Betim, MG.
          Serão 10 horas de pura atividade transformadora, com atividades que vão desde
          auto massagem até cuidados com a beleza. Durante o evento, você terá direito a café
          da manhã e chá gelado a tarde. O workshop acontecerá no dia 30/07/23, das 8 às 17h.
          Não perca essa oportunidade única de transformação pessoal e bem-estar.
        </p>
     </div>

    <div class="button-container">
      <a href="https://telegram.org/" target="_blank" class="button button-telegram">Telegram</a>
      <br>
      <a href="https://simpla.com.br/" target="_blank" class="button button-simpla">Comprar Ingressos</a>
    </div>
    <br>

    <div class="whatsapp">
  <a href="https://wa.me/SEUNUMERODOWHATSAPP" target="_blank">
  <img src="./src/img/whatsapp.png"  width="60" height="60">
  </a>
</div>



    </div>





    `;
}

