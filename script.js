function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

let propertiesArr = ['title', 'author', 'pages', 'read'];
let myLibrary = [];

function addBookToLibrary(bookName) {
    return myLibrary.push(bookName);
}

function addBooksToTable(){
    for(let i = 0; i < myLibrary.length; i++){
        let row = document.createElement('tr');
        for(let j = 0; j < propertiesArr.length; j++){
            let cellcontent = document.createElement('td');
            cellcontent.innerText = myLibrary[i][propertiesArr[j]];
            row.appendChild(cellcontent);
        }
        document.querySelector('tbody').appendChild(row);
    }
}

//  Books
const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'not read yet');
const fortyEightLaws = new Book('48 Laws of Power', 'Robert Greene', "300+", 'read half');

addBookToLibrary(theHobbit);
addBookToLibrary(fortyEightLaws);
addBooksToTable();

const openModalBtns = document.querySelectorAll("[data-modal-target]");
const closeModalBtns = document.querySelectorAll("[data-modal-close]");
const overlay = document.getElementById('overlay');


openModalBtns.forEach( button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);    
    })
})

closeModalBtns.forEach( button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalClose);
        closeModal(modal);    
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => modal.classList.remove('active'));
    overlay.classList.remove('active');
})

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal){
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}