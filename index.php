<?php

function carregarPerguntasQuiz()
{
    $jsonContent = file_get_contents('src/json/perguntas.json');
    $todasPerguntas = json_decode($jsonContent, true);

    shuffle($todasPerguntas);

    $perguntasSelecionadas = array_slice($todasPerguntas, 0, 10);

    return $perguntasSelecionadas;
}

$perguntasQuiz = carregarPerguntasQuiz();
?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz - Resinas Acrílicas</title>
    <link rel="stylesheet" href="src/css/style.css">
</head>

<body>
    <nav class="navbar">
        <div class="navbar-container">
            <a href="index.php" class="navbar-logo">🧪 Resinator</a>
            <ul class="navbar-menu">
                <li><a href="index.php" class="navbar-link">Quiz</a></li>
                <li><a href="info.html" class="navbar-link">Informações</a></li>
                <li><a href="consulta.html" class="navbar-link">Consulta</a></li>
            </ul>
        </div>
    </nav>
    <div class="container">
        <header class="quiz-header">
            <h1>🧪 Quiz Resinas Acrílicas</h1>
            <p>Teste seus conhecimentos sobre resinas acrílicas!</p>
        </header>

        <main class="quiz-content">
            <div id="loading" class="loading">
                <div class="spinner"></div>
                <p>Carregando perguntas...</p>
            </div>

            <div id="quiz-container" class="quiz-container" style="display: none;">
                <!-- Progresso do quiz -->
                <div class="quiz-progress">
                    <div class="progress-bar">
                        <div id="progress-fill" class="progress-fill"></div>
                    </div>
                    <span id="progress-text" class="progress-text">Pergunta 1 de 10</span>
                </div>

                <div class="question-container">
                    <h2 id="question-text" class="question-text"></h2>

                    <div class="options-container">
                        <button class="option-btn" data-option="1">
                            <span class="option-letter">A</span>
                            <span class="option-text" id="option-1"></span>
                        </button>
                        <button class="option-btn" data-option="2">
                            <span class="option-letter">B</span>
                            <span class="option-text" id="option-2"></span>
                        </button>
                        <button class="option-btn" data-option="3">
                            <span class="option-letter">C</span>
                            <span class="option-text" id="option-3"></span>
                        </button>
                        <button class="option-btn" data-option="4">
                            <span class="option-letter">D</span>
                            <span class="option-text" id="option-4"></span>
                        </button>
                    </div>
                </div>

                <div class="quiz-controls">
                    <button id="next-btn" class="next-btn" disabled>
                        Próxima Pergunta
                    </button>
                </div>
            </div>

            <div id="result-container" class="result-container" style="display: none;">
                <div class="result-content">
                    <div class="result-icon">
                        <span id="result-emoji">🎉</span>
                    </div>
                    <h2 id="result-title" class="result-title">Parabéns!</h2>
                    <p id="result-message" class="result-message"></p>
                    <div class="score-display">
                        <span id="score-text" class="score-text"></span>
                    </div>
                    <button id="restart-btn" class="restart-btn">Fazer Quiz Novamente</button>
                </div>
            </div>
        </main>
    </div>

    <script>
        const perguntasQuiz = <?php echo json_encode($perguntasQuiz); ?>;
    </script>

    <script src="src/js/quiz.js"></script>
</body>

</html>