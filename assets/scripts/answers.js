function loadInternalPage(answer) {
    const iframe = document.querySelector("#container-test");

    const htmlCode = debug(answer);

    // Make a GET request for the internal page
    fetch('assets/pages/internal-page.html')
        .then(response => response.text())
        .then(data => {
            // Set the iframe content with the response
            iframe.contentDocument.open();
            iframe.contentDocument.write(data);
            iframe.contentDocument.close();

            // Add any additional DOM manipulation or styles here
            const styleElement = iframe.contentDocument.createElement('style');
            styleElement.innerHTML = htmlCode;

            // Add the style element to the internal page's head
            iframe.contentDocument.head.appendChild(styleElement);
        })
        .catch(error => console.error('Error loading internal page:', error));
}

function debug(answer) {
    let description = document.querySelector('.description');
    let buttons = document.querySelectorAll('button');
    const correct = "Correct answer!";
    resetButtons();

    switch (answer) {
        case "A":
            buttons[0].style.color = '#0f0';
            description.innerHTML = correct;
            return `
            code {
                color:#0f0;
                }
        `;
        case "B":
            buttons[1].style.color = 'red';
            description.innerHTML = "Think a bit more! The values passed to the classes should always correspond to the values passed in the grid-template-areas property.";
            return `
            code {
                color:#f00;
                }
        `;
        case "C":
            buttons[2].style.color = 'red';
            description.innerHTML = "Try again! The grid display should be applied to the parent tag of the items to be organized, not to each of them.";
            return `
            code {
                color:#d00;
                }
        `;
        case "D":
            buttons[3].style.color = 'red';
            description.innerHTML = "Think a bit more! The grid-template-columns property is used to create columns, not a grid of rows and columns.";
            return `
            code {
                color:#a00;
                }
        `;

        default:
            break;
    }
}

function resetButtons() {
    const buttons = document.querySelectorAll('button');

    for (let i = 0; i < buttons.length && i < 4; i++) {
        buttons[i].style.color = 'white';
    }
}