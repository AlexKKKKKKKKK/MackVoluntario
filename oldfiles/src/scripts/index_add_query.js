function addQuery() {
    let input = document.getElementById("search-text-input");
    let texto = input.value;

    let parametroSeguro = encodeURIComponent(texto);

    window.location.href = `search.html?query=${parametroSeguro}`;
}
    
