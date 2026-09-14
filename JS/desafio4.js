function compararCartoes() {

    let nome1 = document.getElementById("nome1").value;
    let limite1 = Number(document.getElementById("limite1").value);
    let anuidade1 = Number(document.getElementById("anuidade1").value);
    let cashback1 = Number(document.getElementById("cashback1").value);

    let nome2 = document.getElementById("nome2").value;
    let limite2 = Number(document.getElementById("limite2").value);
    let anuidade2 = Number(document.getElementById("anuidade2").value);
    let cashback2 = Number(document.getElementById("cashback2").value);

    let resultado = document.getElementById("resultado");

    if (
        nome1 === "" ||
        nome2 === "" ||
        limite1 <= 0 ||
        limite2 <= 0 ||
        anuidade1 < 0 ||
        anuidade2 < 0 ||
        cashback1 < 0 ||
        cashback2 < 0
    ) {

        resultado.innerHTML = `
            <div class="alert alert-danger">
                Preencha todos os campos com valores válidos.
            </div>
        `;

        return;
    }

    let pontuacao1 = limite1 + (cashback1 * 100) - anuidade1;
    let pontuacao2 = limite2 + (cashback2 * 100) - anuidade2;

    let melhorCartao;

    if (pontuacao1 > pontuacao2) {

        melhorCartao = nome1;

    } else if (pontuacao2 > pontuacao1) {

        melhorCartao = nome2;

    } else {

        melhorCartao = "Os dois cartões possuem a mesma pontuação.";

    }

    resultado.innerHTML = `
        <div class="alert alert-success">

            <h5>Resultado da comparação</h5>

            <p>
                <strong>${nome1}:</strong>
                Pontuação ${pontuacao1.toFixed(2)}
            </p>

            <p>
                <strong>${nome2}:</strong>
                Pontuação ${pontuacao2.toFixed(2)}
            </p>

            <hr>

            <p>
                <strong>Mais vantajoso:</strong>
                ${melhorCartao}
            </p>

        </div>
    `;
}