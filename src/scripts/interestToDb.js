import {createNewPoint} from "./helperFunctions.js"
import {API} from "./api.js"
import {interestsToDom} from "./interestToDom.js"

function addPoiToDb() {
  let name = document.querySelector("#newInterest-name").value
  let descrip = document.querySelector("#newInterest-descrip").value
  let cost = document.querySelector("#newInterest-cost").value
  let place = document.querySelector("#newInterest-place").value
  let newPoint = createNewPoint(name, descrip, cost, +place)
  API.addData("interests", newPoint)
  .then(interestsToDom)

}

export {addPoiToDb}