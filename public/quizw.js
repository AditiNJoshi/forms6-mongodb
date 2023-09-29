//quizW.js
document.addEventListener("DOMContentLoaded", function () {
  const quizWForm = document.getElementById("quizW-form");
  const quizWResults = document.getElementById("quizW-results");

  quizWForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(quizWForm);
    const answers = {};

    for (const [name, value] of formData) {
      answers[name] = value;
    }

    const correctAnswers = {
      Q1: "True",
      Q2: "Flase",
      Q3: "Flase",
      Q4: "True",
      Q5: "True",
      Q6: "True",
      Q7: "True",
      Q8: "Flase",
      Q9:"True",
      Q10:"True"
    };

    let scoreW = 0;
    for (const question in correctAnswers) {
      if (answers[question] === correctAnswers[question]) {
        scoreW++;
      }
    }
    if (scoreW >= 0 && scoreW <= 4) {
      scoreW = 0;
    } else if (scoreW >= 5 && scoreW <= 7) {
      scoreW = 1;
    } else {
      scoreW = 2;
    }

    // Map the scoreW based on your requirements (0-4, 5-7, 8-10, etc.)
    // ...

    // Display the result
    quizWResults.innerHTML =`<p>Hello, ${answers.username}Your scoreW is: ${scoreW}</p>`;

    const dataToSend = {
      username: answers.username,
      scoreW: scoreW,
    };
    const jsonData = JSON.stringify(dataToSend);
    sendData(jsonData);
  });
});

const sendData = (data) => {
  console.log(data);
  fetch("http://localhost:30008/submit-quizW", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Success:", data);
      window.location.replace(`/work.html`);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};