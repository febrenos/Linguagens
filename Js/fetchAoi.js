//criar instancia
//let xhr = new XMLHttpRequest();

//ciação da requisiçãourl
//xhr.open('GET', url, true);

//const url = https://viacep.com.br/ws/${cep}/json/;

function buscarCep(event, form) {
    event.preventDefault();
    const inputCep = form.cep;
    if (inputCep) {
        const cep = inputCep.value;
        if (cep.length === 8) {
            const URL = `http://ws.matheuscastiglioni.com.br/ws/cep/find/${cep}/json`;
            fetch(URL)
                .then(resposta => resposta.json())
                .then(data => mostrarResposta(data))
                .catch(erro => console.error(erro));
        }
    }
}

function mostrarResposta(cep) {
    const mensagem = `
        CEP: ${cep.cep},
        Logradouro: ${cep.logradouro},
        Complemento: ${cep.complemento},
        Bairro: ${cep.bairro},
        Cidade ${cep.cidade},
        Estado: ${cep.estado}
    `;
    alert(mensagem);
}