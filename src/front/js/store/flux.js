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
			characters: [],
			starships: [],
			planets: [],
			species: [],
			currentStarship: {},
			currentCharacter: [],
			currentPlanet: [],
			currentSpecies: [],
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
			editUser: async (dataToSend) => {
				const url = `${getStore().host}/agendas/${getStore().user}/contacts/${getStore().currentContact.id}`;
				const options = {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(dataToSend)
				};

				const response = await fetch(url, options);
				if (!response.ok) {
					console.log('Error:', response.status, response.statusText);
					return;
				}
			},
			selectUser: (contact) => {
				setStore({ currentContact: contact });
			},
			getCharacter:  async(uri)=> { 
				const response = await fetch(uri);
				if (!response.ok) {
					console.log('error: ', response.status, response.statusText);
					return;
				}
				const data = await response.json();
				setStore({ currentCharacter: data.result.properties});
			},
			getCharacters: async () => {
				const url = `${process.env.URISWAPTECH}/api/people`;
				const options = {
					method: 'GET'
				};
				const response = await fetch(url, options);
				if (!response.ok) {
					console.log('error: ', response.status, response.statusText);
					return;
				}
				const data = await response.json();
				setStore({characters: data.results})
			},
			getStarships: async() => {
				const url = `${process.env.URISWAPTECH}/api/starships`;
				const options = {
					method: 'GET'
				};
				const response = await fetch(url, options);
				if (!response.ok) {
					console.log('error: ', response.status, response.statusText);
					return;
				}
				const data = await response.json();
				setStore({ starships: data.results });
			},
			getOneStarship: async(uri) =>{
				const response = await fetch(uri);
				if (!response.ok) {
					console.log('error: ', response.status, response.statusText);
					return;
				}
				const data = await response.json();
				setStore({ currentStarship: data.result.properties});
			},
			getPlanets: async() => {
				const url = `${process.env.URISWAPTECH}/api/planets`;
				const options = {
					method: 'GET'
				};
				const response = await fetch(url, options);
				if (!response.ok) {
					console.log('error: ', response.status, response.statusText);
					return;
				}
				const data = await response.json();
				setStore({ planets: data.results });
			},
			getOnePlanet: async(uri) =>{
				const response = await fetch(uri);
				if (!response.ok) {
					console.log('error: ', response.status, response.statusText);
					return;
				}
				const data = await response.json();
				setStore({ currentPlanet: data.result.properties});
			},
			getSpecies: async () => {
				const url = `${process.env.URISWAPTECH}/api/species`;
				const options = {
					method: 'GET'
				};
				const response = await fetch(url, options);
				if (!response.ok) {
					console.log('error: ', response.status, response.statusText);
					return;
				}
				const data = await response.json();
				setStore({species: data.results})
			},
			getOneSpecies:  async(uri)=> { 
				const response = await fetch(uri);
				if (!response.ok) {
					console.log('error: ', response.status, response.statusText);
					return;
				}
				const data = await response.json();
				setStore({ currentSpecies: data.result.properties});
			},
		},
	};
};



export default getState;
