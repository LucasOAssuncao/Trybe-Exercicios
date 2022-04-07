const inputEmail = document.getElementById('inputEmail');
const inputSenha = document.getElementById('inputSenha');
const btnForm = document.getElementById('btnForm');
const btnSubmit = document.getElementById('submit-btn');
const checkAgreement = document.getElementById('agreement');
btnSubmit.disabled = true;
const areaDeTexto = document.getElementById('textarea');
const formulario = document.getElementById('evaluation-form');

function resultadoForm() {
  const valorInputEmail = inputEmail.value;
  const valorInputPassword = inputSenha.value;
  if (
    valorInputEmail === 'tryber@teste.com' && valorInputPassword === '123456'
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnForm.addEventListener('click', resultadoForm);

function habilitaSubmit() {
  const conteudoCheckBox = checkAgreement.value;

  if (conteudoCheckBox !== null) {
    btnSubmit.disabled = false;
  }
}
checkAgreement.addEventListener('input', habilitaSubmit);

function Contador() {
  const caracteres = areaDeTexto.value;
  const quantidade = 500;
  const total = caracteres.length;
  if (total <= quantidade) {
    const resto = quantidade - total;
    document.getElementById('counter').innerHTML = resto;
  }
}
areaDeTexto.addEventListener('keyup', Contador);

function materiaValor() {
  const materias = document.getElementsByClassName('subject');
  const array = [];

  for (let index = 0; index < materias.length; index += 1) {
    if (materias[index].checked) {
      array.push(` ${materias[index].value}`);
    }
  }
  return array;
}

function familiaValor() {
  const inputs = document.getElementsByClassName('radios');

  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index].checked) {
      return inputs[index].value;
    }
  }
}

function avaliacaoValor() {
  const valores = document.getElementsByClassName('valor');

  for (let index = 0; index < valores.length; index += 1) {
    if (valores[index].checked) {
      return valores[index].value;
    }
  }
}

function mostraNome() {
  const email = document.getElementById('input-email').value;
  const casa = document.getElementById('house').value;
  const name = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const areaDeTexto2 = document.getElementById('textarea').value;
  const materia = materiaValor();
  const familia = familiaValor();
  const avaliacao = avaliacaoValor();

  formulario.innerHTML = `<p>Nome: ${name} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Casa: ${casa}</p>
  <p>Família: ${familia}</p>
  <p>Matérias: ${materia}</p>
  <p>Avaliação: ${avaliacao}</p>
  <p>Observações: ${areaDeTexto2}</p>
  `;
}

btnSubmit.addEventListener('click', mostraNome);
