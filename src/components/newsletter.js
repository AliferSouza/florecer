import { useTag } from"../lib/index.js" 

export default async function newsletter(props) {
  
 const ali = await useTag(props.nameTag)
  ali.forEach((ele)=>{
    ele.addEventListener("click", e =>{
      console.log(e.target)
    })
  })



  return `
   <div class="card">
  <span class="card__title">Escreva-se</span>
  <p class="card__content">Deixe o seu e-mail para você receber as novidades...
  </p>
  <div class="card__form">
    <input placeholder="E-mail" type="text">
    <button class="sign-up">Escrever-se</button>
  </div>
</div>
  `;
}
