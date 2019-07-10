import { API } from "./api";
import { interestToDom } from "./interestToDom";
import {addPoiToDb} from "./interestToDb.js"
import {editInterestForm} from "./editPOIForm.js"

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
    })
  })
}

function saveEditEl (id) {
  let saveBtn = document.querySelector(`#saveEdit-${id}`)
  saveBtn.addEventListener("click", event => {
    event.preventDefault()
    console.log(id)
    let newCostValue = document.querySelector(`#editedInterestCost-${id}`).value
    let newReviewValue = document.querySelector(`#editedInterestReview-${id}`).value
    // saveEditedObj(editedObj)
  })

}


// function saveEditedObj (editedObj) {
//   API.editData("interests", editedObj)

// }




export {submitPoiEl, editPoiEl}