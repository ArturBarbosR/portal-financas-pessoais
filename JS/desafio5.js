let despesas = [];

function adicionarDespesa() {

    let nome = document.getElementById("despesa").value;
    let valor = Number(document.getElementById("valorDespesa").value);

    let lista = document.getElementById("lista");

    if (nome === "" || valor <= 0) {

        lista.innerHTML = `
            <div class="alert alert-danger">
                Informe o nome e um valor válido.
            </div>
        `;

        return;
    }

    despesas.push({
        nome: nome,
        valor: valor
    });

    document.getElementById("despesa").value = "";
    document.getElementById("valorDespesa").value = "";

    mostrarDespesas();
}

function mostrarDespesas() {

    let lista = document.getElementById("lista");

    let conteudo = "";

    for (let i = 0; i < despesas.length; i++) {

        conteudo += `
            <div class="finance-line">
                <span>${despesas[i].nome}</span>
                <strong>R$ ${despesas[i].valor.toFixed(2)}</strong>
            </div>
        `;
    }

    lista.innerHTML = conteudo;
}

function calcularTotal() {

    let total = 0;

    for (let i = 0; i < despesas.length; i++) {

        total = total + despesas[i].valor;
    }

    let resultado = document.getElementById("resultado");

    if (despesas.length === 0) {

        resultado.innerHTML = `
            <div class="alert alert-warning">
                Adicione pelo menos uma despesa.
            </div>
        `;

        return;
    }

    resultado.innerHTML = `
        <div class="alert alert-success">

            <h5>Total das despesas</h5>

            <p>
                Você cadastrou
                <strong>${despesas.length}</strong>
                despesa(s).
            </p>

            <p>
                <strong>Total:</strong>
                R$ ${total.toFixed(2)}
            </p>

        </div>
    `;
}