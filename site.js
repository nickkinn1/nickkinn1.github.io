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
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

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


