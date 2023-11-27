
const createTodoElement = todo => {
	const listItem = document.createElement('li');
	listItem.classList.add("to-do-item list-group-item d-flex justify-content-between align-items-center")
	listItem.innerHTML = `
		<p class="m-0">${todo}</p>
	    <button class="btn btn-danger" id="removeBox">Done</button>
	`;
}
const removeBtn = document.querySelector("#removeBox");
removeBtn.addEventListener("click", (e) => {
	const box = document.createElement("div");
	box.classList.remove("box");
	const boxContainer = document.querySelector("#boxes")
	boxContainer.appendChild(box);
});
//MAIN
(() => {

})();

