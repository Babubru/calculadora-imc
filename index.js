// Capturar o evento de submit do formulario
alert(2)
const form = document.querySelector('#formulario');

console.log(form)

function setResultado (msg) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.classList.add('paragrafo');
    p.innerHTML = 'Qualquer coisa';
    resultado.appendChild(p)
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Evento previnido');
    setResultado('Olá mundo')
});

