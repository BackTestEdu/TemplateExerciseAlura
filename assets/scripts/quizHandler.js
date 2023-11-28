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

            // Load alternatives from the JSON file
            // Reajust answer towards the code

            fetch('assets/json/alternatives.json')
                .then(response => response.json())
                .then(alternatives => {
                    const htmlCode = debug(answer, alternatives);
                   
                    const styleElement = iframe.contentDocument.createElement('style');
                    styleElement.innerHTML = htmlCode;

                    // Add the style element to the internal page's head
                    iframe.contentDocument.head.appendChild(styleElement);
                })
                .catch(error => console.error('Error loading alternatives:', error));
        })
        .catch(error => console.error('Error loading internal page:', error));
}

function debug(answer, alternatives) {
    let description = document.querySelector('.description');
    let buttons = document.querySelectorAll('button');
    resetButtons();

    // Check if the answer exists in the JSON file
    if (alternatives[answer]) {
        const answerData = alternatives[answer];
        if(answerData.description == "Correct answer!"){
            buttons[answer.charCodeAt(0) - 65].style.color = '#0f0';
        } else {
            buttons[answer.charCodeAt(0) - 65].style.color = 'red';
        }
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
