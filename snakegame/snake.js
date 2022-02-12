const canvas=document.getElementById('canvas');
const pen=canvas.getContext('2d');
pen.fillStyle="yellow";
const H=735;
const W=1200;
const cs=67;
let food = null;
let score = 0;
let gameOver = false;
const snake={
    initlength:5,
    direction:'right',
    cells:[],
    createsnake:function(){

        for(let i=0;i<this.initlength;i++)
        {
            this.cells.push({x:i,
                y:0});
        }
        },
        drawsnake:function(){
            
            for(let cell of this.cells)
            {
                pen.fillRect(cell.x*cs,cell.y*cs,cs-0.5,cs-0.5);
            }
        },
        
updatesnake:function()
{
    const headx=this.cells[this.cells.length-1].x;
    const heady=this.cells[this.cells.length-1].y;
    
    if(food.x===headx &&food.y===heady)
    {
        food=getRandomFood();
        score++;
    }
    else{
        this.cells.shift();
    }
    let nextx;
    let nexty;
    
    if(this.direction==='left'){
    nextx=headx-1;
    nexty=heady;
    if(nextx*cs<0)
    {
        gameOver=true;
    }
   }
    else if(this.direction==='up')
    {
        nextx=headx;
        nexty=heady-1;
        if(nexty*cs<0)
    {
        gameOver=true;
    }

    }
    else if(this.direction==='down')
    {
        nextx=headx;
        nexty=heady+1;
        if(nexty*cs>=H)
    {
        gameOver=true;
    }
        
    }
    else if(this.direction==='right')
    {
        nextx=headx+1;
        nexty=heady;
        if(nextx*cs>=W)
    {
        gameOver=true;
    }
        
    }
    this.cells.push({
        x:nextx,
        y:nexty
    });

}

};





//init
function init()
{
    snake.createsnake();
    snake.drawsnake();
    food=getRandomFood();
    function keypressed(e)
    {
        if(e.key==='ArrowLeft')
        {
            snake.direction='left';
        }
        else if(e.key==='ArrowRight')
        {snake.direction='right'}
        else if(e.key==='ArrowDown')
        {
            snake.direction='down';
        }
        else
        {
            snake.direction='up';
        }
        console.log(snake.direction);
    }
    document.addEventListener('keydown',keypressed);
}



//draw
function draw()
{
    if(gameOver==true)
    {
        pen.font='40px sans-serif';
        pen.fillStyle='red';
        pen.fillText('Game Over',50,100);
        console.log('GAME OVER');
        clearInterval(id);
        return;
    }
    
    pen.clearRect(0,0,W,H);
    pen.font='40px sans-serif';
        pen.fillStyle='lightgreen';
        pen.fillText(`Score : ${score}`, 50, 50);
    
    pen.fillStyle='blue';
    pen.fillRect(food.x * cs, food.y * cs, cs, cs);
    pen.fillStyle = 'yellow';
    snake.drawsnake();
    


}


//update
function update()
{
  snake.updatesnake();
}

//gameloop function

 function gameLoop()
 {
   update();
   draw();
 }
 function getRandomFood() {
    
    const foodX = Math.floor(Math.random() * (W - cs) / cs);
    const foodY = Math.floor(Math.random() * (H - cs) / cs);
    
    food = {
        x: foodX,
        y:foodY
    }

    return food;
}


// start the game - initilise




init();

const id = setInterval(gameLoop, 300);

 
