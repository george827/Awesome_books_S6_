const toggleView = (index) => {
  switch (index) {
    case 0:
      document.getElementById('list').style.display = 'flex';
      document.getElementById('new').style.display = 'none';
      document.getElementById('contact').style.display = 'none';
      break;
    case 1:
      document.getElementById('list').style.display = 'none';
      document.getElementById('new').style.display = 'flex';
      document.getElementById('contact').style.display = 'none';
      break;
    case 2:
      document.getElementById('list').style.display = 'none';
      document.getElementById('new').style.display = 'none';
      document.getElementById('contact').style.display = 'flex';
      break;
    default:
      document.getElementById('list').style.display = 'flex';
      document.getElementById('new').style.display = 'none';
      document.getElementById('contact').style.display = 'none';
  }
};

const toList = () => {
  const bkList = document.getElementById('list-link');
  const newLink = document.querySelector('#new-link span');
  const contactLink = document.querySelector('#contact-link span');
  if (document.getElementById('title').value !== '' && document.getElementById('author').value !== '') {
    toggleView(0);
    bkList.style.color = 'inherit';
    newLink.style.color = 'inherit';
    contactLink.style.color = 'inherit';
  }
};

export { toList, toggleView };