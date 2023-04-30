const body = document.querySelector('body');

const startButton = document.createElement('button');    

const mainFrame = document.createElement('div');
    
    const drawMenu = document.createElement('div');
    
    const drawFrame = document.createElement('div');
        const tiles = document.createElement('div');

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
        
        drawMenu.classList.add('draw-menu')
        drawFrame.classList.add('draw-frame')

        
    };
}