let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let sValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        bText = e.target.innerText;
        if (bText == 'X') {
            bText = '*';
            sValue += bText;
            screen.value = sValue;
        }
        else if (bText == 'AC') {
            sValue = "";
            screen.value = sValue;
        }
        else if (bText == '=') {
            screen.value = eval(sValue);
        }
        else if(bText == 'DE'){
            sValue = sValue.slice(0,(sValue.length-1));
            screen.value = sValue;
        }
        else {
            sValue += bText;
            screen.value = sValue;
        }

    })
}