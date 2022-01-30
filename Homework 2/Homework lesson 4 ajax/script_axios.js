const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");
const searchValue = searchInput.value.trim().toLowerCase();

loadBtn.addEventListener("click", (evt) => {
    evt.preventDefault()
    const searchValue = searchInput.value.trim().toLowerCase();
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(data => {
            for (i = 0; i < 100; i++) {
                (resultsContainer.insertAdjacentHTML('afterbegin', `<div class="response-container"><p>UserId: ${data.data[i].useId}</p><p> Id: <span>${data.data[i].id}</span><p><p> Title: <span>${data.data[i].title}</span><p><p> Body: <span>${data.data[i].body}</span><p></div>`)





                )
            }
        });

});
axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(data => console.log(((data.data[0]))))