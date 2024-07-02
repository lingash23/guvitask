
document.addEventListener("DOMContentLoaded", function () {
    // fetch joke api url
    fetch("https://official-joke-api.appspot.com/random_ten")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        displayJokes(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
    // Display data on the webpage
    function displayJokes(jokes) {
      const container = document.getElementById("joke");
      jokes.forEach((joke) => {
        const card = document.createElement("div");
        card.className = "col-lg-4 col-md-6 col-sm-12 mb-4";
        card.innerHTML = `
                  <div class="card shadow-sm aspect-ratio">
                      <div class="card-body">
                          <h5 class="card-title">${joke.setup}</h5>
                          <p class="card-text">${joke.punchline}</p>
                      </div>
                  </div>
              `;
        container.appendChild(card);
      });
    }
  });