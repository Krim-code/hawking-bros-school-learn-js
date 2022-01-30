async function loadJson(url) {
    try {
        return await fetch(url)
            .then(response => {
                if (response.status == 200) {
                    return response.json();
                } else {
                    throw new Error(response.status);
                }
            })
    } catch (error) {
        alert(error)
    }
}

loadJson()