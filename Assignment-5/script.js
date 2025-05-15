document.addEventListener("DOMContentLoaded", () => {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const feedback = document.getElementById("feedback").value
    const feedbackDisplay = document.getElementById("saved")
    const feedbackform = document.getElementById("feedbackform")

    function displaydata() {
        const savedName = localStorage.getItem('name')
        const savedEmail = localStorage.getItem('email')
        const savedFeedback = localStorage.getItem('feedback')
        if (savedName && savedEmail && savedFeedback) {
            feedbackDisplay.innerHTML = `<p><strong>Name:</strong> ${savedName}</p><p><strong>email:</strong> ${savedEmail}</p><p><strong>Feedback:</strong> ${savedFeedback}</p>`;
        }
    }

    displaydata()

    feedbackform.addEventListener("submit", () => {
        event.preventDefault()

        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("feedback", feedback)
        feedbackDisplay.innerHTML = `<p><strong>Name:</strong> ${savedName}</p><p><strong>email:</strong> ${savedEmail}</p><p><strong>Feedback:</strong> ${savedFeedback}</p>`;

    })
})