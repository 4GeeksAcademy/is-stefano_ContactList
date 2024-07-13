const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{ title: "FIRST", background: "white", initial: "white" },
				{ title: "SECOND", background: "white", initial: "white" }
			],
			cohorte: 'Spain 72',
			user: '',
			host: 'https://playground.4geeks.com/contact',
			alert: {
				visible: true,
				back: 'danger',
				text: 'User not exist'
			},
			contacts: [],
			currentContact: {},
			newContact: {
				"name": "",
				"phone": "",
				"email": "",
				"address": ""
			},
		},
		actions: {
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getMessage: async () => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
					const data = await resp.json();
					setStore({ message: data.message });
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},
			changeColor: (index, color) => {
				const store = getStore();
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				setStore({ demo: demo });
			},
			getUsers: async () => {
				const url = `${getStore().host}/agendas/${getStore().user}/contacts`;
				const options = {
					method: 'GET'
				};
				const response = await fetch(url, options);
				if (!response.ok) {
					console.log('error: ', response.status, response.statusText);
					return;
				}
				const data = await response.json();
				console.log(data);
				setStore({ contacts: data.contacts });
			},
			getPosts: () => { },
			setCurrentContact: (contact) => { setStore({ currentContact: contact }); },
			deleteUser: async () => {
				const url = `${getStore().host}/agendas/${getStore().user}/contacts/${getStore().currentContact.id}`;
				const options = {
					method: 'DELETE'
				};
				const response = await fetch(url, options);
				if (!response.ok) {
					console.log('Error:', response.status, response.statusText);
					return;
				}
				console.log("Respone ok");
				// const data = await response.json();
				// console.log('User deleted:', data);
			},
			createUser: async (newContact) => {
				const url = `${getStore().host}/agendas/${getStore().user}/contacts`;
				const options = {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(newContact)
				};
				const response = await fetch(url, options);
				if (!response.ok) {
					console.log('Error:', response.status, response.statusText);
					return;
				}
				const data = await response.json();
				setStore({ contacts: [...getStore().contacts, data] });
			},
			setUser: (username) => { setStore({ user: username }); },
			editUser: async (updateUser) => {
				const url = `${getStore().host}/agendas/${getStore().user}/contacts/${getStore().currentContact.id}`;
				const options = {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(updateUser)
				};

				const response = await fetch(url, options);
				if (!response.ok) {
					console.log('Error:', response.status, response.statusText);
					return;
				}
				getActions().getContact()
			},
			selectUser: (user) => {
				setStore({ selectUser: user });
			},
			updateUser: (updatedUser) => {
				const store = getStore();
				const updatedUsers = store.users.map(user =>
					user.id === updatedUser.id ? updatedUser : user
				);
				setStore({ users: updatedUsers });
			},
		},
	};
};



export default getState;
