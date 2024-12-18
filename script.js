document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#contact-form");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Obrigado! Entraremos em contato em breve.");
      form.reset();
    });
  });
  
