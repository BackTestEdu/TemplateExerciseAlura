function carregarPaginaInterna() {
    const iframec = document.querySelector("#container-teste");

    // Faz uma solicitação GET para a página interna
    fetch('pagina-interna.html')
        .then(response => response.text())
        .then(data => {
            // Define o conteúdo do iframe com a resposta
            iframec.contentDocument.open();
            iframec.contentDocument.write(data);
            iframec.contentDocument.close();

            // Adicione aqui qualquer manipulação adicional do DOM ou estilos
            const estiloElement = iframec.contentDocument.createElement('style');
            estiloElement.innerHTML = `
                body {
                    background-color: lightgreen;
                    color: darkgreen;
                }
                /* Adicione outros estilos conforme necessário */
            `;

            // Adiciona o elemento de estilo ao cabeçalho da página interna
            iframec.contentDocument.head.appendChild(estiloElement);
            // Navegue de volta para a página principal
            //window.location.href = 'index.html';
        })
        .catch(error => console.error('Erro ao carregar a página interna:', error));
}