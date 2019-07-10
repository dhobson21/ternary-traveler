function createDash () {
  let mainContainer = document.querySelector("#container")
let dashContainer = document.createElement("section")
dashContainer.setAttribute("id", "dash-container")
let interestsDiv = document.createElement("div")
interestsDiv.setAttribute("id", "interests-container")
let myInterests = document.createElement("h2")
myInterests.setAttribute("id", "my-interests")
myInterests.innerHTML = "My Points of Interest"
let newInterestsContainer = document.createElement("div")
newInterestsContainer.setAttribute("id", "new-interests")
let newInterestsHead = document.createElement("h2")
newInterestsHead.setAttribute("id", "add-interest-header")
newInterestsHead.innerHTML = "Add New Point of Interest"
let addInterestForm = document.createElement("form")
let interestNameContainer = document.createElement("fieldset")
let interestNameInput = document.createElement("input")
interestNameInput.setAttribute("type", "text")
interestNameInput.setAttribute("name", "new-interest-name")
interestNameInput.setAttribute("id", "newInterest-name")
interestNameInput.setAttribute("placeholder", "Enter Name")
let interestNameLabel = document.createElement("label")
interestNameLabel.textContent = "Point of Interest Name: "
let interestDescripContainer = document.createElement("fieldset")
let interestDescripInput = document.createElement("textarea")
let interestDescripLabel = document.createElement("label")
interestDescripLabel.textContent = "Point of Interest Description: "
interestDescripInput.setAttribute("name", "new-interest-descrip")
interestDescripInput.setAttribute("id", "newInterest-descrip")
interestDescripInput.setAttribute("placeholder", "Enter Description of New Point of Interest")
interestDescripInput.setAttribute("cols", "30")
interestDescripInput.setAttribute("rows", "5")
let interestCostContainer = document.createElement("fieldset")
let interestCostInput = document.createElement("input")
let interestCostLabel = document.createElement("label")
interestCostLabel.textContent = "Point of Interest Cost: "
interestCostInput.setAttribute("type", "text")
interestCostInput.setAttribute("name", "new-interest-cost")
interestCostInput.setAttribute("id", "newInterest-cost")
interestCostInput.setAttribute("placeholder", "Enter Cost")
let interestPlaceContainer = document.createElement("fieldset")
let interestPlaceLabel = document.createElement("label")
interestPlaceLabel.textContent = "Point of Interest Location: "
let interestPlaceSelector = document.createElement("select")
interestPlaceSelector.setAttribute("name", "POIPlace")
interestPlaceSelector.setAttribute("id", "POI-place")
let italyPlace = document.createElement ("option")
let switzerlandPlace = document.createElement ("option")
let francePlace = document.createElement ("option")
italyPlace.setAttribute("value", "1")
italyPlace.textContent = "Italy"
switzerlandPlace.setAttribute("value", "2")
switzerlandPlace.textContent = "Switzerland"
francePlace.setAttribute("value", "3")
francePlace.textContent = "France"
let interestSubmitBtn = document.createElement("button")
interestSubmitBtn.textContent ="Create Point of Interest"
interestSubmitBtn.setAttribute("id", "POI-submit-btn")



interestsDiv.appendChild(myInterests)

interestNameContainer.appendChild(interestNameLabel)
interestNameContainer.appendChild(interestNameInput)
interestDescripContainer.appendChild(interestDescripLabel)
interestDescripContainer.appendChild(interestDescripInput)
interestCostContainer.appendChild(interestCostLabel)
interestCostContainer.appendChild(interestCostInput)
interestPlaceSelector.appendChild(italyPlace)
interestPlaceSelector.appendChild(switzerlandPlace)
interestPlaceSelector.appendChild(francePlace)
interestPlaceContainer.appendChild(interestPlaceLabel)
interestPlaceContainer.appendChild(interestPlaceSelector)

addInterestForm.appendChild(interestNameContainer)
addInterestForm.appendChild(interestDescripContainer)
addInterestForm.appendChild(interestCostContainer)
addInterestForm.appendChild(interestPlaceContainer)
addInterestForm.appendChild(interestSubmitBtn)

newInterestsContainer.appendChild(newInterestsHead)
newInterestsContainer.appendChild(addInterestForm)

dashContainer.appendChild(interestsDiv)
dashContainer.appendChild(newInterestsContainer)

mainContainer.appendChild(dashContainer)

}




export {createDash}