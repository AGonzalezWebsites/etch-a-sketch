const contentContainer = document.querySelector(`.contentContainer`);
const canvas = document.querySelector(`.canvas`);
const gridSlider = document.querySelector(`.slidecontainer input`);
const gridSliderButton = document.querySelector(`.slidecontainer button`);


gridSliderButton.onclick = () => initializeBoard(gridSlider.value);

const initializeBoard = (num) => {
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

const addNodes = (num) => {
    for (i = 0; i < num; i++) {
        const newDiv = document.createElement('div');
        newDiv.className = "leftNode";
        canvas.appendChild(newDiv)
        
        for (j = 0; j < num; j++) {
        const nodeDiv = document.createElement('div');
        newDiv.appendChild(nodeDiv);
        }
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

