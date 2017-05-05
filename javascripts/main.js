"use strict"
function populatePage (inventory) {
  // Loop over the inventory and populate the page
  console.log('inventory:', inventory)
  const output = document.getElementById('output');
  for (var i = 0; i < inventory.length; i++) {
    var carInfo = inventory[i];
    // console.log('cars:', carInfo);
    output.innerHTML += `<div class="text"><h2>${carInfo.make}<hr></2>
                         <h3>${carInfo.model}</h3>
                         <h4>${carInfo.year}</h4>
                         <h4>${carInfo.price} $</h4>
                         <h5 class="description">${carInfo.description}</h5><br></div>`
  }
  // Now that the DOM is loaded, establish all the event listeners needed
  return output;
}
// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);