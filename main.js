document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.querySelector(".submit");
    const emailInput = document.querySelector(".email");
    const messageInput = document.querySelector(".message");

    submitButton.addEventListener('click', function () {
        const url = 'http://localhost:3000/submit';
        const data = {
            email: emailInput.value,
            message: messageInput.value
        };
        
        const = ir

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(responseData => {
            console.log('Success:', responseData);
            // Optionally, reset the form or perform other actions after successful submission
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});