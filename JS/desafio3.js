function calcularOrcamento() {

    let renda = Number(document.getElementById("renda").value);
    let moradia = Number(document.getElementById("moradia").value);
    let alimentacao = Number(document.getElementById("alimentacao").value);
    let transporte = Number(document.getElementById("transporte").value);
    let outros = Number(document.getElementById("outros").value);

    let resultado = document.getElementById("resultado");

    if (
        renda <= 0 ||
        moradia < 0 ||
        alimentacao < 0 ||
        transporte < 0 ||
        outros < 0
    ) {

        resultado.innerHTML = `
            <div class="alert alert-danger">
                Preencha todos os campos com valores válidos.
            </div>
        `;

        return;
    }

    let totalDespesas =
        moradia +
        alimentacao +
        transporte +
        outros;

    let saldo = renda - totalDespesas;

    if (saldo > 0) {

        resultado.innerHTML = `
            <div class="alert alert-success">

                <h5>Orçamento positivo</h5>

                <p>
                    <strong>Total de despesas:</strong>
                    R$ ${totalDespesas.toFixed(2)}
                </p>

                <p>
                    <strong>Saldo restante:</strong>
                    R$ ${saldo.toFixed(2)}
                </p>

                <p>
                    Seu orçamento está dentro da sua renda.
                </p>

            </div>
        `;

    } else if (saldo === 0) {

        resultado.innerHTML = `
            <div class="alert alert-warning">

                <h5>Orçamento equilibrado</h5>

                <p>
                    <strong>Total de despesas:</strong>
                    R$ ${totalDespesas.toFixed(2)}
                </p>

                <p>
                    Você utilizou toda a sua renda.
                </p>

            </div>
        `;

    } else {

        resultado.innerHTML = `
            <div class="alert alert-danger">

                <h5>Orçamento negativo</h5>

                <p>
                    <strong>Total de despesas:</strong>
                    R$ ${totalDespesas.toFixed(2)}
                </p>

                <p>
                    <strong>Valor que falta:</strong>
                    R$ ${Math.abs(saldo).toFixed(2)}
                </p>

                <p>
                    Suas despesas ultrapassaram sua renda.
                </p>

            </div>
        `;
    }
}