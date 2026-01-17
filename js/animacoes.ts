// Animação suave ao rolar a página
document.addEventListener("scroll", () => {
    const elementos = document.querySelectorAll(".fade");

    elementos.forEach(elemento => {
        const posicaoElemento = elemento.getBoundingClientRect().top;
        const alturaTela = window.innerHeight;

        if (posicaoElemento < alturaTela - 100) {
            elemento.classList.add("show");
        }
    });
});

// Garante que elementos visíveis já apareçam animados ao carregar
document.addEventListener("DOMContentLoaded", () => {
    const elementos = document.querySelectorAll(".fade");

    elementos.forEach(elemento => {
        const posicaoElemento = elemento.getBoundingClientRect().top;
        const alturaTela = window.innerHeight;

        if (posicaoElemento < alturaTela) {
            elemento.classList.add("show");
        }
    });
});
