const modalBtn = document.getElementById("modalBtn")
const closeModalBtn = document.getElementById("close-icon")
const modal = document.querySelector(".modal")
const emailInput = document.getElementById("email")
const passInput = document.getElementById("password")
const loginBtn = document.getElementById("login")
const headerMssg = document.querySelector("h1")

const loggedUser = localStorage.getItem("logCred")

if(loggedUser) {
    const localObject = JSON.parse(loggedUser)

    headerMssg.classList = "activeHeader"
    headerMssg.innerText = `Welcome ${localObject.userEmail}`
    modalBtn.innerText = "Logout"
} else {
    modalBtn.innerText = "Login"
}

modalBtn.addEventListener("click", function() {
    if(loggedUser) {
        localStorage.removeItem("logCred")
        location.reload()
    } else {
        modal.style.display = "block"
    }
})

closeModalBtn.addEventListener("click", function() {
    modal.style.display = "none"
})

loginBtn.addEventListener("click", function(e) {
    e.preventDefault()

    const loginValues = {
        userEmail: emailInput.value,
        userPassword: passInput.value 
    }

    localStorage.setItem("logCred", JSON.stringify(loginValues))
    location.reload()
})