const myLibrary = [];
const currentLibrary = [];
const submit = document.getElementById("book_creator");
const infoBtn = document.getElementById("show_info_cover");
const overlay = document.getElementById("overlay");
const infoTab = document.getElementById("info_tab_container");
const createBookBtn = document.getElementById("create_book_btn");
const formTab = document.getElementById("input_container");
const formCloseBtn = document.getElementById("close_form_btn");

function BookConstructor(title, author, publisher, pages, read_status, id, book_cover){
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.pages = pages;
    this.read_status = read_status;
    this.id = id;
    this.book_cover = book_cover;
}

submit.addEventListener('submit', (event) => addBookToLib(event));
createBookBtn.addEventListener('click', toggleForm);
formCloseBtn.addEventListener('click', removeForm);

function toggleForm(){
    formTab.classList.add("active");
    overlay.classList.add("active");
}

function removeForm(){
        formTab.classList.remove("active");
        overlay.classList.remove("active");
}

function addBookToLib(event){
    event.preventDefault();

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let publisher = document.getElementById("publisher").value;
    let pages = document.getElementById("pages").value;
    let id = crypto.randomUUID();
    let rdStat1 = document.getElementById("read_status_yes");
    let book_cover = document.getElementById("cover").files[0];
    

    if (rdStat1.checked == true){
        let read_status = true
        myLibrary.push(new BookConstructor(title, author, publisher, pages, read_status, id, book_cover));
    }
    else{
        let read_status = false
        myLibrary.push(new BookConstructor(title, author, publisher, pages, read_status, id, book_cover));
    }

    createBookElement();

    submit.reset();
}

function createBookElement(){
    const myBooks = document.getElementById("my_books_container");
    const book = document.createElement("button");
    
    book.classList.add("info_btn");

    const currentBookObj = myLibrary.at(-1);

    book.dataset.bookID = currentBookObj.id;

    myBooks.appendChild(book);

    const infoTab = document.createElement("ul");
    infoTab.id = "info_tab";

    const titleDisplay = document.createElement("li");
    const authorDisplay = document.createElement("li");
    const publisherDisplay = document.createElement("li");
    const pagesDisplay = document.createElement("li");
    const readDisplay = document.createElement("li");
    const coverDisplay = document.createElement("li");

    coverDisplay.classList.add("cover_page");

    const fieldArr = [titleDisplay, authorDisplay, publisherDisplay, pagesDisplay, readDisplay, coverDisplay];

    for(const item of fieldArr){
        item.classList.add("info_tab_fields");
        infoTab.appendChild(item)
    }


    for(const books of myLibrary){
        if(books.id == book.dataset.identity){
            titleDisplay.innerText = book.title;
            authorDisplay.innerText = book.author;
            publisherDisplay.innerText = book.publisher;
            pagesDisplay.innerText = book.pages;
            coverDisplay.src = book.cover;

            if(book.read_status === true){
                readDisplay.innerText = "Yes";
            }
            else{
                readDisplay.innerText = "No";
            }
        }
    }
}

function defaultSlide(){
    for(const item of currentLibrary){
        const myBooks = document.getElementById("my_books_container");
        const book = document.createElement("button");

        myBooks.appendChild(book);

        book.dataset.id = item.id 
        
        book.classList.add("info_btn");

        const infoTab = document.createElement("ul");
        infoTab.id = "info_tab";

        const titleDisplay = document.createElement("li");
        const authorDisplay = document.createElement("li");
        const publisherDisplay = document.createElement("li");
        const pagesDisplay = document.createElement("li");
        const readDisplay = document.createElement("li");
        const coverDisplay = document.createElement("li");

        coverDisplay.classList.add("cover_page");

        const fieldArr = [titleDisplay, authorDisplay, publisherDisplay, pagesDisplay, readDisplay, coverDisplay];

        for(const item of fieldArr){
            item.classList.add("info_tab_fields");
            infoTab.appendChild(item);
        }

        if(item.id == item.dataset.identity){
            titleDisplay.innerText = item.title;
            authorDisplay.innerText = item.author;
            publisherDisplay.innerText = item.publisher;
            pagesDisplay.innerText = item.pages;
            coverDisplay.src = item.cover;

            if(item.read_status === true){
                readDisplay.innerText = "Yes";
            }
            else{
                readDisplay.innerText = "No";
            }
        }
    }

}