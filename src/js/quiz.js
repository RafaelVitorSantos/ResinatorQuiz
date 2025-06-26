// Variáveis globais do quiz
let perguntasAtuais = [];
let indicePerguntaAtual = 0;
let pontuacao = 0;
let respostaSelecionada = null;
let quizFinalizado = false;

const elementos = {
    loading: document.getElementById('loading'),
    quizContainer: document.getElementById('quiz-container'),
    resultContainer: document.getElementById('result-container'),
    questionText: document.getElementById('question-text'),
    optionButtons: document.querySelectorAll('.option-btn'),
    nextButton: document.getElementById('next-btn'),
    progressFill: document.getElementById('progress-fill'),
    progressText: document.getElementById('progress-text'),
    resultEmoji: document.getElementById('result-emoji'),
    resultTitle: document.getElementById('result-title'),
    resultMessage: document.getElementById('result-message'),
    scoreText: document.getElementById('score-text'),
    restartButton: document.getElementById('restart-btn')
};

function inicializarQuiz() {
    setTimeout(() => {
        carregarPerguntas();
        mostrarQuiz();
        renderizarPergunta();
        configurarEventListeners();
    }, 500);
}

function carregarPerguntas() {
    perguntasAtuais = perguntasQuiz;
    console.log(`Carregadas ${perguntasAtuais.length} perguntas`);
}

function mostrarQuiz() {
    elementos.loading.style.display = 'none';
    elementos.quizContainer.style.display = 'block';
}

function renderizarPergunta() {
    if (indicePerguntaAtual >= perguntasAtuais.length) {
        finalizarQuiz();
        return;
    }

    const pergunta = perguntasAtuais[indicePerguntaAtual];
    elementos.questionText.textContent = pergunta.conteudo;

    atualizarOpcoesResposta(pergunta);
    atualizarProgresso();
    resetarSelecao();
}

function atualizarOpcoesResposta(pergunta) {
    elementos.optionButtons.forEach((botao, index) => {
        const numeroOpcao = index + 1;
        const textoOpcao = pergunta[`resposta0${numeroOpcao}`];

        const textoElement = botao.querySelector('.option-text');
        textoElement.textContent = textoOpcao;

        botao.classList.remove('selected', 'correct', 'incorrect');
    });
}

function atualizarProgresso() {
    const progresso = ((indicePerguntaAtual + 1) / perguntasAtuais.length) * 100;
    elementos.progressFill.style.width = `${progresso}%`;
    elementos.progressText.textContent = `Pergunta ${indicePerguntaAtual + 1} de ${perguntasAtuais.length}`;
}

function resetarSelecao() {
    respostaSelecionada = null;
    elementos.nextButton.disabled = true;
    elementos.optionButtons.forEach(botao => {
        botao.classList.remove('selected');
    });
}

function configurarEventListeners() {
    elementos.optionButtons.forEach(botao => {
        botao.addEventListener('click', () => selecionarResposta(botao));
    });

    elementos.nextButton.addEventListener('click', proximaPergunta);

    elementos.restartButton.addEventListener('click', reiniciarQuiz);
}

function selecionarResposta(botaoClicado) {
    if (quizFinalizado) return;

    elementos.optionButtons.forEach(botao => {
        botao.classList.remove('selected');
    });

    botaoClicado.classList.add('selected');

    respostaSelecionada = botaoClicado.dataset.option;

    elementos.nextButton.disabled = false;
}

function proximaPergunta() {
    if (!respostaSelecionada) {
        alert('Por favor, selecione uma resposta antes de continuar.');
        return;
    }

    verificarResposta();

    indicePerguntaAtual++;

    setTimeout(() => {
        renderizarPergunta();
    }, 1000);
}

function verificarResposta() {
    const pergunta = perguntasAtuais[indicePerguntaAtual];
    const respostaCorreta = pergunta.resposta_correta;
    const estaCorreta = respostaSelecionada === respostaCorreta;

    if (estaCorreta) {
        pontuacao++;
    }

    mostrarFeedbackResposta(respostaCorreta);
}

function mostrarFeedbackResposta(respostaCorreta) {
    elementos.optionButtons.forEach(botao => {
        const numeroOpcao = botao.dataset.option;

        if (numeroOpcao === respostaCorreta) {
            botao.classList.add('correct');
        } else if (numeroOpcao === respostaSelecionada && numeroOpcao !== respostaCorreta) {
            botao.classList.add('incorrect');
        }
    });
}

function finalizarQuiz() {
    quizFinalizado = true;
    elementos.quizContainer.style.display = 'none';
    elementos.resultContainer.style.display = 'block';

    mostrarResultado();
}

function mostrarResultado() {
    const totalPerguntas = perguntasAtuais.length;
    const percentualAcerto = (pontuacao / totalPerguntas) * 100;

    let emoji, titulo, mensagem;

    if (percentualAcerto >= 90) {
        emoji = '🎉';
        titulo = 'Excelente!';
        mensagem = 'Você demonstrou um conhecimento excepcional sobre resinas acrílicas!';
    } else if (percentualAcerto >= 70) {
        emoji = '👏';
        titulo = 'Muito bem!';
        mensagem = 'Você tem um bom conhecimento sobre o assunto!';
    } else if (percentualAcerto >= 50) {
        emoji = '👍';
        titulo = 'Bom trabalho!';
        mensagem = 'Você tem uma base sólida, mas pode melhorar ainda mais!';
    } else {
        emoji = '📚';
        titulo = 'Continue estudando!';
        mensagem = 'Não desanime, continue estudando para melhorar seus conhecimentos!';
    }

    // Atualiza os elementos do resultado
    elementos.resultEmoji.textContent = emoji;
    elementos.resultTitle.textContent = titulo;
    elementos.resultMessage.textContent = mensagem;
    elementos.scoreText.textContent = `Você acertou ${pontuacao} de ${totalPerguntas}`;
}

function reiniciarQuiz() {
    // Reseta todas as variáveis
    indicePerguntaAtual = 0;
    pontuacao = 0;
    respostaSelecionada = null;
    quizFinalizado = false;

    embaralharPerguntas();

    // Mostra o quiz novamente
    elementos.resultContainer.style.display = 'none';
    elementos.quizContainer.style.display = 'block';

    renderizarPergunta();
}

function embaralharPerguntas() {
    for (let i = perguntasAtuais.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [perguntasAtuais[i], perguntasAtuais[j]] = [perguntasAtuais[j], perguntasAtuais[i]];
    }
}

// Inicializa o quiz quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', inicializarQuiz); 