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





const aboutMe = "Hi, my name is Nick. I am currently attending FVTC for Web Devolopment and Design. I work as a server at Pullman's Resturaunt. Some of my hobbies are: creating, snowboarding, and coffee."
const favoriteMovies = ["Madea", "The Conjuring", "Straight Outta Compton"]

document.querySelector("#about-me").textContent = aboutMe

const moviesUl = document.querySelector("#favorite-movies")
favoriteMovies.forEach((movie) => {
    const li = document.createElement("li")
    li.textContent = movie
    moviesUl.append(li)
});