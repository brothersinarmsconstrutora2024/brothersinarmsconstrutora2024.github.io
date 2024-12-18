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
        alert("Por favor, preencha todos os campos obrigatórios e aceite a política de privacidade.");
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
    whatsappButton.innerHTML = `<img src="images/whatsapp-icon.png" alt="WhatsApp">`;
  
    document.body.appendChild(whatsappButton);
  });
  
  // Scroll Suave para Links Internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  
  // Configuração do LinkedIn Insight Tag
  (function () {
    _linkedin_partner_id = "7942241";
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(_linkedin_partner_id);
  })();
  
  (function (l) {
    if (!l) {
      window.lintrk = function (a, b) { window.lintrk.q.push([a, b]); };
      window.lintrk.q = [];
    }
    const s = document.getElementsByTagName("script")[0];
    const b = document.createElement("script");
    b.type = "text/javascript";
    b.async = true;
    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    s.parentNode.insertBefore(b, s);
  })(window.lintrk);
  
  // Configuração do Google Analytics
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-DPF2CKVY0X');
  
  // Eventos Personalizados - Google Analytics
  document.querySelectorAll('.cta-btn, .btn-download').forEach(button => {
    button.addEventListener("click", () => {
      gtag('event', 'click', {
        'event_category': 'CTA',
        'event_label': button.textContent
      });
    });
  });
  
  // Animação de Entrada no Carregamento da Página
  document.addEventListener("DOMContentLoaded", () => {
    const heroTitle = document.querySelector(".hero-content h1");
    const heroSubtitle = document.querySelector(".hero-content h2");
  
    if (heroTitle && heroSubtitle) {
      heroTitle.style.opacity = "0";
      heroSubtitle.style.opacity = "0";
  
      setTimeout(() => {
        heroTitle.style.transition = "opacity 1.5s ease-in-out";
        heroTitle.style.opacity = "1";
      }, 500);
  
      setTimeout(() => {
        heroSubtitle.style.transition = "opacity 1.5s ease-in-out";
        heroSubtitle.style.opacity = "1";
      }, 1000);
    }
  });
  
