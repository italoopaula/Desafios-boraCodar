let counter = 1;
let qtdProdutos = 0;

function increment() {
    counter =  counter + 1;
    mostrarNaTela();
}

function decrement() {
    if(counter == 1)
        counter = 1;
    else if(counter > 1)
        counter = counter - 1;
        mostrarNaTela();
}

function mostrarNaTela() {
    const value = document.getElementById('value');
    value.innerText = counter;
}

function createProduct (image, description, price, value) {
    qtdProdutos += 1;
    return `
        <main class="product">
            <img src="./assets/${image}-image.png" alt="Imagem de um(a) ${image}">
            <div class="product-description">
                <p>${description}</p>
                <div class="bottom-content">
                    <p>R$ ${price}</p>
                    <button onclick="decrement()" id="subtract-buttom"><img src="./assets/minus-icon.svg" alt="Ícone de menos"></button>
                    <div id="value">${value}</div>
                    <button onclick="increment()" id="add-buttom"></button>
                </div>
            </div>
        </main>
    `
}

document.querySelector("section").innerHTML = 
    createProduct("monitor", "Monitor Gamer Curvo 49 DQHD, 240Hz, 1ms, HDMI e...", "8.599,00", counter) + 
    createProduct("chair", "Cadeira Gamer  RGB - Preta com Iluminação (Led)", "959,90", counter) +
    createProduct("keyboard", "Teclado Gamer Mecânico Low Profile RGB AW510K 580", "1.002,00", counter) + 
    createProduct("headset", "Headset Gamer RGB Preto", "99,90", counter) +
    createProduct("duck", "Patinho De Borracha Para Banho", "19,90", counter)
