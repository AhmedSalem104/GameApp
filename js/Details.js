


import { addloader ,removeloader} from "./ui_Games.js";  


const optionsDetails = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ea0e381ce4msh21a2dab46699508p1096b2jsnaad3555f56ef',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
// get getGameDetails
export async function goDetails(id) {
	addloader()
	 await getDetails(id)
	removeloader()
	document.querySelector("#Home").classList.add("d-none")
	document.querySelector("#datails").classList.remove("d-none")

}
// get details by id
export async function getDetails(id) {

	let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, optionsDetails)
	let response = await api.json();

	document.querySelector("#detailsRow").innerHTML = `
	  <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="mb-5">
                        <img src="${response.thumbnail}" class="w-100" alt="">
                    </div>
                </div>
                <div class="col-lg-8 col-md-6 col-sm-12 text-white mb-5 ">
                    <div class=" details text-lg-start">
                        <h1 class="mb-4"> Title: ${response.title}</h1>
                        <h4 class="detailsCategory mb-4">Category : <a class="btn btn-info px-2">${response.genre} </a></h4>
                        <h4 class="detailsPlatform mb-4">Platform :<a class="btn btn-info px-2">${response.platform} </a> </h4>
                        <h4 class="detailsstatus mb-4">Status: <a class="btn btn-info px-2">Live </a></h4>
                        <p class="detailsdescription">
                           ${response.description}
                        </p>
                        <a target="_blank" href="${response.game_url}" class="btn btn-outline-warning text-white fs-5 px-3 py-2">Show Game</a>
                    </div>
                </div>`


	return response
}
// close details screen
document.querySelector("#close").addEventListener("click", function () {
	document.querySelector("#datails").classList.add("d-none")
	document.querySelector("#Home").classList.remove("d-none")
})