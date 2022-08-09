<?php

function gerarHTMLLinha() {
  $linha = 1;
  //for($linha = 1; $linha < 7; $linha++) {
    for($letra = 1; $letra < 6; $letra++) {
      echo '<input class="input-letra" id="l-'.$linha.'-'.$letra.'" type="text" name="letra-1" maxlength="1">';
    }
  //}
}