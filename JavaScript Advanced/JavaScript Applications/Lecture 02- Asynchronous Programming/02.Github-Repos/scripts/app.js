function loadRepos() {
	const username = document.getElementById("username").value;
	const url = `https://api.github.com/users/${username}/repos`;

	fetch(url)
		.then((response) => {
			if (response.status == 404 && !response.ok) {
				throw new Error('User Not Found')
			}
			console.log(response);
			const dataPromise = response.json();
			dataPromise.then((data) => {
				console.log(data);
				const ulElement = document.getElementById('repos');
				ulElement.removeChild(ulElement.children[0]);
				data.forEach(repo => {
					const li = document.createElement('li');
					const a = document.createElement('a');
					a.href = repo.html_url;
					a.textContent = repo.full_name;
					li.appendChild(a);
					ulElement.appendChild(li);
				});
			})
			//or respose.json().then((data) => {console.log(data)})
		})
		.catch(error => {
			console.log(error);
		})
}

async function AsyncFunc() {
	const username = document.getElementById("username").value;
	const url = `https://api.github.com/users/${username}/repos`;

	try {
		const response = await fetch(url);
		const data = await response.json();
		if (response.status == 404 && !response.ok) {
			throw new Error('User Not Found')
		}
	
		const ulElement = document.getElementById('repos');
		ulElement.removeChild(ulElement.children[0]);
		data.forEach(repo => {
			const li = document.createElement('li');
			const a = document.createElement('a');
			a.href = repo.html_url;
			a.textContent = repo.full_name;
			li.appendChild(a);
			ulElement.appendChild(li);
		})
	} catch (error) {
		console.log(error);
	}
}