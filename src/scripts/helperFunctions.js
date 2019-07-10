function createNewPoint (name, descrip, cost, place) {
  return {
    placeId: place,
    name: name,
    description: descrip,
    cost: cost,
    review: ""
  }
}

function createEditedObj (id, cost, review) {
  return {
    id: id,
    cost: cost,
    review: review
  }
}


export {createNewPoint, createEditedObj}