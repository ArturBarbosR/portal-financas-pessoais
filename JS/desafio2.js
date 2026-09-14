function calcularInvestimento() {

    let investimento = Number(document.getElementById("investimento").value);
    let aporte = Number(document.getElementById("aporte").value);
    let rendimento = Number(document.getElementById("rendimento").value);
    let tempo = Number(document.getElementById("tempo").value);

    let resultado = document.getElementById("resultado");

    if (investimento < 0 || aporte < 0 || rendimento < 0 || tempo <= 0) {

        resultado.innerHTML = `
            <div class="alert alert-danger">
                Preencha todos os campos com valores válidos.
            </div>
        `;

        return;
    }

    let taxa = rendimento / 100;
    let valorFinal = investimento;

    for (let i = 1; i <= tempo; i++) {

        valorFinal = valorFinal * (1 + taxa);
        valorFinal = valorFinal + aporte;
    }

    let totalInvestido = investimento + (aporte * tempo);
    let lucro = valorFinal - totalInvestido;

    resultado.innerHTML = `
        <div class="alert alert-success">

            <h5>Resultado</h5>

            <p>
                <strong>Total investido:</strong>
                R$ ${totalInvestido.toFixed(2)}
            </p>

            <p>
                <strong>Valor final:</strong>
                R$ ${valorFinal.toFixed(2)}
            </p>

            <p>
                <strong>Rendimento:</strong>
                R$ ${lucro.toFixed(2)}
            </p>

        </div>
    `;
}