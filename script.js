// Obtém o formulário de login
const loginForm = document.getElementById("login-form");

// Adiciona um ouvinte de evento para o formulário de login
loginForm.addEventListener("submit", function (event) {
    // Evita o comportamento padrão de envio do formulário
    event.preventDefault();

    // Aqui você pode adicionar lógica para verificar o login, como enviar uma solicitação para o servidor para autenticação.
    // Se o login for bem-sucedido, redirecione o usuário para a tela de início.

    // Redireciona o usuário para a tela de início (você pode ajustar a URL de redirecionamento)
    window.location.href = "pages/home/index.html";
});
