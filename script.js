const bookOutPut = document.getElementById("output-book");
const openModal = document.getElementById("open-modal");
const inputTitle = document.getElementById("title");
const inputAuthor = document.getElementById("author")
const description = document.getElementById("description")
const popup = document.getElementById("popup-box")

const myFunction = () => {
    popup.style.display = "block"

}
const closeModal = () => {
 const closeMOdal =   document.getElementById("close-modal");
    if (popup.style.display === "block"){
        popup.style.display = "none";
    }
}
window.addEventListener("click", (e)=>{
    if (e.target.className === "hidden"){
        e.target.style.display = "none"
    }
})

const addBook = () => {
    const inputTItle = inputTitle.value;
    const inputAuthor = inputAuthor.value;
    const description = description.value;
    
}