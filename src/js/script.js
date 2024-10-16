// Função para classificar o nível do herói com base na experiência (XP)
function classificarHeroi(nome, xp) {
    let nivel;

    // Estrutura de decisão para determinar o nível do herói com base na XP
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // Retorna a mensagem formatada
    return `O Herói de nome ${nome} está no nível de ${nivel}`;
}

// Capturando o formulário e o resultado
const form = document.getElementById('heroForm');
const resultDiv = document.getElementById('result');

// Adicionando um evento ao formulário
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    const nome = document.getElementById('name').value;
    const xp = parseInt(document.getElementById('xp').value, 10);

    // Chamando a função e exibindo o resultado
    const resultado = classificarHeroi(nome, xp);
    resultDiv.textContent = resultado; // Atualiza o conteúdo da div com o resultado

    // Limpa os campos após a submissão
    form.reset();
});
