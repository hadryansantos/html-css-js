if(localStorage.getItem('token') == null) {
    alert ('Você precisa está logado para acessar essa página. Lembrando você precisa estar conectado com internet para desfrutar de todos os detalhes, se der falhar em alguma coisa verifique sua internet (certas coisas são apareceram se você estiver conectado com internet)');
    window.location.href = "../login1/tela_login1.html";
}

const userLogado = JSON.parse(localStorage.getItem('userLogado'));

const logado = document.querySelector('#logado');
logado.innerHTML = `Olá ${userLogado.nome}, sejá bem-vindo ao:`;

function sair() {
    localStorage.removeItem('token');
    localStorage.removeItem('userLogado');
    window.location.href = "../login1/tela_login1.html";
}