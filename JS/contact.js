function valida() {
  let valor_nome = document.forms['form-contact']['name'].value;
  let valor_email = document.forms['form-contact']['e-mail'].value;
  let valor_mensagem = document.forms['form-contact']['message'].value;
  if (valor_nome == '' || valor_email == '' || valor_mensagem == '') {
    alert('Preencha todos os campos, por favor.');
  } else {
    alert('Enviado com sucesso.');
  }
}