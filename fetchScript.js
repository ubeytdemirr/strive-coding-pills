let books = []
async function getBooks() {

    try {
        const response = await fetch('https://striveschool-api.herokuapp.com/books')
        books = await response.json()

        displayBooks(books)
    
    } catch (err) {
        console.error(err)
    }

}

function displayBooks(books) {
    let row = document.querySelector('.row')
    row.innerHTML = books.map( book => `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card d-flex flex-column">
                <div>
                    <img src="${book.img}" class="card-img-top custom-card-img" alt="${book.title}" >
                </div>
                <div class="card-body d-flex">
                    <h5 class="card-title">
                        ${book.title}
                    </h5>
                    <p class="card-text">${book.price}</p>
                </div>
            </div>
        </div>
    `).join('')
}

function filterBooks() {

    const filteredBooks = books.filter( book => book.price < 10 )
    
    displayBooks(filteredBooks)

}