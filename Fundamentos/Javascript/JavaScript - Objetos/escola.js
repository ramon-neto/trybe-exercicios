let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

function addProperty(obj, property, value) {
    obj[property] = value;
}
addProperty(lesson2, 'turno', 'noite')

console.log(lesson2);

function chaves(obj) {
    let keys = [];
    for (let key in obj){
        keys.push(key);
    }
    return keys;
}

console.log(chaves(lesson2));


<script>
        var colorsEx = ['black', 'red', 'green', 'blue'];

        if (localStorage.getItem('colorPalette') !== null) {
            let colorsRandom = JSON.parse(localStorage.getItem('colorPalette'));
            for (let i = 1; i < 4; i++) {
                colorsEx[i] = colorsRandom[i - 1];
            }
        }

        const title = document.createElement('h1');
        title.innerHTML = "Paleta de Cores";
        document.body.appendChild(title);
        title.id = 'title';

        const colorPaletteDiv = document.createElement('div');
        document.body.appendChild(colorPaletteDiv);
        colorPaletteDiv.id = 'color-palette';

        for (let i = 0; i <= 3; i++) {
            const colorDiv = document.createElement('div');
            colorDiv.className = 'color';
            colorDiv.addEventListener('click', (event) => {
                document.querySelector('.selected').classList.remove('selected')
                event.target.classList.add('selected');
            });
            colorDiv.style.backgroundColor = colorsEx[i];
            colorPaletteDiv.appendChild(colorDiv);
        }
        
        colorPaletteDiv.firstElementChild.classList.add('selected');        
        
        const colorRandomButton = document.createElement('button');
        document.body.appendChild(colorRandomButton);
        colorRandomButton.innerHTML = 'Cores aleatórias'
        colorRandomButton.id = 'button-random-color';
        
        colorRandomButton.addEventListener('click', () => {
            const arrayOfColorDivs = document.getElementsByClassName('color');
            const randomColors = [];
            for (let i = 0; i < 3; i++) {
                let color = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`
                if (randomColors.indexOf(color) === -1) {
                    randomColors.push(color);
                } else {
                    i--;
                }
            }
            for (let i = 1; i < 4; i++) {
                arrayOfColorDivs[i].style.backgroundColor = randomColors[i - 1];
            }
            localStorage.setItem('colorPalette', JSON.stringify(randomColors));
        })
        
        const colorResetButton = document.createElement('button');
        document.body.appendChild(colorResetButton);
        colorResetButton.innerHTML = 'Limpar'
        colorResetButton.id = 'clear-board';
        
        const pixelBoardDiv = document.createElement('div');
        pixelBoardDiv.id = 'pixel-board';
        pixelBoardDiv.style.marginTop = '10px';
        document.body.appendChild(pixelBoardDiv);
        
        for (let i = 0; i <= 4; i++) {
            const rowDiv = document.createElement('div');
            pixelBoardDiv.appendChild(rowDiv);
            for (let i = 0; i <= 4; i++){
                const pixelDiv = document.createElement('div');
                pixelDiv.className = 'pixel';
                pixelDiv.addEventListener('click', (event) => {
                    event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
                    const pixels = document.getElementsByClassName('pixel');
                    let array = [];
                    for (let pixel of pixels){
                        array.push(pixel.style.backgroundColor);
                    }
                    localStorage.setItem('pixelBoard', JSON.stringify(array));
                })
                pixelDiv.style.backgroundColor = 'rgb(255, 255, 255)';
                rowDiv.appendChild(pixelDiv);
            }
        }
        
        if (localStorage.getItem('pixelBoard') !== null) {
            const pixels = document.getElementsByClassName('pixel');
            const pixelsColors = JSON.parse(localStorage.getItem('pixelBoard'));
            for (let i = 0; i < pixelsColors.length; i++){
                pixels[i].style.backgroundColor = pixelsColors[i];
            }
        } 

        colorResetButton.addEventListener('click', () => {
            const pixels = document.getElementsByClassName('pixel');
            for (let pixel of pixels){
                pixel.style.backgroundColor = 'rgb(255, 255, 255)';
            }
        })

    </script>