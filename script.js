// script.js

// LinkedIn Insight Tag
(function() {
    var _linkedin_partner_id = "7942241";
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(_linkedin_partner_id);

    var s = document.getElementsByTagName("script")[0];
    var b = document.createElement("script");
    b.type = "text/javascript";
    b.async = true;
    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    s.parentNode.insertBefore(b, s);
})();
console.log("LinkedIn Insight Tag configurado!");

// Google reCAPTCHA v3 invisível
function onSubmit(token) {
    document.getElementById("contact-form").submit();
    console.log("reCAPTCHA verificado e formulário enviado!");
}

// Formulário de contato - validação básica e envio
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Previne envio padrão
        console.log("Tentando enviar o formulário...");

        // Captura os valores do formulário
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;
        const consent = document.getElementById("consent").checked;

        // Validação simples
        if (!name || !email || !phone) {
            alert("Por favor, preencha os campos obrigatórios.");
            return;
        }

        // Simulação de envio (pode ser substituído por envio via backend)
        console.log("Enviando dados...");
        console.log({
            Nome: name,
            Email: email,
            Telefone: phone,
            Mensagem: message,
            Consentimento: consent ? "Aceito" : "Não aceito",
        });

        alert("Formulário enviado com sucesso!");
        form.reset();
    });
});
