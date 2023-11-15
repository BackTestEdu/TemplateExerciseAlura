function resposta(resposta) {
    let descricao = document.querySelector('.descricao');
    let buttons = document.querySelectorAll('button');
    const acertou = "Alternativa correta!";
    btnReset();

    switch (resposta) {
        case "A":
            buttons[0].style.color = 'lightgreen';
            document.body.style.display = 'grid';
            document.body.style.gridTemplateAreas = '"header header" "main aside"';
            document.querySelector('.cabecalho').style.gridArea = 'header';
            document.querySelector('.lateral').style.gridArea = 'aside';
            document.querySelector('.principal').style.gridArea = 'main';
            document.querySelector('.descricao').style.color = 'green';
            descricao.innerHTML = acertou;

            break;
        case "B":
            buttons[1].style.color = 'red';
            document.body.style.display = 'grid';
            document.body.style.gridTemplateAreas = '"header header" "main aside"';
            document.querySelector('.cabecalho').style.gridArea = 'cabecalho';
            document.querySelector('.lateral').style.gridArea = 'lateral';
            document.querySelector('.principal').style.gridArea = 'principal';
            document.querySelector('.descricao').style.color = 'red';
            descricao.innerHTML = "Pense mais um pouco! O valor passado para as classes deve sempre ser correspondente aos valores passados na propriedade grid-template-areas.";
            break;
        case "C":
            buttons[2].style.color = 'red';
            document.body.style.display = 'grid';
            document.body.style.gridTemplateAreas = '"aside aside" "main header"';
            document.querySelector('.cabecalho').style.display = 'grid';
            document.querySelector('.cabecalho').style.gridArea = 'header';
            document.querySelector('.lateral').style.display = 'grid';
            document.querySelector('.lateral').style.gridArea = 'aside';
            document.querySelector('.lateral').style.display = 'grid';
            document.querySelector('.principal').style.gridArea = 'main';
            document.querySelector('.descricao').style.color = 'red';
            descricao.innerHTML = "Tente outra vez! O display grid deve ser aplicado na tag pai dos itens a serem organizados, e não em cada um deles. ";
            break;
        case "D":
            buttons[3].style.color = 'red';
            document.body.style.display = 'grid';
            document.body.style.gridTemplateAreas = '"cabecalho cabecalho" "principal lateral"';
            document.querySelector('.cabecalho').style.gridArea = 'header';
            document.querySelector('.lateral').style.gridArea = 'aside';
            document.querySelector('.principal').style.gridArea = 'main';
            document.querySelector('.descricao').style.color = 'red';
            descricao.innerHTML = "Pense mais um pouco! A propriedade grid-template-columns é utilizada para criar colunas, e não uma grade de linhas e colunas. ";
            break;

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