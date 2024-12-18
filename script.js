// Validação do Formulário e Envio
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

      // Simulação de Envio (FormSubmit)
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
  whatsappButton.innerHTML = `
    <img src="images/whatsapp-icon.png" alt="WhatsApp" loading="lazy">
  `;

  document.body.appendChild(whatsappButton);
});

// Scroll Suave para Links Internos
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Configuração para Lazy Loading em Imagens
document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll("img[loading='lazy']");
  lazyImages.forEach((img) => {
    img.addEventListener("load", () => {
      console.log(`Imagem carregada: ${img.src}`);
    });
  });
});

// Configuração do Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-DPF2CKVY0X");

// Eventos de Click para CTA Buttons
document.querySelectorAll(".cta-btn, .btn-download").forEach((button) => {
  button.addEventListener("click", () => {
    gtag("event", "click", {
      event_category: "CTA",
      event_label: button.textContent,
    });
  });
});
