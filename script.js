function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

let propertiesArr = ['title', 'author', 'pages', 'read', 'remove'];
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
            if (myLibrary[i][propertiesArr[j]] == undefined) break;
            row.appendChild(cellcontent);
        }
        // Creating a new cell, which a button is appended to for the removal of rows
        let cellcontent = document.createElement('td');
        const btn = document.createElement('input');
        btn.setAttribute("type", 'button');
        btn.setAttribute("value", "x");
        // btn.classList.add('')
        cellcontent.appendChild(btn);
        row.appendChild(cellcontent);
        row.classList.add('index'+(i));
        document.querySelector('tbody').appendChild(row);
    }
}

//  Books
const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'not read yet');
const fortyEightLaws = new Book('48 Laws of Power', 'Robert Greene', "300+", 'read half');

addBookToLibrary(theHobbit);
addBookToLibrary(fortyEightLaws);
addBooksToTable();

// Buttons for overlay
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
    modals.forEach(modal => closeModal(modal));
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

// x buttons in table to remove data from arrray and reupdate table

/*
Called function and the forEach now recalls the function itself in case it's triggered because the myLibrary array is reloaded into the table every time
Basically when one x button is clicked the array's matching index is removed and then the table is scrapped and the array is reloaded
therefore, buttons need to be reassigned their click functionality
*/

function addxbtns()
{
    const xbtns = document.querySelectorAll('input[value="x"]');
    xbtns.forEach(button => button.addEventListener('click',
        () =>
            {
                const i = button.closest('tr').getAttribute('class').slice(5);
                myLibrary.splice(i , 1);
                const rows = document.querySelectorAll('tbody tr');
                rows.forEach(row => row.remove());
                addBooksToTable();
                addxbtns();
            }
        )
    );
}

addxbtns();