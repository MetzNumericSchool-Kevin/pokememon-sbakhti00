const allPokemons = []
let pokemonsInGame = []
let pokemonsVisible = []

let compteur = 0

fetch(`http://localhost:5500/data/pokemon.json`)
    .then(response => response.json())
    .then(data => {
        allPokemons.push(...data)
        console.log(allPokemons)
        while (pokemonsInGame.length<12) {
            let randomInt = Math.floor(Math.random() * allPokemons.length)
            if (!(pokemonsInGame.includes(allPokemons[randomInt]))) {
                let i = 0
                for (i=0;i<2;i+=1) {
                    pokemonsInGame.push(allPokemons[randomInt])
                }
            }
        }
        console.log(pokemonsInGame)
        const grid = document.querySelector('#grille_de_jeu').querySelectorAll(':scope > *')
        let tableauIntermediaire = []
        grid.forEach(element => {
            let randomInt = Math.floor(Math.random() * pokemonsInGame.length)
            while (tableauIntermediaire.includes(randomInt)) {
                randomInt = Math.floor(Math.random() * pokemonsInGame.length)
                console.log(tableauIntermediaire)
            }
            tableauIntermediaire.push(randomInt)
            ///////////////////////////////////////
            element.classList.add(`element-${pokemonsInGame[randomInt].name}`)
            let pokemon = document.createElement('img')
            pokemon.classList.add(pokemonsInGame[randomInt].name)
            pokemon.src = pokemonsInGame[randomInt].sprite
            pokemon.style.display = 'none'
            element.appendChild(pokemon)
            let bush = document.createElement('img')
            bush.src = 'assets/bush.webp'
            bush.classList.add('bush',`bush-${pokemonsInGame[randomInt].name}`)
            element.appendChild(bush)
            let pokeball = document.createElement('img')
            pokeball.src = 'assets/pokeball.png'
            pokeball.style.display = 'none'
            pokeball.classList.add(`pokeball-${pokemonsInGame[randomInt].name}`)
            element.appendChild(pokeball)

            element.addEventListener('click', () => {
                pokemon.style.display = 'block'
                bush.style.display = 'none'
                let pokemonVisible = pokemonsInGame[randomInt].name
                console.log(pokemonsVisible)
                if (pokemonsVisible.length <= 2) {
                    pokemonsVisible.push(pokemonVisible)
                    if (pokemonsVisible.length == 2) {
                        if (pokemonsVisible[0] == pokemonsVisible[1]) {
                            let po1 = pokemonsVisible[0]
                            let po2 = pokemonsVisible[1]
                            pokemonsVisible = []
                            setTimeout(() => {
                                let b1 = document.querySelectorAll(`.pokeball-${po1}`)
                                b1.forEach(element => {
                                    element.style.display = 'block'
                                });
                                let b2 = document.querySelectorAll(`.pokeball-${po2}`)
                                b2.forEach(element => {
                                    element.style.display = 'block'
                                });
                            }, 1000);
                            let afficher_compteur = document.getElementById("stat_nombre_de_coups") 
                            afficher_compteur.textContent = compteur+=1
                        } else {
                            let po1 = pokemonsVisible[0]
                            let po2 = pokemonsVisible[1]
                            pokemonsVisible = []
                            setTimeout(() => {
                                let p1 = document.querySelectorAll(`.${po1}`)
                                p1.forEach(element => {
                                    element.style.display = 'none'
                                });
                                let p2 = document.querySelectorAll(`.${po2}`)
                                p2.forEach(element => {
                                    element.style.display = 'none'
                                });
                                let b1 = document.querySelectorAll(`.bush-${po1}`)
                                b1.forEach(element => {
                                    element.style.display = 'block'
                                });
                                let b2 = document.querySelectorAll(`.bush-${po2}`)
                                b2.forEach(element => {
                                    element.style.display = 'block'
                                });
                                pokemonsVisible = []
                            }, 1000)
                            let afficher_compteur = document.getElementById("stat_nombre_de_coups") 
                            afficher_compteur.textContent = compteur+=1
                        }
                    }
                }

            })
        })
    })
    .catch(error => console.error(error))
    

























        // grid.forEach(element => {
        //     let randomInt = Math.floor(Math.random() * pokemonsInGame.length)
        //     while (!(tableauIntermediaire.includes(randomInt))) {
        //         randomInt = Math.floor(Math.random() * pokemonsInGame.length)
        //         if (!(tableauIntermediaire.includes(randomInt))) {
        //             console.log(randomInt)
        //             tableauIntermediaire.push(randomInt)
        //         }
        //     }
        //     console.log(tableauIntermediaire)
        //     let pokemon = document.createElement('img')
        //     pokemon.src = pokemonsInGame[randomInt].sprite
        //     element.appendChild(pokemon)
            // let bush = document.createElement('img')
            // bush.src = 'assets/bush.webp'
            // element.appendChild(bush)
            // pokemon.style.display = 'none'
            // bush.addEventListener('click', () => {
            //     bush.style.display = 'none'
            //     pokemon.style.display = 'block'
            // })
            // liste 2 dimensions paire

    // })
    // .catch(error => console.error(error))
