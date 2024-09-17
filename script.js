function calcular() {

    const pesoEmbalagem = parseFloat(document.getElementById("embalagem").value);
    const pesoPeca = parseFloat(document.getElementById("peca").value);
    const pesoTotal = parseFloat(document.getElementById("pesoTotal").value);

    const pesoLiquido = pesoTotal - pesoEmbalagem;

    const quantidadePecas = pesoLiquido / pesoPeca;

    if (!isNaN(quantidadePecas) && quantidadePecas > 0) {
        document.getElementById("resultado").textContent = 
            `A quantidade de peças é ${quantidadePecas.toFixed(0)}.`;
    } else {
        document.getElementById("resultado").textContent = 
            'Por favor, insira um valor válido para o peso total.';
    }
}
