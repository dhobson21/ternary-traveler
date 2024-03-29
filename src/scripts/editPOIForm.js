function editInterestForm (id, cost, review) {
  if (review) {

    let pointToEdit = document.querySelector(`#POI-${id}`)
    let editInterestForm = document.createElement("form")
    editInterestForm.setAttribute("id", `editPOIForm-${id}`)
    let interestCostContainer = document.createElement("fieldset")
    let interestCostInput = document.createElement("input")
    let interestCostLabel = document.createElement("label")
    interestCostLabel.textContent = "New Point of Interest Cost: $ "
    interestCostInput.setAttribute("type", "text")
    interestCostInput.setAttribute("name", "edited-interest-cost")
    interestCostInput.setAttribute("id", `editedInterestCost-${id}`)
    interestCostInput.setAttribute("value", `${cost}`)
    let interestReviewContainer = document.createElement("fieldset")
    let interestReviewInput = document.createElement("textarea")
    let interestReviewLabel = document.createElement("label")
    interestReviewLabel.textContent = "New Review of Point of Interest"
    interestReviewInput.setAttribute("name", "EditedInterest-review")
    interestReviewInput.setAttribute("id", `editedInterestReview-${id}`)
    interestReviewInput.textContent = `${review}`
    interestReviewInput.setAttribute("cols", "30")
    interestReviewInput.setAttribute("rows", "5")
    let saveEditedPOIBtn = document.createElement("button")
    saveEditedPOIBtn.setAttribute("id", `saveEdit-${id}`)
    saveEditedPOIBtn.setAttribute("class", "saveEditBtn")
    saveEditedPOIBtn.textContent = "Save Point of Interest"
    let cancelEditedPOIBtn = document.createElement("button")
    cancelEditedPOIBtn.setAttribute("id", `cancelEditBtn-${id}`)
    cancelEditedPOIBtn.textContent = "Cancel"


    interestCostContainer.appendChild(interestCostLabel)
    interestCostContainer.appendChild(interestCostInput)

    interestReviewContainer.appendChild(interestReviewLabel)
    interestReviewContainer.appendChild(interestReviewInput)

    editInterestForm.appendChild(interestCostContainer)
    editInterestForm.appendChild(interestReviewContainer)
    editInterestForm.appendChild(saveEditedPOIBtn)
    editInterestForm.appendChild(cancelEditedPOIBtn)
    pointToEdit.appendChild(editInterestForm)
}
else {
  let pointToEdit = document.querySelector(`#POI-${id}`)
  let editInterestForm = document.createElement("form")
  let interestCostContainer = document.createElement("fieldset")
  let interestCostInput = document.createElement("input")
  let interestCostLabel = document.createElement("label")
  interestCostLabel.textContent = "New Point of Interest Cost: $ "
  interestCostInput.setAttribute("type", "text")
  interestCostInput.setAttribute("name", "edited-interest-cost")
  interestCostInput.setAttribute("id", `editedInterestCost-${id}`)
  interestCostInput.setAttribute("value", `${cost}`)
  let interestReviewContainer = document.createElement("fieldset")
  let interestReviewInput = document.createElement("textarea")
  let interestReviewLabel = document.createElement("label")
  interestReviewLabel.textContent = "New Review of Point of Interest"
  interestReviewInput.setAttribute("name", "EditedInterest-review")
  interestReviewInput.setAttribute("id", `editedInterestReview-${id}`)
  interestReviewInput.setAttribute("value", "Enter New Review")
  interestReviewInput.setAttribute("cols", "30")
  interestReviewInput.setAttribute("rows", "5")
  let saveEditedPOIBtn = document.createElement("button")
  saveEditedPOIBtn.setAttribute("id", `saveEdit-${id}`)
  saveEditedPOIBtn.setAttribute("class", "saveEditBtn")
  saveEditedPOIBtn.textContent = "Save Point of Interest"

  interestCostContainer.appendChild(interestCostLabel)
  interestCostContainer.appendChild(interestCostInput)

  interestReviewContainer.appendChild(interestReviewLabel)
  interestReviewContainer.appendChild(interestReviewInput)

  editInterestForm.appendChild(interestCostContainer)
  editInterestForm.appendChild(interestReviewContainer)
  editInterestForm.appendChild(saveEditedPOIBtn)
  pointToEdit.appendChild(editInterestForm)

}
}

export {editInterestForm}