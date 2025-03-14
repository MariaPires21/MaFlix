// Ao carrega a página executa as funções de buscar os dados
document.addEventListener("DOMContentLoaded", async () => {
    setTimeout(() => {
        toggleLoading();
    }, 2000);
});

let trendingContainer = document.querySelector("#trendingMovies");
trendingContainer.innerHTML = "";