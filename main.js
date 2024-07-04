const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo")
const tempo = document.querySelectorAll(".contador")
tempo[0].textContent = "hello,tudo bem?"
const tempoObjetivo1 = new Date(2024,7,4,7);
const tempoObjetivo2 = new Date(8);
const tempoObjetivo3 = new Date(2006);
const tempoObjetivo4 = new Date(10);
const tempoObjetivo5 = new Date(5);
const agora = new Date();
tempo[0].textContent = tempoObjetivo1-agora
tempo[1].textContent = tempoObjetivo1
let segundos;
let minutos;
let horas;
let dias;
segundos= (tempoObjetivo1-agora)/1000
minutos= segundos/60
horas= minutos/60
dias= horas/24
segundos = Math.floor(segundos);
minutos = Math.floor(minutos);
horas = Math.floor(horas);
dias = Math.floor(dias);

segundos = segundos%60
minutos = minutos%60
horas = horas%24
tempo[0].textContent = `faltam ${dias} dias,${horas} horas,${minutos} minutos, ${segundos} segundos`
segundos=Math.floor(segundos);
console.log(botoes);
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
