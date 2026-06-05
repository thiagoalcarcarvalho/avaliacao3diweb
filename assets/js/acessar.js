const URL_API = 'https://seth202566630-chat-frankstain.hf.space/auth.php';

// ==========================================
// 1. FUNÇÃO EXCLUSIVA PARA LOGIN (ENTRAR)
// ==========================================
function fazerLogin(email, senha) {
    fetch(URL_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            acao: 'login',    // O PHP lê isso e entra na rota de login
            usuario: email,   // O PHP espera 'usuario' para testar o login
            senha: senha
        })
    })
    .then(res => res.json())
    .then(dados => {
        if (dados.sucesso) {
            alert('Login realizado com sucesso! Bem-vindo.');
            // Aqui você pode redirecionar para a página do chat ou liberar a tela
            window.location.href = 'chat.html'; 
        } else {
            alert('Erro no login: ' + dados.mensagem);
        }
    })
    .catch(erro => console.error('Erro na requisição de login:', erro));
}

// ==========================================
// 2. FUNÇÃO EXCLUSIVA PARA REGISTRO (CRIAR CONTA)
// ==========================================
function fazerRegistro(nome, email, senha) {
    fetch(URL_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            acao: 'registro', // O PHP lê isso e entra na rota de cadastro
            nome: nome,
            usuario: email,   // O PHP guarda esse valor na coluna 'email' do banco
            senha: senha
        })
    })
    .then(res => res.json())
    .then(dados => {
        if (dados.sucesso) {
            alert('Conta criada com sucesso! Agora você já pode entrar.');
            // Opcional: mandar ele para a tela de login após cadastrar
        } else {
            alert('Erro no registro: ' + dados.mensagem);
        }
    })
    .catch(erro => console.error('Erro na requisição de registro:', erro));
}
