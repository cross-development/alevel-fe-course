const cardContainer = document.getElementById('card-container');
const paginationContainer = document.getElementById('pagination');

const cardsPerPage = 3;
const totalCards = 12;
const totalPages = Math.ceil(totalCards / cardsPerPage);

let currentPage = 1;

function updateCards(page) {
  for (let i = 1; i <= totalCards; i++) {
    const card = document.getElementById(`card-${i}`);

    if (i >= (page - 1) * cardsPerPage + 1 && i <= page * cardsPerPage) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  }
}

function updatePagination(page) {
  let paginationHTML = `
          <li class="page-item ${page === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" id="prev-button" aria-disabled="${page === 1}">Previous</a>
          </li>`;

  for (let i = 1; i <= totalPages; i++) {
    const activeClass = i === page ? 'active' : '';

    paginationHTML += `<li class="page-item ${activeClass}"><a class="page-link" href="#">${i}</a></li>`;
  }

  paginationHTML += `
          <li class="page-item ${page === totalPages ? 'disabled' : ''}">
            <a class="page-link" href="#" id="next-button" aria-disabled="${page === totalPages}">Next</a>
          </li>`;

  paginationContainer.innerHTML = paginationHTML;
}

function handlePrevClick() {
  if (currentPage > 1) {
    currentPage--;

    updateCards(currentPage);
    updatePagination(currentPage);
  }
}

function handleNextClick() {
  if (currentPage < totalPages) {
    currentPage++;

    updateCards(currentPage);
    updatePagination(currentPage);
  }
}

paginationContainer.addEventListener('click', e => {
  if (e.target.id === 'prev-button') {
    handlePrevClick();
  } else if (e.target.id === 'next-button') {
    handleNextClick();
  } else if (e.target.tagName === 'A') {
    currentPage = parseInt(e.target.textContent);

    updateCards(currentPage);
    updatePagination(currentPage);
  }
});

updateCards(currentPage);
updatePagination(currentPage);
