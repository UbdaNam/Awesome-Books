const addBooks = (me) => {
  const titleInput = document.querySelector('.bookTitle');
  const authorInput = document.querySelector('.author');
  if (titleInput.value && authorInput.value) {
    me.addBooks(titleInput.value, authorInput.value);
  }
};

export default addBooks;