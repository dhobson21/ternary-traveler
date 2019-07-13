import {API} from "./api.js"
import {interestComponent} from "./mainComponent.js"
import {editPoiEl, deletePOIEl} from "./eventListeners.js"

function interestsToDom () {
let interestContainer = document.querySelector("#interests-container")
let miraInterests = document.createElement("h2")
miraInterests.textContent = "Mira's Points of Interest"
interestContainer.innerHTML = ""
interestContainer.appendChild(miraInterests)
  API.getData("interests", "?_expand=place")
  .then(data => {
    data.forEach(obj => {
      let POI = interestComponent(obj.id, obj.name, obj.place.name, obj.description, obj.cost, obj.review)
      let interests = document.querySelector("#interests-container")
      interests.innerHTML += POI
    })
      editPoiEl()
      deletePOIEl()
  })
}



export {interestsToDom}