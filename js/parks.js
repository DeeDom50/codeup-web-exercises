// MAIN
(() => {
	const highlightBtn = document.querySelector("button[data-last]");
	highlightBtn.addEventListener("click", (e) => {
		const lastListItems = document.querySelectorAll("ul li:last-child");
		for (let lastListItem of lastListItems) {
			lastListItem.classList.toggle("highlight");
		}
	});

	const h3s = document.querySelectorAll("h3");
	for (let h3 of h3s) {
		h3.addEventListener("click", (e) => {
			const list = e.target.parentElement.querySelector("ul");
			list.classList.toggle("bold");
		});
	}

	const listItems = document.querySelectorAll("li");
	for (let listItem of listItems) {
		listItem.addEventListener("click", (e) => {
			const firstListItem = e.target.parentElement.firstElementChild;
			firstListItem.classList.toggle("blue");
		});
	}

	const pictures = document.querySelectorAll("img.picture-frame");
	for (let pic of pictures) {
		pic.addEventListener("click", (e) => {
			const leftImg = pictures[0];
			const centerImg = pictures[1];
			const rightImg = pictures[2];

			const leftImgSrc = leftImg.getAttribute("src");
			const centerImgSrc = centerImg.getAttribute("src");
			const rightImgSrc = rightImg.getAttribute("src");

			if (e.target === leftImg) {
				leftImg.setAttribute("src", centerImgSrc);
				centerImg.setAttribute("src", leftImgSrc);
			}
			if (e.target === centerImg) {
				const switchWith = [leftImg, rightImg][Math.floor(Math.random() * 2)];
				centerImg.setAttribute("src", switchWith.getAttribute("src"));
				switchWith.setAttribute("src", centerImgSrc);
			}
			if (e.target === rightImg) {
				rightImg.setAttribute("src", centerImgSrc);
				centerImg.setAttribute("src", rightImgSrc);
			}
		});
	}
})();