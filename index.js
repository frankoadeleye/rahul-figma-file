
function ToggleSidebar() {
	let x = document.querySelector(".mobile-nav");
	
	if (x.style.display === "flex") {
		x.style.display = "none";
	} else {
		x.style.display = "flex";
	}
}

// // Function to toggle the plus menu into minus
// function myFunction(x) {
// 	x.classList.toggle("fa-minus-circle");
// }
