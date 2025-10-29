//Dynamic welcome message
const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

let welcomeMessage = "Good Day"

if (isMorning) {
    welcomeMessage = "Good Morning"
} else if(isAfternoon){
    welcomeMessage = "Good Afternoon" 
} else if(isEvening) {
    welcomeMessage = "Good Evening"
} 

welcomeMessage += " :)"

const welcomeDiv = document.querySelector("#welcome")

const p = document.createElement("p")
p.textContent = welcomeMessage

welcomeDiv.append(p)




//Populate about me section
const aboutMe = "Hi, my name is Nick. I am currently attending FVTC for Web Devolopment and Design. I work as a server at Pullman's Resturaunt. Some of my hobbies are: creating, snowboarding, and coffee."
const favoriteMovies = ["Madea", "The Conjuring", "Straight Outta Compton"]

document.querySelector("#about-me").textContent = aboutMe

const moviesUl = document.querySelector("#favorite-movies")
favoriteMovies.forEach((movie) => {
    const li = document.createElement("li")
    li.textContent = movie
    moviesUl.append(li)
});



//Secret message local storage.
localStorage.setItem("It's a secret to everybody.", "Yo")





//Carousel
const urls = [
    "imgs/doobie.jpg",
    "imgs/philip.jpg",
    "imgs/thirdworld.jpg",
    "imgs/tyler.jpg",
    "imgs/van.jpg"
]

const images = document.querySelectorAll('#carousel img')
const prevButton = document.querySelector("#prev")
const nextButton = document.querySelector("#next")

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

setInterval(() => {
    if(currentImage < urls.length) {
        currentImage++
    } else {
        currentImage = 1;
    }
    showImages()
}, 5000);

prevButton.addEventListener("click", () => {
    currentImage--
    showImages()
})

nextButton.addEventListener("click", () => {
    currentImage++
    showImages()
})






//TODO LIST
const addTodoButton = document.querySelector("#add-todo")
const todoItemsDiv = document.querySelector("#todo-items")
const todoInput = document.querySelector("#todo-input")

const todoListKey = "todoList"


const defaultToDoList = []

const deleteTodo = (ID) => {
    const storedList = JSON.parse(localStorage.getItem(todoListKey))
    const updatedList = storedList.filter((item) => item.ID != ID)
    console.log(updatedList)

    localStorage.setItem(todoListKey, JSON.stringify(updatedList))

    renderTodos()
}

const renderTodos = () => {
    todoItemsDiv.innerHTML = ""
    const storedList = JSON.parse(localStorage.getItem(todoListKey))

    storedList.forEach(({ ID, text, completed}) => {
        const div = document.createElement("div")
        div.classList.add("item")

        const p = document.createElement("p")
        p.textContent = text

        const button = document.createElement("button")
        button.textContent = "x"
        button.value = ID

        div.append(p, button)

        button.addEventListener("click", () => {
            deleteTodo(ID)
        })

        todoItemsDiv.append(div)
    })
}

if(localStorage.getItem(todoListKey)){
    renderTodos()
} else {
    localStorage.setItem(todoListKey, JSON.stringify(defaultToDoList))
}

addTodoButton.addEventListener("click", () => {
    const storedList = JSON.parse(localStorage.getItem(todoListKey))

    storedList.push({
        "ID" : Date.now(),
        "text" : todoInput.value,
        "completed" : false
    })

    localStorage.setItem(todoListKey, JSON.stringify(storedList))

    renderTodos()
    todoInput.value = ""
})



