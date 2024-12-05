document.addEventListener("DOMContentLoaded", () => {
  const characterList = document.getElementById("character-list")

  fetch("https://rickandmortyapi.com/api/character")
    .then((data) => data.json())
    .then((data) => {
      const characters = data.results
      characters.forEach(character => {
        const { image, name, status, specie, gender } = character
        const card = document.createElement("div")
        card.className = "character-card"
        card.innerHTML = `
          <img src="${image}" alt="imagen de ${name}">
          <h3>${name}</h3>
          <p><strong>Status:</strong> ${status}</p>
          <p><strong>Gender:</strong> ${gender}</p>
        `
        characterList.appendChild(card)
      });
    })
})