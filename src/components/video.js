export default function video() {
  
  return `

<video id="videoPalyPause"  width="200" height="300" loop="true" controls>
<source src="./src/img/vivi.mp4" type="video/mp4">
</video>
<button id="fechar-pop" onclick="aparecerFecha()">Fechar</button>

  `;
}
