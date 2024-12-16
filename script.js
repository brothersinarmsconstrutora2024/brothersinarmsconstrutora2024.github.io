// Validação do Formulário
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#contact-form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.querySelector("#name").value.trim();
      const email = document.querySelector("#email").value.trim();
      const phone = document.querySelector("#phone").value.trim();
      const message = document.querySelector("#message").value.trim();
      const consent = document.querySelector("#consent").checked;
  
      if (!name || !email || !phone || !consent) {
        alert(
          "Por favor, preencha todos os campos obrigatórios e marque a Política de Privacidade."
        );
        return;
      }
  
      // Envio Simulado - Altere conforme integração real
      alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
      form.reset();
    });
  });
  
  // Botão Flutuante do WhatsApp
  document.addEventListener("DOMContentLoaded", function () {
    const whatsappButton = document.createElement("a");
    whatsappButton.href = "https://wa.me/5511986723965";
    whatsappButton.className = "whatsapp-float";
    whatsappButton.target = "_blank";
    whatsappButton.innerHTML = `
      <img src="images/whatsapp-icon.png" alt="WhatsApp">
      <span>WhatsApp</span>
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
  
  // Configuração do reCAPTCHA invisível
  function onSubmit(token) {
    document.getElementById("contact-form").submit();
  }
  
  // Configuração do LinkedIn Insight Tag
  (function () {
    _linkedin_partner_id = "7942241";
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(_linkedin_partner_id);
  })();
  (function (l) {
    if (!l) {
      window.lintrk = function (a, b) {
        window.lintrk.q.push([a, b]);
      };
      window.lintrk.q = [];
    }
    var s = document.getElementsByTagName("script")[0];
    var b = document.createElement("script");
    b.type = "text/javascript";
    b.async = true;
    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    s.parentNode.insertBefore(b, s);
  })(window.lintrk);
  
  // Google Analytics - Eventos
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-DPF2CKVY0X");
  
  // Rastreamento de Eventos - Botões CTA e Downloads
  document.querySelectorAll(".cta-btn, .btn-download").forEach((button) => {
    button.addEventListener("click", () => {
      gtag("event", "click", {
        event_category: "CTA",
        event_label: button.textContent,
      });
    });
  });
