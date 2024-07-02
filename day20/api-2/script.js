var uri = "https://meowfacts.herokuapp.com/?count=5";

function fetchFacts() {
    fetch(uri)
      .then((response) => response.json())
      .then((result) => {
        
        const catFacts = (result.data);
        console.log(catFacts);
        const facts = document.getElementById('content');
        catFacts.forEach((item) => {
            const factElement = document.createElement('div');
            factElement.textContent = item;
            factElement.classList.add('facts');
            facts.appendChild(factElement);
          });

      })
      .catch((error) => console.log(error));
}

fetchFacts();