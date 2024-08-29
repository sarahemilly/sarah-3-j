const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo")
const tempo = document.querySelectorAll(".contador")
const agora = new Date();
const tempoObjetivo1 = new Date(2025,26,50,45);
tempo[0].textContent = agora
const tempoObjetivo2 = new Date(2025,30,40,35);
tempo[1].textContent = agora
const tempoObjetivo3 = new Date(2025,14,50,10);
tempo[2].textContent = agora
const tempoObjetivo4 = new Date(2025,59,60,55);
tempo[3].textContent = agora
function calculaTempo(tempoObjetivo){
const agora = new Date()
let segundos;
let  minutos;
let horas;
let dias;
segundos = (tempoObjetivo-agora)/1000
minutos = segundos/60
horas = minutos/60
dias = horas/24
segundos = Math.floor(segundos);
minutos = Math.floor(minutos);
horas = Math.floor(horas);
dias = Math.floor(dias);

segundos = segundos%60
minutos = minutos%60
horas = horas%24

if(segundos >= 0){
    return [dias,horas,minutos,segundos]
}else{
    return 'Prazo finalizado!'
   }

}

const tempoUm = calculaTempo(tempoObjetivo1)
const tempoDois = calculaTempo(tempoObjetivo2)
const tempoTres = calculaTempo(tempoObjetivo3)
const tempoQuatro = calculaTempo(tempoObjetivo4)
 
console.log(tempoUm[3])

tempo[0].textContent = calculaTempo(tempoObjetivo1);
tempo[1].textContent = calculaTempo(tempoObjetivo2);
tempo[2].textContent = calculaTempo(tempoObjetivo3);
tempo[3].textContent = calculaTempo(tempoObjetivo4);

for(let i = 0; i < botoes.length ; i++){
    botoes[i].onclick = function() {
        for (j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            conteudo[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")
    }
}
