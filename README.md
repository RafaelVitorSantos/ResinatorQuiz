# 🧪 Resinator

Um sistema completo de quiz interativo, criado para atender a necessidade da minha namorada de estudar de forma dinamica e rápida sobre resinas acrílicas em prótese dentária, desenvolvido com PHP, HTML, CSS e JavaScript puro.

## 📋 Descrição

O **Resinator** é uma aplicação web educativa que oferece uma experiência de aprendizado interativa sobre resinas acrílicas utilizadas em prótese dentária. O sistema inclui um quiz dinâmico, páginas informativas detalhadas e uma consulta rápida com todas as perguntas e respostas.

## ✨ Funcionalidades

### 🎯 Quiz Interativo
- **10 perguntas aleatórias** selecionadas de um banco de 20 questões
- **Feedback visual** em tempo real (correto/incorreto)
- **Barra de progresso** dinâmica
- **Validação** de respostas antes de prosseguir
- **Resultado final** com pontuação e mensagem personalizada
- **Reiniciar quiz** com novas perguntas embaralhadas

### 📚 Páginas Informativas
- **Estudo completo** sobre resinas acrílicas
- **Respostas técnicas e simplificadas** para cada tópico
- **Design otimizado** para leitura longa
- **Layout responsivo** para todos os dispositivos

### 🔍 Consulta Rápida
- **Todas as 20 perguntas** do banco de dados
- **Respostas corretas** destacadas
- **Explicações breves** para cada resposta
- **Referência rápida** para estudo

## 🛠️ Tecnologias Utilizadas

- **Backend:** PHP
- **Frontend:** HTML, CSS, JavaScript
- **Dados:** JSON

## 📁 Estrutura do Projeto

```
resinator/
├── index.php              # Página principal do quiz
├── info.html              # Página de informações detalhadas
├── consulta.html          # Página de consulta rápida
├── README.md              # Documentação do projeto
└── src/
    ├── css/
    │   └── style.css      # Estilos CSS
    ├── js/
    │   └── quiz.js        # Lógica JavaScript do quiz
    └── json/
        └── perguntas.json # Banco de dados das perguntas
```

## 🚀 Instalação

### Pré-requisitos
- Servidor web com suporte a PHP (Apache, Nginx, etc.)
- PHP 7.4 ou superior
- Navegador web moderno

### Passos para Instalação

1. **Clone ou baixe** o projeto para seu servidor web
2. **Configure** o servidor web para servir os arquivos
3. **Acesse** `index.php` no navegador
4. **Pronto!** O sistema está funcionando

### Exemplo de Configuração Local (XAMPP/WAMP)

1. Copie os arquivos para a pasta `htdocs` (XAMPP) ou `www` (WAMP)
2. Inicie o servidor Apache
3. Acesse `http://localhost/ResinatorQuiz/`

## 🎮 Como Usar

### Quiz
1. Acesse a página principal
2. Aguarde o carregamento das perguntas
3. Selecione uma resposta clicando nas opções
4. Clique em "Próxima Pergunta"
5. Veja seu resultado final
6. Use "Fazer Quiz Novamente" para uma nova rodada

### Informações
- Navegue para a aba "Informações"
- Leia o conteúdo detalhado sobre resinas acrílicas
- Cada tópico possui explicação técnica e simplificada

### Consulta
- Acesse a aba "Consulta"
- Visualize todas as perguntas e respostas corretas
- Use como referência rápida para estudo

## 📊 Banco de Dados

O sistema utiliza um arquivo JSON (`src/json/perguntas.json`) contendo:
- 20 perguntas sobre resinas acrílicas
- 4 opções de resposta por pergunta
- Resposta correta identificada
- Estrutura padronizada para fácil manutenção

## 🔧 Personalização

### Adicionar Novas Perguntas
1. Edite o arquivo `src/json/perguntas.json`
2. Siga a estrutura existente
3. As perguntas serão automaticamente incluídas no quiz

### Modificar Estilos
1. Edite `src/css/style.css`
2. As mudanças se aplicam a todas as páginas
3. Mantenha a responsividade

### Alterar Lógica do Quiz
1. Modifique `src/js/quiz.js`
2. O código segue padrões de Clean Code
3. Funções bem documentadas e organizadas

## 🌟 Recursos Avançados

### Sistema de Pontuação
- Calcula percentual de acerto
- Mensagens personalizadas por faixa de desempenho
- Emojis diferentes para cada nível

### Embaralhamento Inteligente
- Perguntas sempre em ordem diferente
- Seleção aleatória de 10 questões
- Nova ordem a cada reinício

### Feedback Visual
- Cores diferentes para respostas corretas/incorretas
- Animações de transição
- Estados visuais claros

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👨‍💻 Desenvolvido por

Rafael Vitor dos Santos