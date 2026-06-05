// Seleção dos elementos do HTML usando as classes identificadoras
var $selectSabores = document.querySelector('.js-sabores');
var $tdTotalPizza = document.querySelector('.js-total-pizza');
var $buttonConfirmar = document.querySelector('.js-botao-pedido');

// Variáveis de controle de estado
var $totalValor = 0;
var $saborSelecionado = "";

// Vincula o evento de mudança (change) do select à função de atualizar
$selectSabores.onchange = function() {
    atualizarPedido(this);
};

function atualizarPedido(select) {
    // Pega o valor numérico (preço) da opção selecionada
    var preco = parseInt(select.value);
    
    // Pega o texto visível do sabor selecionado
    var textoOpcao = select.options[select.selectedIndex].text;

    // Se o usuário escolheu um sabor válido (preço maior que zero)
    if (preco > 0) {
        $totalValor = preco;
        $saborSelecionado = textoOpcao;
    } else {
        // Se voltou para a opção "Selecione o sabor"
        $totalValor = 0;
        $saborSelecionado = "";
    }

    // Atualiza o texto do valor total na tela
    $tdTotalPizza.textContent = $totalValor;
}

// Vincula o clique do botão à função de confirmação
$buttonConfirmar.onclick = confirmarPedido;

function confirmarPedido() {
    // Validação idêntica à do seu exercício original
    if ($totalValor === 0) {
        alert("Nenhum sabor de panqueca selecionado!");
    } else {
        alert("Pedido confirmado com sucesso!\nSabor: " + $saborSelecionado);
        // Redireciona para a página inicial após confirmar
        window.location.href = "pagina-inicial.html";
    }
}
// Seleção dos elementos do HTML usando as classes identificadoras
var $selectSabores = document.querySelector('.js-sabores');
var $tdTotalPanqueca = document.querySelector('.js-total-panqueca');
var $buttonConfirmar = document.querySelector('.js-botao-pedido');

// Variáveis de controle de estado
var $totalValor = 0;
var $saborSelecionado = "";

// Vincula o evento de mudança (change) do select à função de atualizar
$selectSabores.onchange = function() {
    atualizarPedido(this);
};

function atualizarPedido(select) {
    // Pega o valor numérico (preço) da opção selecionada
    var preco = parseInt(select.value);
    
    // Pega o texto visível do sabor selecionado
    var textoOpcao = select.options[select.selectedIndex].text;

    // Se o usuário escolheu um sabor válido (preço maior que zero)
    if (preco > 0) {
        $totalValor = preco;
        $saborSelecionado = textoOpcao;
    } else {
        // Se voltou para a opção "Selecione o sabor"
        $totalValor = 0;
        $saborSelecionado = "";
    }

    // Atualiza o texto do valor total na tela
    $tdTotalPanqueca.textContent = $totalValor;
}

// Vincula o clique do botão à função de confirmação
$buttonConfirmar.onclick = confirmarPedido;

function confirmarPedido() {
    // Validação idêntica à do seu exercício original
    if ($totalValor === 0) {
        alert("Nenhum sabor de panqueca selecionado!");
    } else {
        alert("Pedido confirmado com sucesso!\nSabor: " + $saborSelecionado);
        // Redireciona para a página inicial após confirmar
        window.location.href = "pagina-inicial.html";
    }
}

// Seleção dos elementos do HTML usando as classes identificadoras
var $selectSabores = document.querySelector('.js-sabores');
var $tdTotalPanqueca = document.querySelector('.js-total-macarrao');
var $buttonConfirmar = document.querySelector('.js-botao-pedido');

// Variáveis de controle de estado
var $totalValor = 0;
var $saborSelecionado = "";

// Vincula o evento de mudança (change) do select à função de atualizar
$selectSabores.onchange = function() {
    atualizarPedido(this);
};

function atualizarPedido(select) {
    // Pega o valor numérico (preço) da opção selecionada
    var preco = parseInt(select.value);
    
    // Pega o texto visível do sabor selecionado
    var textoOpcao = select.options[select.selectedIndex].text;

    // Se o usuário escolheu um sabor válido (preço maior que zero)
    if (preco > 0) {
        $totalValor = preco;
        $saborSelecionado = textoOpcao;
    } else {
        // Se voltou para a opção "Selecione o sabor"
        $totalValor = 0;
        $saborSelecionado = "";
    }

    // Atualiza o texto do valor total na tela
    $tdTotalPanqueca.textContent = $totalValor;
}

// Vincula o clique do botão à função de confirmação
$buttonConfirmar.onclick = confirmarPedido;

function confirmarPedido() {
    // Validação idêntica à do seu exercício original
    if ($totalValor === 0) {
        alert("Nenhum sabor de panqueca selecionado!");
    } else {
        alert("Pedido confirmado com sucesso!\nSabor: " + $saborSelecionado);
        // Redireciona para a página inicial após confirmar
        window.location.href = "pagina-inicial.html";
    }
}


