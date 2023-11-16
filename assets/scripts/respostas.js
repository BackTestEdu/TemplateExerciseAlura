function carregarPaginaInterna(resposta) {
    const iframe = document.querySelector("#container-teste");
    
    const codeHTML = debug(resposta);
    // Faz uma solicitação GET para a página interna
    fetch('assets/pages/pagina-interna.html')
        .then(response => response.text())
        .then(data => {
            // Define o conteúdo do iframe com a resposta
            iframe.contentDocument.open();
            iframe.contentDocument.write(data);
            iframe.contentDocument.close();

            // Adicione aqui qualquer manipulação adicional do DOM ou estilos
            const estiloElement = iframe.contentDocument.createElement('style');
            estiloElement.innerHTML = codeHTML;

            // Adiciona o elemento de estilo ao cabeçalho da página interna
            iframe.contentDocument.head.appendChild(estiloElement);
            
            
        })
        .catch(error => console.error('Erro ao carregar a página interna:', error));
}

function debug(resposta) {
    let descricao = document.querySelector('.descricao');
    let buttons = document.querySelectorAll('button');
    const acertou = "Alternativa correta!";
    btnReset();

    switch (resposta) {
        case "A":
            buttons[0].style.color = '#0f0';
            descricao.innerHTML = acertou;
            return `
            code {
                color:#0f0;
                }
        `;
        case "B":
            buttons[1].style.color = 'red';
            descricao.innerHTML = "Pense mais um pouco! O valor passado para as classes deve sempre ser correspondente aos valores passados na propriedade grid-template-areas.";
            return `
            code {
                color:#f00;
                }
        `;
        case "C":
            buttons[2].style.color = 'red';
            descricao.innerHTML = "Tente outra vez! O display grid deve ser aplicado na tag pai dos itens a serem organizados, e não em cada um deles. ";
            return `
            code {
                color:#d00;
                }
        `;
        case "D":
            buttons[3].style.color = 'red';
            descricao.innerHTML = "Pense mais um pouco! A propriedade grid-template-columns é utilizada para criar colunas, e não uma grade de linhas e colunas. ";
            return `
            code {
                color:#a00;
                }
        `;

        default:
            break;
    }
}

function btnReset() {
    const buttons = document.querySelectorAll('button');

    for (let i = 0; i < buttons.length && i < 4; i++) {
        buttons[i].style.color = 'white';
    }
}
