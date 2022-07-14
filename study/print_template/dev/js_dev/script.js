var popOpen = document.querySelectorAll('.pop-btn');
var popId;

for (let i = 0; i < popOpen.length; i++) {
    popOpen[i].addEventListener('click', function () {
        popId = this.getAttribute('data-pop-id');
        document.querySelector('.' + popId).classList.add('on');
    });
}

function popClose(target) {
    document.querySelector(target).classList.remove('on');
}

function printBtn() {
    window.print();
}