//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    nome = document.getElementById("amigo").value;
    if (nome !== "") {
        amigos.push(nome);
        document.getElementById("amigo").value = "";
        document.getElementById("listaAmigos").innerHTML =  "";
        for (let i = 0; i < amigos.length; i++) {
            document.getElementById("listaAmigos").innerHTML += `<li>${amigos[i]}</li>`;
        }
    } else {
        alert("Por favor, insira um nome válido.");
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }
    let Sorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[Sorteado];
    document.getElementById("resultado").innerHTML = `O amigo sorteado foi: <strong>${amigoSorteado}</strong>`;
}