export default class Books {
  constructor() {
    this.bookList = [];
  }

addBooks = (title, author) => {
  const book = {
    title,
    author,
  };
  this.bookList.push(book);
  let rd = JSON.parse(localStorage.getItem('bookInfo'));
  if (rd) {
    rd.push(book);
  } else {
    rd = [];
    rd.push(book);
  }
  const booksString = JSON.stringify(rd);
  localStorage.setItem('bookInfo', booksString);
  this.retrieveData();
}

  removeItem = (item) => {
    let bookList = JSON.parse(localStorage.getItem('bookInfo'));
    bookList = bookList.filter((element) => item !== element.title);
    const string = JSON.stringify(bookList);
    localStorage.setItem('bookInfo', string);
    window.location.reload();
  }

  retrieveData = () => {
    const data = JSON.parse(localStorage.getItem('bookInfo'));
    if (data) {
      const table = document.querySelector('.table');
      let bookData = '';
      data.forEach((element) => {
        const generatedContent = `
        <tr>
        <td>"${element.author}" by ${element.title}</td>
        <td><button id="removeBtn" onclick="removeFun('${element.title}')">Remove</button></td>
        </tr>
        `;
        bookData += generatedContent;
      });
      table.innerHTML = bookData;
    }
  }
}