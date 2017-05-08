"use strict"
var CarLot = (function(original) {
    var userInput = document.getElementById('input');
    var currentTargetInfo = '';
    var description = '';
    original.addBorder = function(event, color) {
        currentTargetInfo = event.currentTarget;
        // console.log('Watch:', currentTargetInfo)
        description = currentTargetInfo.querySelector('.description');
        // console.log('Watch:', abc.innerHTML)
        userInput.addEventListener('keyup', (e) => {
            description.innerHTML = '';
            description.innerHTML += userInput.value;
            if (e.keyCode === 13) {
                currentTargetInfo.classList.remove(color);
                userInput.value = '';
            }
        });
        currentTargetInfo.classList.toggle(color);
        userInput.focus();
    }
    original.enterText = function(event, color) {
        if (event.type === 'click') {
            console.log('Watch for it', description)
            currentTargetInfo.classList.remove(color);
            userInput.value = '';
        }
    }
    return original;
})(CarLot || {});
