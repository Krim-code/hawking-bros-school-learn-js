let user = {
    name: "john",
    age: 30
}

function count(obj) {
    console.log(`Кол-во свойств объекта: ${Object.keys(user).length}`)
}
count(user)