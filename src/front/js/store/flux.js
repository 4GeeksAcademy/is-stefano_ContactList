const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,

			host: "https://playground.4geeks.com/contact/",
			slug: "",
			agenda: [],
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
			isAgenda: false,
			currentContact: {},
			characters: [],
			character: [],
			starships: [],
			starship: [],
			planets: [],
			planet: [],
			favorites: [],
			newContact: {
				"name": "",
				"phone": "",
				"email": "",
				"address": ""
			},

		},
		actions: {
			getCharacters: async () => {
				const url = `${process.env.BACKEND_URL}/api/people`
				const options = {
					method: "GET"
				};
				const response = await fetch(url, options);
				if (!response.ok) {
					console.log('error: ', response.status, response.statusText);
					return;
				}
				const data = await response.json();
				console.log(data);
				setStore({ characters: data.results });
			},
			getCharacter: async (url) => {
				const options = {
					method: "GET"
				};
				const response = await fetch(url, options);
				if (!response.ok) {
					console.log('error: ', response.status, response.statusText);
					return;
				}
				const data = await response.json();
				console.log(data);
				setStore({ character: data.result });
			},
			setCharacter: (person) => { setStore({character: person})},
			getPlanets: async () => {
				const url = `${process.env.BACKEND_URL}/api/planets`
				const options = {
					method: "GET"
				};
				const response = await fetch(url, options);
				if (!response.ok) {
					console.log('error: ', response.status, response.statusText);
					return;
				}
				const data = await response.json();
				console.log(data);
				setStore({ planets: data.results });
			},
			getPlanet: async (url) => {
				const options = {
					method: "GET"
				};
				const response = await fetch(url, options);
				if (!response.ok) {
					console.log('error: ', response.status, response.statusText);
					return;
				}
				const data = await response.json();
				console.log(data);
				setStore({ planet: data.result });
			},
			setPlanet: (star) => { setStore({planet: star})},
			getStarships: async () => {
				const url = `${process.env.BACKEND_URL}/api/starships`
				const options = {
					method: "GET"
				};
				const response = await fetch(url, options);
				if (!response.ok) {
					console.log('error: ', response.status, response.statusText);
					return;
				}
				const data = await response.json();
				console.log(data);
				setStore({ starships: data.results });
			},
			getStarship: async (url) => {
				const options = {
					method: "GET"
				};
				const response = await fetch(url, options);
				if (!response.ok) {
					console.log('error: ', response.status, response.statusText);
					return;
				}
				const data = await response.json();
				console.log(data);
				setStore({ starship: data.result });
			},
			setStarship: (vehicle) => { setStore({starship: vehicle})},
			addFavorite: (name) => {
				const store = getStore();
				const myArray = store.favorites;
				if (!myArray.includes(name)) {
					setStore({ favorites: [...myArray, name] });
				}
			},
			removeFavorite: (name) => {
                const store = getStore();
                const removeFavorites = store.favorites.filter((element) => element !== name);
                setStore({ favorites: removeFavorites });
            },

export default getState;
