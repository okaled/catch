document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.getElementById('game-container');
    const ball = document.getElementById('ball');
    const square = document.getElementById('square');
    let scoreBall = 0;
    let scoreSquare = 0;
    let scoreTriangle = 0;

    function randomPosition() {
        return Math.floor(Math.random() * 350);
    }

    function updateBallPosition() {
        const x = randomPosition();
        const y = randomPosition();
        ball.style.left = x + 'px';
        ball.style.top = y + 'px';
    }

    function updateTrianglePosition() {
        const x = randomPosition();
        const y = randomPosition();
        triangle.style.left = x + 'px';
        triangle.style.top = y + 'px';
    }

    function updateSquarePosition() {
        let x, y;
        do {
            x = randomPosition();
            y = randomPosition();
        } while (isCollision(x, y));

        square.style.left = x + 'px';
        square.style.top = y + 'px';
    }


    function isCollision(x, y) {
        const ballRect = ball.getBoundingClientRect();
        const squareRect = square.getBoundingClientRect();

        return (
            x < ballRect.right &&
            x + squareRect.width > ballRect.left &&
            y < ballRect.bottom &&
            y + squareRect.height > ballRect.top
        );
    }

    function increaseBallScore() {
        scoreBall++;
        alert('Você pegou o círculo! Pontuação: ' + scoreBall);
        updateBallPosition();
    }

    function increaseSquareScore() {
        scoreSquare++;
        alert('Você pegou o quadrado! Pontuação: ' + scoreSquare);
        updateSquarePosition();
    }
    
    ball.addEventListener('click', increaseBallScore);
    square.addEventListener('click', increaseSquareScore);

 

    updateBallPosition();
    updateSquarePosition();

});
