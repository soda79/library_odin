const { createElement } = require("react");

const myLibrary = [];

function BookConstructor(title, author, publisher, pages, read_status, id, book_cover){
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.pages = pages;
    this.read_status = read_status;
    this.id = id;
    this.book_cover = book_cover;
}

const submit = document.getElementById("submit_btn");


submit.addEventListener('click', addBookToLib);

function addBookToLib(){
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let publisher = document.getElementById("publisher").value;
    let pages = document.getElementById("pages").value;
    let id = crypto.randomUUID();
    let rdStat1 = document.getElementById("read_status_yes");
    let book_cover = document.getElementById("cover");

    if (rdStat1.checked == true){
        let read_status = true
        myLibrary.push(new BookConstructor(title, author, publisher, pages, read_status, id, book_cover));
    }
    else{
        let read_status = false
        myLibrary.push(new BookConstructor(title, author, publisher, pages, read_status, id, book_cover));
    }

    console.log(myLibrary[0]);
}


function createBookElement(){
    const myBooks = document.getElementById("my_books_container");
    const book = document.createElement("button")
    
    book.classList.add("show_info");
    
    myBooks.appendChild(book);
}