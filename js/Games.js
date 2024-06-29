





import { addloader ,removeloader} from "./ui_Games.js";  
import { goDetails} from "./Details.js";  

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ea0e381ce4msh21a2dab46699508p1096b2jsnaad3555f56ef',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
// get Games
export default async function getGames(category) {

	addloader()
	let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
	let response = await api.json();
	let card = ""
	for (let i = 0; i < response.length; i++) {
		let desc = response[i].short_description;
		let manyDesc = desc.slice(0, 40)
		card += ` <div  class="col-lg-3 col-md-4 col-sm-6 ">
                        <button class="cardlink" id='cardId${response[i].id}' >
                            <div class="card" style="height: 25rem;">
                                <img id="card-img" class="card-img-top  p-3 w-100" src="${response[i].thumbnail}" alt="Card image cap">
                                <div class="card-body ">
                                    <div class="d-flex justify-content-between mb-3">
                                        <h5 class="card-title text-white">${response[i].title}</h5>
                                        <a id="free" href="#" class="btn">Free </a>
                                    </div>
                                    <h5 class="text-center">${manyDesc}
                                    </h5>
                                </div>
                                <div class="card-footer">
                                    <div class="footer-btns d-flex justify-content-between ">
                                        <p class="card-title px-3">${response[i].genre}</p>
                                        <p class="card-title  px-3">${response[i].platform}</p>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>`
	}

	
	document.querySelector("#cardContainer").innerHTML = card
	let btns = document.querySelectorAll(".col-lg-3 button")
	btns.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			goDetails(e.currentTarget.getAttribute("id").split("cardId")[1])
		})
		
	})

	removeloader()
	return response
	
}