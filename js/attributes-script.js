
document.addEventListener("DOMContentLoaded", function () {
	function changeProfile() {
		// Change "profile-pic" src attribute after two seconds
		setTimeout(function () {
			const profilePic = document.querySelector("#profile-pic");
			profilePic.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbG-0Pc_dX0swJiOnUTf58QaSAwwUTpBUi6Q&usqp=CAU";
		}, 2000);

		// Change "profile-name" using innerHTML after four seconds
		setTimeout(function () {
			const profileName = document.querySelector("#profile-name");
			profileName.innerHTML = "Jane Smith";
		}, 4000);

		// Add a class to "profile-desc" after six seconds
		setTimeout(function () {
			const profileDesc = document.querySelector("#profile-desc");
			profileDesc.classList.add("custom-description");
		}, 6000);

		// Array of background colors
		const colors = ["#FFC0CB", "#D3FFCE", "#FFD700", "#87CEEB", "#FFA07A"];
		const profileCard = document.querySelector("#profile-card");

		// Use setInterval to change the background color every two seconds
		let colorIndex = 0;
		setInterval(function () {
			profileCard.style.backgroundColor = colors[colorIndex];
			colorIndex = (colorIndex + 1) % colors.length;
		}, 2000);

		// Prompt for a new name after all timeouts have expired
		setTimeout(function () {
			const newName = prompt("Enter a new name for your profile:");
			if (newName !== null && newName.trim() !== "") {
				const profileName = document.querySelector("#profile-name");
				profileName.innerHTML = newName;
			}
		}, 8000);
	}

	changeProfile();
});

