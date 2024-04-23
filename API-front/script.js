function fetchFirstGenPokemon() {
    const firstGenIds = Array.from({ length: 151 }, (_, i) => i + 1); // Generate IDs from 1 to 151

    const promises = firstGenIds.map(id => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json());
    });

    Promise.all(promises)
        .then(pokemons => {
            const cardsContainer = document.getElementById('1-container');
            pokemons.forEach(pokemonData => {
                const card = generateCard(pokemonData);
                cardsContainer.insertAdjacentHTML('beforeend', card);
            });
        })
        .catch(error => console.error('Error fetching first generation Pokemon:', error));
}

function generateCard(pokemonData) {
    const firstType = pokemonData.types[0].type.name;
    const types = pokemonData.types.map(type => type.type.name).join(', ');

    const card = `
        <div class="card ${firstType}" data-types="${types}">
            <div class="card-inner">
                <div class="card-front">
                    <img class="pokemon-image" src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
                </div>
                <div class="card-back">
                    <h4><b>${pokemonData.name}</b></h4>
                    <div class="container">
                        <p><b>Species:</b> ${pokemonData.species.name}</p>
                        <p><b>Type:</b> ${types}</p>
                        <p><b>Abilities:</b> ${pokemonData.abilities.map(ability => ability.ability.name).join(', ')}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    return card;
}




fetchFirstGenPokemon()

function fetchSecondGenPokemon() {
    const secondGenIds = Array.from({ length: 100 }, (_, i) => i + 152); 

    const promises = secondGenIds.map(id => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json());
    });

    Promise.all(promises)
        .then(pokemons => {
            const cardsContainer = document.getElementById('2-container');
            pokemons.forEach(pokemonData => {
                const card = generateCard(pokemonData);
                cardsContainer.insertAdjacentHTML('beforeend', card);
            });
        })
        .catch(error => console.error('Error fetching second generation Pokemon:', error));
}

fetchSecondGenPokemon();

function fetchThirdGenPokemon() {
    const thirdGenIds = Array.from({ length: 135 }, (_, i) => i + 252);

    const promises = thirdGenIds.map(id => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json());
    });

    Promise.all(promises)
        .then(pokemons => {
            const cardsContainer = document.getElementById('3-container');
            pokemons.forEach(pokemonData => {
                const card = generateCard(pokemonData);
                cardsContainer.insertAdjacentHTML('beforeend', card);
            });
        })
        .catch(error => console.error('Error fetching third generation Pokemon:', error));
}

fetchThirdGenPokemon();

function fetchFourthGenPokemon() {
    const fourthGenIds = Array.from({ length: 107 }, (_, i) => i + 387); 

    const promises = fourthGenIds.map(id => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json());
    });

    Promise.all(promises)
        .then(pokemons => {
            const cardsContainer = document.getElementById('4-container');
            pokemons.forEach(pokemonData => {
                const card = generateCard(pokemonData);
                cardsContainer.insertAdjacentHTML('beforeend', card);
            });
        })
        .catch(error => console.error('Error fetching fourth generation Pokemon:', error));
}

fetchFourthGenPokemon();

function fetchFifthGenPokemon() {
    const fifthGenIds = Array.from({ length: 156 }, (_, i) => i + 494); 

    const promises = fifthGenIds.map(id => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json());
    });

    Promise.all(promises)
        .then(pokemons => {
            const cardsContainer = document.getElementById('5-container');
            pokemons.forEach(pokemonData => {
                const card = generateCard(pokemonData);
                cardsContainer.insertAdjacentHTML('beforeend', card);
            });
        })
        .catch(error => console.error('Error fetching fifth generation Pokemon:', error));
}

fetchFifthGenPokemon();

function fetchSixthGenPokemon() {
    const sixthGenIds = Array.from({ length: 72 }, (_, i) => i + 650); 

    const promises = sixthGenIds.map(id => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json());
    });

    Promise.all(promises)
        .then(pokemons => {
            const cardsContainer = document.getElementById('6-container');
            pokemons.forEach(pokemonData => {
                const card = generateCard(pokemonData);
                cardsContainer.insertAdjacentHTML('beforeend', card);
            });
        })
        .catch(error => console.error('Error fetching sixth generation Pokemon:', error));
}

fetchSixthGenPokemon();


function fetchSeventhGenPokemon() {
    const seventhGenIds = Array.from({ length: 88 }, (_, i) => i + 722); 

    const promises = seventhGenIds.map(id => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json());
    });

    Promise.all(promises)
        .then(pokemons => {
            const cardsContainer = document.getElementById('7-container');
            pokemons.forEach(pokemonData => {
                const card = generateCard(pokemonData);
                cardsContainer.insertAdjacentHTML('beforeend', card);
            });
        })
        .catch(error => console.error('Error fetching seventh generation Pokemon:', error));
}

fetchSeventhGenPokemon();

function fetchEighthGenPokemon() {
    const eighthGenIds = Array.from({ length: 96 }, (_, i) => i + 810); 

    const promises = eighthGenIds.map(id => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json());
    });

    Promise.all(promises)
        .then(pokemons => {
            const cardsContainer = document.getElementById('8-container');
            pokemons.forEach(pokemonData => {
                const card = generateCard(pokemonData);
                cardsContainer.insertAdjacentHTML('beforeend', card);
            });
        })
        .catch(error => console.error('Error fetching eighth generation Pokemon:', error));
}

fetchEighthGenPokemon();

function fetchNinthGenPokemon() {
    const ninthGenIds = Array.from({ length: 120}, (_, i) => i + 906); 

    const promises = ninthGenIds.map(id => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json());
    });

    Promise.all(promises)
        .then(pokemons => {
            const cardsContainer = document.getElementById('9-container');
            pokemons.forEach(pokemonData => {
                const card = generateCard(pokemonData);
                cardsContainer.insertAdjacentHTML('beforeend', card);
            });
        })
        .catch(error => console.error('Error fetching ninth generation Pokemon:', error));
}

fetchNinthGenPokemon();

document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-button');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const type = this.getAttribute('data-type');
            filterPokemonByType(type, this.closest('.cards-container'));
        });
    });
});

function filterPokemonByType(type, container) {
    const cards = container.querySelectorAll('.card');

    cards.forEach(card => {
        const cardTypes = card.getAttribute('data-types').split(', ');
        if (cardTypes.includes(type) || type === 'all') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}


