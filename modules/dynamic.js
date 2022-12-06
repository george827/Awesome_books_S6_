export default class DomMethods {
  constructor(books) {
    this.books = books;
  }

  removeBook(tag) {
    if (Object.keys(this.books).length > 0) {
      this.books = this.books.filter(function get(el) {
        return el.id !== parseInt(this[0], 36);
      }, tag);
      localStorage.setItem('books', JSON.stringify(this.books));
      window.dispatchEvent(new Event('storage'));
    }
  }

  addNewBook() {
    document.getElementById('book-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const id = this.books.length;
      const book = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      if (book && author) {
        this.books.push({ id, book, author });
        document.getElementById('error').textContent = '';
        localStorage.setItem('books', JSON.stringify(this.books));
        window.dispatchEvent(new Event('storage'));
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
      } else {
        document.getElementById('error').textContent = 'Provide all details';
        document.getElementById('error').style.setProperty('color', 'red');
      }
    });
  }

  loadBooks() {
    const el = document.querySelector('.book-list ul');
    el.innerHTML = '';
    if (localStorage.getItem('books')) {
      const data = JSON.parse(localStorage.getItem('books'));
      if (Object.keys(data).length > 0) {
        data.forEach((element) => {
          const span0 = document.createElement('span');
          span0.innerText = element.id;
          const span1 = document.createElement('span');
          span1.textContent = `${element.book} by ${element.author}`;
          const input = document.createElement('input');
          input.type = 'button';
          input.value = 'Remove';
          input.addEventListener('click', (e) => {
            const bookTag = e.target.parentNode.parentNode.querySelector('span:first-child').innerText;
            this.removeBook(bookTag);
          });
          const span2 = document.createElement('span');
          span2.appendChild(input);
          const li = document.createElement('li');
          li.appendChild(span0);
          li.appendChild(span1);
          li.appendChild(span2);
          el.appendChild(li);
        });
      }
      this.books = data;
    }
  }
}
