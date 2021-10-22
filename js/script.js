function minionChange(identificator) {
    if (identificator == 'minion1') {
        document.getElementById('minion2').style.opacity = 0.5;
        document.getElementById('minion1').style.opacity = 1;
    } else {
        document.getElementById('minion1').style.opacity = 0.5;
        document.getElementById('minion2').style.opacity = 1;
    }
}