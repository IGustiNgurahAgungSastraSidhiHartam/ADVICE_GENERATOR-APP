const adviceId = document.getElementById("id");
const adviceText = document.getElementById("text");
const button = document.getElementById("bottom");

function fetchAdvice() {
  fetch("https://api.adviceslip.com/advice", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      setTimeout(() => {
        adviceId.innerHTML = data.slip.id;
        adviceText.innerHTML = data.slip.advice;
        button.disabled = false;
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
