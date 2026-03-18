// 1. Seleção de Elementos
// Pegamos o botão e todos os slots onde os ícones aparecem
const botaoGirar = document.querySelector('.btn-spin');
const slots = document.querySelectorAll('.slot-item');

// 2. Banco de Dados de Ícones
// Lista de emojis que representam o tema da Vespa Mandarina
const icones = ['🐝', '🍯', '🌸', '⚡', '🔥', '👑'];

// 3. Função Principal
function girarMandarina() {
    // Adicionamos um efeito visual simples de "piscar" enquanto sorteia
    botaoGirar.disabled = true; // Desativa o botão temporariamente
    botaoGirar.innerText = "SORTEANDO...";

    let voltas = 0;
    const intervalo = setInterval(() => {
        // Percorre cada slot e coloca um ícone aleatório
        slots.forEach(slot => {
            const indiceAleatorio = Math.floor(Math.random() * icones.length);
            slot.textContent = icones[indiceAleatorio];
        });

        voltas++;

        // Após 10 mudanças rápidas, ele para no resultado final
        if (voltas > 10) {
            clearInterval(intervalo);
            botaoGirar.disabled = false;
            botaoGirar.innerText = "GIRAR MANDARINA";
            verificarResultado();
        }
    }, 100); // Muda o ícone a cada 100 milissegundos
}

// 4. Lógica de Verificação (Para o trabalho ficar completo)
function verificarResultado() {
    const resultado1 = slots[0].textContent;
    const resultado2 = slots[1].textContent;
    const resultado3 = slots[2].textContent;

    if (resultado1 === resultado2 && resultado2 === resultado3) {
        alert("Parabéns! Você combinou os símbolos da Vespa!");
    }
}

// 5. Evento de Clique
// Diz ao navegador para executar a função quando o botão for clicado
botaoGirar.addEventListener('click', girarMandarina);
