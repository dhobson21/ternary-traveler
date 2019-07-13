function createNewPoint (name, descrip, cost, place) {
  return {
    placeId: place,
    name: name,
    description: descrip,
    cost: cost,
    review: ""
  }
}

function createEditedPOI(placeId, name, description, id, cost, review) {
  return {
    placeId,
    name,
    description,
    id: id,
    cost: cost,
    review: review
  }
}


export {createNewPoint, createEditedPOI}