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

const newbookbtn = document.querySelector(".newBook");
newbookbtn.addEventListener('click', e => alert("check click"));

// let btns = document.querySelectorAll('.topSection button');
// btns.forEach( button => {
//     button.addEventListener('click', e => )
// })