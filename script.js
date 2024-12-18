document.addEventListener("DOMContentLoaded", () => {
  // Ação para envio do formulário com mensagem de sucesso
  const form = document.querySelector("#contact-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Obrigado! Sua mensagem foi enviada com sucesso.");
    form.reset();
  });
});

