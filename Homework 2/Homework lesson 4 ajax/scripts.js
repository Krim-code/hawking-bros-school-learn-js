const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");
const searchValue = searchInput.value.trim().toLowerCase();

loadBtn.addEventListener("click", (evt) => {
    evt.preventDefault()
    const searchValue = searchInput.value.trim().toLowerCase();
    fetch(`https://api.github.com/users/${searchValue}`)
        .then((data) => data.json())
        .then((json) =>
            (resultsContainer.innerHTML = `<div class="response-container">
                                    <img src="${json.avatar_url}">
                                    <p> Имя: <span>${json.name}</span><p>
                                    <p> О себе: <span>${json.bio}</span><p>
                                    <p> Кол-во репозиториев: <span>${json.public_repos}</span><p>
                                </div>`)
        );
});