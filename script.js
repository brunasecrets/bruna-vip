// Depoimentos fake estilo WhatsApp
const depoimentos = [
  "🔥 Mano, não me arrependo, conteúdo surreal!",
  "👀 Melhor R$16,90 investido esse mês kkk",
  "🤯 As prévias não chegam nem perto do que tem no VIP",
  "💦 Tô viciado nesse grupo, só coisa pesada!"
];
let i=0;
function trocarDepoimento(){
  document.getElementById("depoimentos-box").innerText = depoimentos[i];
  i=(i+1)%depoimentos.length;
}
setInterval(trocarDepoimento,3000);
trocarDepoimento();
