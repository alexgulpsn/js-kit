import { getUsers, deleteUser } from './api/userApi';

getUsers().then(result => {
	let userBody = "";

	result.forEach(user => {

		userBody += `<tr>
		<td><a href="#" data-id="${user.id}" class="deleteduser">Delete</a></td>
		<td>${user.id}</td>
		<td>${user.name}</td>
		</tr>`
	});

	global.document.getElementById('users').innerHTML = userBody;

	const deleteLinks = global.document.getElementsByClassName('deleteduser');

	Array.from(deleteLinks, link => {
		link.onclick = function (event) {
			const element = event.target;
			event.preventDefault();
			deleteUser(element.attributes["data-id"].value);
			const row = element.parentNode.parentNode;
			row.parentNode.removeChild(row);
		};
	});
});
