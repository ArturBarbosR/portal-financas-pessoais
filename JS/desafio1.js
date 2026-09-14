function calcularEmprestimo() {

    let valor = Number(document.getElementById("valor").value);
    let juros = Number(document.getElementById("juros").value);
    let meses = Number(document.getElementById("meses").value);

    let resultado = document.getElementById("resultado");

    if (valor <= 0 || juros < 0 || meses <= 0) {
        resultado.innerHTML = `
            <div class="alert alert-danger">
                Preencha todos os campos com valores válidos.
            </div>
        `;
        return;
    }

    let taxa = juros / 100;

    let valorFinal = valor * Math.pow(1 + taxa, meses);

    let parcela = valorFinal / meses;

    resultado.innerHTML = `
        <div class="alert alert-success">
            <h5>Resultado</h5>
            <p><strong>Valor inicial:</strong> R$ ${valor.toFixed(2)}</p>
            <p><strong>Valor final:</strong> R$ ${valorFinal.toFixed(2)}</p>
            <p><strong>Valor da parcela:</strong> R$ ${parcela.toFixed(2)}</p>
        </div>
    `;
}