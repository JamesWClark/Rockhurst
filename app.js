window.onload = function() {
    document.getElementById('btnOne').onclick = function() {
        console.log('one');
        loadJSON(1);
    }
    document.getElementById('btnTwo').onclick = function() {
        console.log('two');
        loadJSON(2);
    }
    document.getElementById('btnThree').onclick = function() {
        console.log('three');
        loadJSON(3);
    }
}

loadJSON(1);