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
			addCharacterFavorite: async (people_id) => {
			    const store = getStore();
			    const url = `${process.env.BACKEND_URL}/favorite/character/${character_id}`;
			    const options = {
			        method: "POST",
			        headers: {
			            "Content-Type": "application/json"
			        }
			    };
			    try {
			        const response = await fetch(url, options);
			        if (!response.ok) {
			            console.log('Error al agregar el personaje favorito:', response.status, response.statusText);
			            return;
			        }
			        const data = await response.json();
			        console.log("Personaje añadido a favoritos:", data);
			        setStore({ favorites: [...store.favorites, data] });
			    } catch (error) {
			        console.error('Error:', error);
			    }
			},
			removeCharacterFavorite: async (people_id) => {
			    const store = getStore();
			    const url = `${process.env.BACKEND_URL}/favorite/character/${character_id}`;
			    const options = {
			        method: "DELETE",
			        headers: {
			            "Content-Type": "application/json"
			        }
			    };
			    try {
			        const response = await fetch(url, options);
			        if (!response.ok) {
			            console.log('Error al eliminar el personaje favorito:', response.status, response.statusText);
			            return;
			        }
			        const data = await response.json();
			        console.log("Personaje eliminado de favoritos:", data);
			        setStore({ favorites: store.favorites.filter(fav => fav.id !== people_id) }); 
			    } catch (error) {
			        console.error('Error:', error);
			    }
			},
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
			addPlanetFavorite: async (planet_id) => {
			    const store = getStore();
			    const url = `${process.env.BACKEND_URL}/favorite/planet/${planet_id}`;
			    const options = {
			        method: "POST",
			        headers: {
			            "Content-Type": "application/json"
			        }
			    };
			    try {
			        const response = await fetch(url, options);
			        if (!response.ok) {
			            console.log('Error al agregar el planeta favorito:', response.status, response.statusText);
			            return;
			        }
			        const data = await response.json();
			        console.log("Planeta añadido a favoritos:", data);
			        setStore({ favorites: [...store.favorites, data] }); 
			    } catch (error) {
			        console.error('Error:', error);
			    }
			},
			removePlanetFavorite: async (planet_id) => {
			    const store = getStore();
			    const url = `${process.env.BACKEND_URL}/favorite/planet/${planet_id}`;
			    const options = {
			        method: "DELETE",
			        headers: {
			            "Content-Type": "application/json"
			        }
			    };
			    try {
			        const response = await fetch(url, options);
			        if (!response.ok) {
			            console.log('Error al eliminar el planeta favorito:', response.status, response.statusText);
			            return;
			        }
			        const data = await response.json();
			        console.log("Planeta eliminado de favoritos:", data);
			        setStore({ favorites: store.favorites.filter(fav => fav.id !== planet_id) }); 
			    } catch (error) {
			        console.error('Error:', error);
			    }
			},
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
