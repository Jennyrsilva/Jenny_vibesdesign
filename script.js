document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    alert("Mensagem enviada com sucesso!\n\n" +
        "Nome: " + name + "\n" +
        "E-mail: " + email + "\n" +
        "Mensagem: " + message);

    this.reset(); // Limpa o formulário
});
