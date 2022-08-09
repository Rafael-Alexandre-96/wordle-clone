/*document.querySelectorAll("input").forEach( function(input) {
    
  input.addEventListener("keydown", function(event) {
  const el = event.target;
  const id = el.id;
  var letraLinha = id.substring(0, 4);
  var letraId = id.substring(4);
  var proximoCampo = letraLinha + (parseInt(letraId) + 1);

  document.getElementById(proximoCampo).focus();
});

});*/

document.addEventListener('keypress', function(e) {
  if(e.key == "Enter") {
    alert("enter");
  }
});

function verificarLetras(linha) {
  /*verifica se todas as letras estão preenchidas*/
}

function verificarPalavra(palavra) {
  /*verifica se a palavra é possivel*/
}