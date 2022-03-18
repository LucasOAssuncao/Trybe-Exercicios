window.onload = function () {
  let select = document.querySelector("#select1");
  select.addEventListener("change", function () {
    let selected = select.selectedOptions[0];
    document.body.style.backgroundColor = selected.value;

    localStorage.setItem("background", selected.value);
  });

  let selectCorTexto = document.querySelector("#select2");
  selectCorTexto.addEventListener("change", function () {
    let selected2 = selectCorTexto.selectedOptions[0];
    let p = document.querySelector("p");
    p.style.color = selected2.value;

    localStorage.setItem("color", selected2.value);
  });

  let selectFont = document.querySelector("#select3");
  selectFont.addEventListener('change', function(){
      let select3 = selectFont.selectedOptions[0];
      p.style.fontFamily = select3.value;

      localStorage.setItem('fonte', select3.value);
  })

  let tamanhoFonte = document.querySelector('input[name="tamanhoFonte"]');
  tamanhoFonte.addEventListener("change", function () {
    document.querySelector("p").style.fontSize = tamanhoFonte.value + "px";

    localStorage.setItem("tamanhoFonte", tamanhoFonte.value + "px");
  });

  let espacamento = document.querySelector('input[name="espacamento"]');
  espacamento.addEventListener("change", function () {
    p.style.lineHeight = espacamento.value + "px";

    localStorage.setItem("espacamento", espacamento.value + "px");
  });

  let corFundoSalva = localStorage.getItem("background");
  document.body.style.backgroundColor = corFundoSalva;

  let corTextoSalva = localStorage.getItem("color");
  let p = document.querySelector("p");
  p.style.color = corTextoSalva;

  let fonteSalva = localStorage.getItem("fonte");
  p.style.fontFamily = fonteSalva;

  let espacamentoSalvo = localStorage.getItem("espacamento");
  p.style.lineHeight = espacamentoSalvo;

  let tamanhoFonteSalvo = localStorage.getItem("tamanhoFonte");
  document.querySelector("p").style.fontSize = tamanhoFonteSalvo;
};
