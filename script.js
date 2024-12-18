// Validação do Formulário
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#contact-form");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.querySelector("#name").value.trim();
      const email = document.querySelector("#email").value.trim();
      const phone = document.querySelector("#phone").value.trim();
      const message = document.querySelector("#message").value.trim();
      const consent = document.querySelector("#consent").checked;

      if (!name || !email || !phone || !consent) {
        alert("Por favor, preencha todos os campos obrigatórios e aceite a política de privacidade.");
        return;
      }

      // Alerta de envio bem-sucedido (simulado)
      alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
      form.reset();
    });
  }
});

// Botão Flutuante do WhatsApp
document.addEventListener("DOMContentLoaded", function () {
  const whatsappButton = document.createElement("a");
  whatsappButton.href = "https://wa.me/5511986723965";
  whatsappButton.className = "whatsapp-float";
  whatsappButton.target = "_blank";
  whatsappButton.innerHTML = `<img src="images/whatsapp-icon.png" alt="WhatsApp">`;

  document.body.appendChild(whatsappButton);
});

// Scroll Suave para Links Internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetElement = document.querySelector(this.getAttribute("href"));
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Google Analytics - Eventos de CTA
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-DPF2CKVY0X');

// Registro de cliques nos botões
document.querySelectorAll('.cta-btn, .btn-download').forEach(button => {
  button.addEventListener("click", () => {
    gtag('event', 'click', {
      'event_category': 'CTA',
      'event_label': button.textContent
    });
  });
});

// Defer para execução de scripts (executado após DOM pronto)
document.addEventListener("DOMContentLoaded", () => {
  console.log("Scripts carregados com sucesso!");
});

// Configuração de reCAPTCHA invisível (se necessário)
function onSubmit(token) {
  document.getElementById("contact-form").submit();
}
