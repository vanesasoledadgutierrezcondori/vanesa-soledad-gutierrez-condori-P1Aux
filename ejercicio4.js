let i = 0;
let num;
let uno = 0;
let dos = 0;
let tres = 0;
do {
    num = Math.floor((Math.random() * 99) + 1);
    if ((num != uno) && (num != dos) && (num != 3)) {
        document.write(num + "<br>");
        i++;
        if (i == 1) {
            uno = num;
        }
        if (i == 2) {
            dos = num;
        }
        if (i == 3) {
            tres = num;
        }
    }
} while (i < 3);