console.log("script is running");
let list = document.getElementById("bookList");

async function getBooks() {
  //call our api
  const books = await fetch("/api/book", {
    method: "GET",
  });

  const jsonBooks = await books.json();

  //find books
  console.log("books", books);
  console.log("json books", jsonBooks);

  //loop through the list of books returned by api
  for (let i = 0; i < jsonBooks.length; i++) {
    //create li elements to hold the book names
    const myLi = document.createElement("li");
    myLi.textContent = `Title: ${jsonBooks[i].title} - Author: ${jsonBooks[i].author}`;
    //append book names into our ul element
    list.appendChild(myLi);
  }
}

getBooks();
