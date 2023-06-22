const contentContainer = document.querySelector(`.contentContainer`);
const canvas = document.querySelector(`.canvas`);
const gridSlider = document.querySelector(`.slidecontainer input`);
const gridSliderButton = document.querySelector(`.slidecontainer button`);


gridSliderButton.onclick = () => initializeBoard(gridSlider.value);

const initializeBoard = (num) => {
    if (nodesCreated) removeNodes();
    addNodes(num)
    //added here to add listeners come after nodes are created
    initializeEventListeners()
}

const initializeEventListeners = () => {
    const node = document.querySelector(`div`);
    const nodes = document.querySelectorAll(`.leftNode div`);
    const clearButton = document.querySelector(`#clearButton`);

    nodes.forEach((node) => {
        node.addEventListener(`mouseover`, () => {
            colorNode(node);
        })
        
    });
}

let nodesCreated = false;
let nodesAmount = 0;
const addNodes = (num) => {
    
    for (i = 0; i < num; i++) {

        let newDiv = document.createElement('div');
        newDiv.className = "leftNode";
        canvas.appendChild(newDiv)
        
        for (j = 0; j < num; j++) {
        let nodeDiv = document.createElement('div');
        newDiv.appendChild(nodeDiv);
        }
    }
    nodesAmount = num;
    nodesCreated = true;
}

const removeNodes = () => {
    for (i=0; i < nodesAmount; i++) {
        canvas.children[0].remove()
    }
}

const colorNode = (node) => {
    console.log(node)
    node.setAttribute('style', 'background: black;');
}

clearButton.addEventListener(`click`, () => clearNodes())

const clearNodes = () => {
    const nodes = document.querySelectorAll(`.leftNode div`);
    nodes.forEach((node) => {
        node.setAttribute('style', 'background: white;');
    });
};

