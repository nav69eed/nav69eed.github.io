gameBoard = document.querySelector('.game-board')
// console.log(gameBoard)
let snakeArr = [
    { x: 10, y: 10 }
]
let food = { x: 9, y: 9 }
let direction = { x: 0, y: 0 }
let speed = 500;
let score = 0;
function directionfunction() {
    window.addEventListener('keydown', (e) => {
        switch (e.key) {
            case "ArrowRight":
                direction = { x: 1, y: 0 }
                break;
            case "ArrowLeft":
                direction = { x: -1, y: 0 }
                break;
            case "ArrowUp":
                direction = { x: 0, y: -1 }
                break;
            case "ArrowDown":
                direction = { x: 0, y: 1 }
                break;

            default:
                break;
        }
    })
}

setInterval(() => { mainfunction(); }, speed);

directionfunction();

function isCollide() {
    for (let i = 1; i < snakeArr.length; i++) {
        if (snakeArr[i].x === snakeArr[0].x && snakeArr[i].y === snakeArr[0].y) {
            direction = { x: 0, y: 0 }
            return true;
        }
    }

    if (snakeArr[0].x < 0 | snakeArr[0].x >= 30 | snakeArr[0].y < 0 | snakeArr[0].y >= 30) {
        direction = { x: 0, y: 0 }
        return true;
    }
    else
        return false;
}


function mainfunction() {
    if (isCollide()) {
        alert("game over")
        snakeArr = [
            { x: 10, y: 10 }
        ]
        score = 0;
    }


    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] };

    }
    // console.log(snakeArr[0].x)
    // console.log(snakeArr[0].y)
    snakeArr[0].x += direction.x;
    snakeArr[0].y += direction.y;

    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        snakeArr.unshift({ x: snakeArr[0].x + direction.x, y: snakeArr[0].y + direction.y });
    }

    // Part 2: Display the snake and Food
    // Display the snake
    gameBoard.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if (index === 0) {
            snakeElement.classList.add('head')
        }
        else {
            snakeElement.classList.add('body')
        }
        gameBoard.appendChild(snakeElement);
    });
    // food appear
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement);

}