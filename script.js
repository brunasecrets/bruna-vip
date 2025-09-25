// Depoimentos rotativos
const depoimentos = [
  "🔥 Conteúdo surreal, não esperava tanto!",
  "👀 Melhor R$16,90 investido esse mês",
  "🤯 As prévias não chegam nem perto do VIP",
  "💦 Tô viciado, vale cada centavo"
];
let i=0;
function trocarDepoimento(){
  document.getElementById("depoimentos-box").innerText = depoimentos[i];
  i=(i+1)%depoimentos.length;
}
setInterval(trocarDepoimento,3000);
trocarDepoimento();
