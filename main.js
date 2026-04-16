const gridContainer = document.querySelector('.grid');
const sidesSettings = document.querySelector('.settings');

let defaultColor = 'black';
let defaultGridSize = 5;

let gridPxl = document.querySelector('#grid-pxl');
gridPxl.style['text-align'] = 'center';
gridPxl.textContent = `Grid size: ${defaultGridSize} X ${defaultGridSize}`;

// Create gird items cell
function createGridItems(size){
    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < (size * size); i++) {
        const item = document.createElement('div');
        item.className = ['element'];
        item.style['border'] = '1px solid #aca8a8';               
        gridContainer.appendChild(item);
    } 

    // // Paintiong each Grid items inside its cellF
    const gridItems = document.querySelectorAll('.element');
    gridItems.forEach(itemGrid => itemGrid.addEventListener('mousemove', () => itemGrid.style['backgroundColor'] = defaultColor));    
    
};
createGridItems(defaultGridSize);

// Getting items after created them
const items = document.querySelectorAll('.element');


// Adding a randow background the the grid item
function handleRainbowMode() {    
        const items = document.querySelectorAll('.element');    
        items.forEach(itemP => itemP.addEventListener('mousemove',function(){

        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        itemP.style['backgroundColor'] = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }));
};

// Erasing a grid item from its cell;
function handleEraserMode(){
    defaultColor = '#fff'
    const eraserVallue = defaultColor;
    const erasingItems = document.querySelectorAll('.element');
    erasingItems.forEach(item => item.addEventListener('mousemove',  function() {
        item.style.backgroundColor = eraserVallue;       
    }));  
};

// Grid items's cleaner
function handleCleanerMode() {
        defaultColor = '#fff';
        clearValue = defaultColor;

        const items = document.querySelectorAll('.element');            
        items.forEach(item => item.style['background-color'] = clearValue); 
        
} 
// Add a default color to an element;
function setupDefaultColor() {
    const elems = document.querySelectorAll('.element');
    elems.forEach(elem => elem.addEventListener('mousemove',
        function() {
            this.style['backgroundColor'] = defaultColor;
        }
    ))
}

// Change the grid item background using the color type 
const colorControl = document.querySelector('#color-control');

function controlGridColor(e) {    
    const ranColor = document.querySelectorAll('.element');
    const selectedColor = e.target.value; 
    ranColor.forEach(itemCo => itemCo.addEventListener('mousemove', () => itemCo.style.backgroundColor =  `${selectedColor}`))
};
colorControl.addEventListener('change', controlGridColor);

// Handling the grid size items
function handleGridPexl(e) { 
    gridContainer.innerHTML = ''; 
    const targetValue = e.target.value;    
    
    console.log(e.target);  
    gridPxl.textContent = `Grid size: ${targetValue} X ${targetValue}`;    
    createGridItems(targetValue); 
    setupDefaultColor();    
} 

// Activaing modes buttons
function activateModes() {

    const gridSizeBtn = document.querySelector('#grid-size');
    gridSizeBtn.mix = 10;
    gridSizeBtn.addEventListener('change', handleGridPexl);  

    sidesSettings.addEventListener('click', function(e){
        const targetValue = e.target.value;
        if (targetValue === 'rainbow') { 
            handleRainbowMode();             
       
        } else if (targetValue === 'eraser') {           
            handleEraserMode();
            

        } else if (targetValue === 'clear') {
           handleCleanerMode();
        }            
    })         
}
activateModes();







