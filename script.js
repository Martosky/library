const bookOutPut = document.getElementById("output-book");
const openModal = document.getElementById("open-modal");
const inputTitle = document.getElementById("title");
const inputAuthor = document.getElementById("author")
const description = document.getElementById("description")
const popup = document.getElementById("popup-box")

const myFunction = () => {
    popup.style.display = "block"
    popup.style.transition = "2s"
}