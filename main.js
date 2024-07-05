const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo")
const tempo = document.querySelectorAll(".contador")
tempo[0].textContent = "hello,tudo bem?"
const tempoObjetivo1 = new Date(2024,7,4,7);
const tempoObjetivo2 = new Date(8);
const tempoObjetivo3 = new Date(2006);
const tempoObjetivo4 = new Date(10);
const tempoObjetivo5 = new Date(5);

function calculaTempo(tempoObjetivo){ 
const agora = new Date()
let segundos;
let minutos;
let horas;
let dias;
segundos = Math.floor((tempoObjetivo-agora)/1000);
minutos = Math.floor(segundos/60);
horas = Math.floor(minutos/60);
dias = Math.floor(horas/24);

segundos = segundos%60
minutos = minutos%60
horas = horas%24
  
   return `Faltam ${dias} dias,${horas} horas,${minutos} minutos, ${segundos} segundo`
}

 tempo[0].textContent = calculaTempo(tempoObjetivo1);
 tempo[1].textContent = calculaTempo(tempoObjetivo1);
 tempo[2].textContent = calculaTempo(tempoObjetivo1);
 tempo[3].textContent = calculaTempo(tempoObjetivo1);

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
