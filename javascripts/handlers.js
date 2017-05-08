"use strict"
var CarLot = (function(original) {
    var update_btn = document.getElementById('update-btn');
    original.activateEvents = function() {
        var cards = document.getElementsByClassName('text');
        for (var i = 0; i < cards.length; i++) {
            cards[i].addEventListener('click', (event) => {
                CarLot.addBorder(event, 'colorBorder');
            });
        }
        update_btn.addEventListener('click', (event) => {
            CarLot.enterText(event, 'colorBorder')
        });
    }
    return original;
})(CarLot || {});
