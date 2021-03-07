function loadRepos() {
	const username = document.getElementById("username").value;
	const url = `https://api.github.com/users/${username}/repos`;

	fetch(url)
		.then((respose) => {
			console.log(respose);
			const dataPromise = respose.json();
			dataPromise.then((data) => {
				console.log(data);
				const ulElement=document.getElementById('repos');
				ulElement.removeChild(ulElement.children[0]);
				data.forEach(repo => {
					const li=document.createElement('li');
					const a=document.createElement('a');
					a.href=repo.html_url;
					a.textContent=repo.full_name;
					li.appendChild(a);
					ulElement.appendChild(li);
				});
			})
			//or respose.json().then((data) => {console.log(data)})
		})
}