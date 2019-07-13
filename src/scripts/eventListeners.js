import { API } from "./api";
import { interestsToDom } from "./interestToDom";
import {addPoiToDb} from "./interestToDb.js"
import {editInterestForm} from "./editPOIForm.js"
import {createEditedPOI} from "./helperFunctions.js"
import { create } from "domain";
import { interestComponent } from "./mainComponent";

function submitPoiEl () {
  let submitBtn = document.querySelector("#POI-submit-btn")
  submitBtn.addEventListener("click", event => {
    event.preventDefault()
    addPoiToDb()
  })
}

function editPoiEl () {
  let editBtns = document.querySelectorAll(".edit-btn")
  editBtns.forEach(btn => {
    btn.addEventListener("click", event =>{
      btn.style.display = "none"
      let id = event.target.id.split("-")[1]
      let costToEdit = document.querySelector(`#cost-${id}`).textContent.split("$")[1]
      let reviewToEdit = document.querySelector(`#review-${id}`)
      if (reviewToEdit === null) {
        editInterestForm(id, costToEdit)
      } else {
        editInterestForm(id, costToEdit, reviewToEdit.textContent.split(": ")[1])
      }
      saveEditEl(id)
      cancelEditEl(id)
    })
  })
}

function cancelEditEl (id) {
  console.log(id)
let cancelBtn = document.querySelector(`#cancelEditBtn-${id}`)

cancelBtn.addEventListener("click", event => {
  event.preventDefault()
  let newid = event.target.id.split("-")[1]
  API.getData("interests", id, "?_expand=place")
  .then(
    obj => {

      let POI = interestComponent(obj.id, obj.name, obj.place.name, obj.description, obj.cost, obj.review)
      let POIContainer = document.querySelector(`#POI-${id}`)
      POIContainer.innerHTML = ""
      POIContainer.innerHTML = POI
     let btn = document.querySelector(`#editBtn-${id}`)
     btn.addEventListener("click", event => {
      btn.style.display = "none"
      let id = event.target.id.split("-")[1]
      let costToEdit = document.querySelector(`#cost-${id}`).textContent.split("$")[1]
      let reviewToEdit = document.querySelector(`#review-${id}`)
      if (reviewToEdit === null) {
        editInterestForm(id, costToEdit)
      } else {
        editInterestForm(id, costToEdit, reviewToEdit.textContent.split(": ")[1])
      }
      saveEditEl(id)
      cancelEditEl(id)
      })
    }
    )
  })
}


function saveEditEl (id) {
  let saveBtn = document.querySelector(`#saveEdit-${id}`)
  saveBtn.addEventListener("click", event => {
    event.preventDefault()
    console.log(event)
    console.log(id)
    API.getData("interests", id).then(data =>  {
      let newCostValue = document.querySelector(`#editedInterestCost-${id}`).value
      let newReviewValue = document.querySelector(`#editedInterestReview-${id}`).value
      saveEditedObj(createEditedPOI(data.placeId, data.name, data.description, data.id, newCostValue, newReviewValue))

     })
  })
}


function deletePOIEl () {
  let deleteBtns = document.querySelectorAll(".delete-btn")
  deleteBtns.forEach(btn => {
    btn.addEventListener("click", event => {
      let id =btn.id.split("-")[1]
      let nameText = document.querySelector(`#name${id}`).textContent.split(": ")[1]
      let x = confirm("Are you sure you want to delete " + nameText + " as a Point of Interest?")
      if (x) {
        API.deleteData("interests", id)
        .then(interestsToDom)
      }
    })
  })

}


function saveEditedObj (editedPOI) {
  API.editData("interests", editedPOI)
  .then(interestsToDom)

}




export {submitPoiEl, editPoiEl, deletePOIEl}