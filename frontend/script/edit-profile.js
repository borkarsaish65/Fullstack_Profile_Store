const profileEditContainer = document.querySelector("#profile-edit-container");
     	const redirectBtn = document.querySelector("#redirect-arrow-icon");
     	const profileImageEditor = document.querySelector("#profile-img");
     	const profileNameEditor = document.querySelector("#name");
     	const profilePassionEditor = document.querySelector("#passion");
     	const submitBtn = document.querySelector("#saveBtn");

     	redirectBtn.addEventListener("click", () => {
     		window.location = "/";
     	})

     	submitBtn.addEventListener("click", () => {
     		if (profileNameEditor.value !== "" && profilePassionEditor.value !== "" ) {
     		fetch("https://fullstack-profile-store-2.onrender.com/profile", {
     			method: "put",
     			headers: {"Content-Type": "application/json"},
     			body: JSON.stringify({id: "1", name: profileNameEditor.value, passion: profilePassionEditor.value, image: profileImageEditor.value})
     		})
     		window.location = "/";
     		}
     	})