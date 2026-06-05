// Substitua pela URL direta do seu Space no Hugging Face
const URL_API = 'https://hf.space';

// Função para enviar os dados de LOGIN
function fazerLogin(usuario, senha) {
    fetch(URL_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            acao: 'login', // Diz ao PHP para executar o login
            usuario: usuario,
            senha: senha
        })
    })
    .then(res => res.json())
    .then(dados => {
        if (dados.sucesso) {
            alert('Login realizado com sucesso!');
            // Redirecionar usuário ou salvar token/sessão aqui
        } else {
            alert('Erro: ' + dados.mensagem);
        }
    })
    .catch(erro => console.error('Erro na requisição de login:', erro));
}

// Função para enviar os dados de REGISTRO
function fazerRegistro(usuario, email, senha) {
    fetch(URL_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            acao: 'registro', // Diz ao PHP para executar o registro
            usuario: usuario,
            email: email,
            senha: senha
        })
    })
    .then(res => res.json())
    .then(dados => {
        if (dados.sucesso) {
            alert('Conta criada com sucesso!');
        } else {
            alert('Erro no registro: ' + dados.mensagem);
        }
    })
    .catch(erro => console.error('Erro na requisição de registro:', erro));
}
