//code importation
import { pokeList } from "./pokelist"


export function drawCards() {
  for (const pokeIndex of pokeList) {
    const pokeCard = `<div class="pokemon-card" id="${pokeIndex.id}">
        <div class="informations">
          <span>${pokeIndex.name}</span>
          <span>#${pokeIndex.id}</span>
        </div>
        <img src="./src/imagens/${pokeIndex.image}" alt="${pokeIndex,name}" class="gif" />
        <ul class="types">
          <li class="type ${pokeIndex.type1}">${pokeIndex.type1}</li>
          <li class="type ${pokeIndex.type2}">${pokeIndex.type2}</li>
          </ul>
        <p class="descrition">${pokeIndex.description}</p>
      </div>`;

    document.getElementById("pokemon-list").innerHTML += pokeCard;
  }
}