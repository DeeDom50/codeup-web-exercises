import { books } from "../data/books.js";

const renderBookElement = (book) => {
	// destructuring the object to make it easy to see what properties are available
	const { isbn10, title, authors, categories, thumbnail, description, published_year, average_rating, num_pages, ratings_count } = book;
	// creating a node
	const bookElement = document.createElement("tr");
	// adding innerhtml to the node
	bookElement.innerHTML = `
        <td>${title}</td>
        <td>${authors}</td>
        <td>${categories}</td>
        <td>${isbn10}</td>
        <td>${published_year}</td>
        <td>
            <button class="btn btn-sm btn-danger" data-delete>Delete</button>
        </td>
    `;
	// adding any event listeners the element needs
	const deleteBtn = bookElement.querySelector("button[data-delete]");
	deleteBtn.addEventListener("click", (e) => {
		bookElement.remove();
	});
	// appending the element onto the dom
	document.querySelector("#book-list").appendChild(bookElement);
};

const updateBooks = (books) => {
	// get all user input values for filtering
	const categoryInput = document.querySelector("#category");
	const categoryValue = categoryInput.value;
	// console.log("Category Value => ", categoryValue);
	const searchInput = document.querySelector("#search");
	const searchValue = searchInput.value;
	// console.log("Search Value => ", searchValue);

	// filter
	let filteredBooks = books;
	// filter by each value individually
	filteredBooks = filteredBooks.filter((book) => {
		if (!categoryValue) {
			return true;
		}
		if (typeof book.categories !== "string") {
			return false;
		}
		return book.categories.toLowerCase().includes(categoryValue.toLowerCase());
	});
	filteredBooks = filteredBooks.filter((book) => {
		if (!searchValue) {
			return true;
		}
		if (typeof book.title !== "string") {
			return false;
		}
		if (!searchValue) {
			return true;
		}
		return book.title.toLowerCase().includes(searchValue.toLowerCase());
	});

	// render filtered array
	for (let book of filteredBooks) {
		renderBookElement(book);
	}
};

// MAIN
(() => {
	updateBooks(books);
})();