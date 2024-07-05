// const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wmf);

// let books = document.querySelector('#book-list .name');
// console.log(books)

// let books = document.querySelectorAll('#book-list .name');

// console.log(books)

// const bookCollection = Array.from.(fromEach(book) => {
//   console.log(book)
// })
// console.log(books)

// Array.from(books).forEach(function(book) {
//   console.log(book)
// })
// books.forEach(function(book) {
//   console.log(book)
// })

// Array.from(books).forEach(function(book){
//   console.log(book.textContent += " (Book Title)")
// })

// const bookList = document.querySelector("#book-list");
// console.log(bookList.innerHTML)
// bookList.innerHTML = '<h2>Books and more Books..<h2>';
// bookList.innerHTML += '<p> This is how you apend an HTML<p>';

// const banner = document.querySelector("#page-banner");
//  console.log('#page-banner node type is:', banner.nodeType);
//  console.log('#page-banner node type is:', banner.nodeName);
//  console.log('#page-banner has child nodes:', banner.hasChildNodes());
//  const clonedBanner = banner.cloneNode(false)
//  console.log(clonedBanner);

// const bookList = document.querySelector('#book-list');

// console.log("The parent node is : ", bookList.parentNode.parentNode) 

// console.log(bookList.childNodes)

// const bookList = document.querySelector('#book-list');
// console.log('book-list next sibling is:', bookList.nextElementSibling)

// bookList.previousElementSibling.querySelector('p').innerHTML += '<br />To cool to handle'

let btns = document.querySelectorAll('#book-list .delete');


Array.from(btns).forEach(function(btn){
  btn.addEventListener("click", function(e){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li)
  })
})