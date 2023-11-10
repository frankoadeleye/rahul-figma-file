
function ToggleSidebar() {
	// we retrieve the element with specific className of 'mobile-nav' and save it in variable x
	let x = document.querySelector(".mobile-nav");
	
	//on calling of this function, we check if the element is displayed 'flex', and then change it to 'none' or vise-versa
	if (x.style.display === "flex") {
		x.style.display = "none";
	} else {
		x.style.display = "flex";
	}
}
