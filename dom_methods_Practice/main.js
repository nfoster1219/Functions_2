let sectionElement = document.querySelector ('body')

let button = document.createElement ('button')

button.addEventListener("click", myFunction)
button.append('Remove')
sectionElement.append(button)

let newMain = document.createElement('main')
sectionElement.append(newMain)


function myFunction() {newMain.remove()}

let imgElement = document.createElement('img')
imgElement.src = 'https://external-preview.redd.it/bYvPoGz2zrd469tcDL-OsdH5lKQ3xNvnerdd5gf5-lU.png?auto=webp&s=504e02e7017853063411ae8eb843312b5c0a7c1e'
sectionElement.append(imgElement)
newMain.append(imgElement)

let anchorElement = document.createElement('a')
anchorElement.href = 'https://www.pokemon.com/us/pokedex/eevee'
anchorElement.append('Pokemon')
sectionElement.append(anchorElement)
newMain.append (anchorElement)

 //newMain.remove()
 