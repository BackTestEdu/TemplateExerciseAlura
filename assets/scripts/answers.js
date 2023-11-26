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
            description.innerHTML = "Python with syntax error!";
            return `
            code {
                color:#f00;
                }
        `;
        case "C":
            buttons[2].style.color = 'red';
            description.innerHTML = "Python with variable not defined!";
            return `
            code {
                color:#d00;
                }
        `;
        case "D":
            buttons[3].style.color = 'red';
            description.innerHTML = "Python without parentheses!";
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

function loadInternalPage(answer) {
    const iframe = document.querySelector("#container-test");

    // Make a GET request for the internal page
    fetch('assets/pages/internal-page.html')
        .then(response => response.text())
        .then(data => {
            // Set the iframe content with the response
            iframe.contentDocument.open();
            iframe.contentDocument.write(data);
            iframe.contentDocument.close();

            // Load answers from the JSON file
            fetch('path/to/answers.json')
                .then(response => response.json())
                .then(answers => {
                    const htmlCode = debug(answer, answers);
                    // Add any additional DOM manipulation or styles here
                    const styleElement = iframe.contentDocument.createElement('style');
                    styleElement.innerHTML = htmlCode;

                    // Add the style element to the internal page's head
                    iframe.contentDocument.head.appendChild(styleElement);
                })
                .catch(error => console.error('Error loading answers:', error));
        })
        .catch(error => console.error('Error loading internal page:', error));
}

function debug(answer, answers) {
    let description = document.querySelector('.description');
    let buttons = document.querySelectorAll('button');
    resetButtons();

    // Check if the answer exists in the JSON file
    if (answers.answers[answer]) {
        const answerData = answers.answers[answer];
        buttons[answer.charCodeAt(0) - 65].style.color = 'red'; // Adjust index based on the ASCII value of 'A'
        description.innerHTML = answerData.description;
        return answerData.style;
    } else {
        // Handle the case where the answer is not found
        console.error('Answer not found:', answer);
        return '';
    }
}

function resetButtons() {
    const buttons = document.querySelectorAll('button');

    for (let i = 0; i < buttons.length && i < 4; i++) {
        buttons[i].style.color = 'white';
    }
}
