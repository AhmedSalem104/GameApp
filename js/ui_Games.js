

import getGames from "./Games.js"


getGames("mmorpg")

document.querySelector(".navbar-nav").addEventListener("click", async function (e) {
	let val = e.target.textContent.toLowerCase()
	let result = await getGames(val)
	console.log(result)
})


// control loader
export  function addloader() {
	document.querySelector(".loader").classList.remove("d-none")
	document.querySelector("#Home").style.opacity = .3;
}
export  function removeloader() {
	document.querySelector(".loader").classList.add("d-none")
	document.querySelector("#Home").style.opacity = 1;
}
















/* getGames("mmorpg")
getGames("shooter")
getGames("sailing")
getGames("permadeath")
getGames("superhero")
getGames("pixel")
getDetails(20)
 */










