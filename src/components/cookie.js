export default function buttons(props) {
  const dataAtual = new Date();

// Obtém a data do final do ano
const anoAtual = dataAtual.getFullYear();
const dataFinal = new Date(`${anoAtual}-07-30`);

// Calcula a diferença em dias
const umDia = 24 * 60 * 60 * 1000; // número de milissegundos em um dia
const diferencaEmDias = Math.round((dataFinal - dataAtual) / umDia);



  return `
    <div class="cookie-card">
    <span class="title">🍪 Cookie Notice</span>
    <p class="description">We use cookies to ensure that we give you the best experience on our website. <a href="#">Read cookies policies</a>. </p>
    <div class="actions">
        <button class="pref">
            Manage your preferences
        </button>
        <button class="accept">
            Accept
        </button>
    </div>
</div>
  `;
}
