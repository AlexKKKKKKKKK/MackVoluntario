function addLiftEffect(element, liftAmount = 8) {
    element.addEventListener('mouseover', () => {
        element.style.transform = `translateY(-${liftAmount}px)`;
        element.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
    });

    element.addEventListener('mouseleave', () => {
        element.style.transform = 'translateY(0)';
        element.style.boxShadow = 'none';
    });
}

const cards = document.getElementsByClassName('cards');
for (const card of cards) {
    addLiftEffect(card);
}

let search_button = document.getElementById("search-button")

search_button.onclick = () =>  window.open("./search.html");
