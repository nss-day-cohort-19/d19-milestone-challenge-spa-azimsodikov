"use strict"
var CarLot = (function (original) {
  var inventory = [];
    original.loadInventory = function (callback) {
    var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.addEventListener("load", function (event) {
      	inventory = JSON.parse(event.target.responseText).cars;
      	console.log('JSON is loaded:', inventory)
      	callback(inventory);
      	CarLot.activateEvents();
      });
       inventoryLoader.open('GET', 'inventory.json')
       inventoryLoader.send();
    }
    return original;
})(CarLot || {});

