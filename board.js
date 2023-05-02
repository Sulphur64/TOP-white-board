const body = document.querySelector('body');

const startButton = document.createElement('button');    

const mainFrame = document.createElement('div');
    
    const drawMenu = document.createElement('div');
        const menuInputText = document.createElement('div');
        const menuInputMatrix = document.createElement('input');
        const menuVerbose = document.createElement('div');
        const menuModshades = document.createElement('button');
        const menuModRainbow = document.createElement('button');
    
    const drawFrame = document.createElement('div');
        


eventHandler(0);

function eventHandler (state){
    startBoard(0);

    if (state==0){startButton.addEventListener("click", ()=>{ //init
        startBoard(1);

    },{once:true});
    };
};


function startBoard (state) { // handles the mainframepop and reset

        if (state==0){ //at init
        body.appendChild(startButton);
        

        startButton.classList.add('start-button')
        startButton.textContent= 'summon the Board'

    } else if (state==1){ //window active
        body.removeChild(startButton);

        body.appendChild(mainFrame);
        
        const handleL = document.createElement('div');
        const handleR = document.createElement('div');

        body.insertBefore(handleL,mainFrame);
        body.appendChild(handleR);
        
        mainFrame.classList.add('main-frame');
        handleL.classList.add('handleL');
        handleR.classList.add('handleR');
        
        mainFrame.appendChild(drawFrame);
        mainFrame.appendChild(drawMenu);
        
        drawMenu.classList.add('draw-menu');
        drawFrame.classList.add('draw-frame');

        drawMenu.appendChild(menuInputText);
        menuInputText.classList.add('draw-menu-text');
        menuInputText.textContent = "change matrix resolution:";

        drawMenu.appendChild(menuInputMatrix);
        menuInputMatrix.placeholder = "number between 1 and 100";

        gridFiller(16);
        menuInputMatrix.addEventListener("change",()=>gridFiller(menuInputMatrix.value)) 

        drawMenu.appendChild(menuVerbose);
        menuVerbose.classList.add('draw-menu-text');
        menuVerbose.textContent = "drawing style:";

        drawMenu.appendChild(menuModshades);
        menuModshades.classList.add('draw-menu-button');
        menuModshades.classList.add('hel');
        menuModshades.textContent = "Hel";
        menuModshades.addEventListener("click", ()=>{ menuDrawStyle(0)});
        
        drawMenu.appendChild(menuModRainbow);
        menuModRainbow.classList.add('draw-menu-button');
        menuModRainbow.classList.add('bifrost');
        menuModRainbow.textContent = "bifrost";
        menuModRainbow.addEventListener("click", ()=> menuDrawStyle(1));
        
    };
};


function menuDrawStyle(mod){
    const tiles = document.querySelectorAll('div.tiles');

    function random (){ return Math.floor(Math.random()*255) };

    tiles.forEach(node => {
        const clone = node.cloneNode();
        
        drawFrame.removeChild(node);

        drawFrame.appendChild(clone);

        clone.addEventListener('mouseenter',function currentMod(){

            if(mod == 0){//greyscale
                let RGBValues = clone.style.backgroundColor.replaceAll(/[^0-9,]/ig,"").split(",");

                clone.style.backgroundColor = `rgb(${RGBValues[0]-20}, ${RGBValues[1]-20}, ${RGBValues[2]-20})`;

            } else if (mod == 1){//rainbow

                clone.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
            };
        });       
    });
};


function gridFiller(num){ //build the cells and attach an even listener to them
    if((num > 0) && (num <= 100)){
            while (drawFrame.firstChild){
            drawFrame.removeChild(drawFrame.lastChild);
        };

        for (let i=0;i < (num * num);i++){
            
            drawFrame.setAttribute('style',`grid-template: repeat( ${num}, 1fr) / repeat(${num}, 1fr)`)
            const tile= document.createElement("div");
            tile.classList.add("tiles");
            tile.style.backgroundColor = 'rgb(255, 255, 255)';
            drawFrame.appendChild(tile);

        };
    };
};