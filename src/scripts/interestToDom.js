import {API} from "./api.js"
import {interestComponent} from "./mainComponent.js"
import {editPoiEl} from "./eventListeners.js"

function interestsToDom () {
let interestContainer = document.querySelector("#interests-container")
interestContainer.innerHTML = ""
  API.getData("interests", "?_expand=place")
  .then(data => {
    data.forEach(obj => {
      let POI = interestComponent(obj.id, obj.name, obj.place.name, obj.description, obj.cost, obj.review)
      let interests = document.querySelector("#interests-container")
      interests.innerHTML += POI
    })
      editPoiEl()
  })
}



export {interestsToDom}