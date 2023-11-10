
function ToggleSidebar() {
	let x = document.querySelector(".mobile-nav");
	
	if (x.style.display === "flex") {
		x.style.display = "none";
	} else {
		x.style.display = "flex";
	}
}

