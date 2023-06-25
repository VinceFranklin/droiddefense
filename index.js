const canvas = document.querySelector('canvas');
const c=canvas.getContext('2d');

canvas.width=window.innerWidth-100;
canvas.height=window.innerHeight-100;

// var PlayerLife=15;



class Player{
    constructor(){
        this.velocity={x:0,y:0}
        this.width=50;
        this.height=50;
        this.radius=30;
        this.position={x:(canvas.width/2)-this.width/2,y:canvas.height-this.height*2}

        const image = new Image();
        image.src="images/cannon.jfif";
    }
    draw(){
        c.fillStyle="red";
        c.fillRect(this.position.x,this.position.y,this.width,this.height);
        c.fillStyle="blue";
        c.fillRect(this.position.x+this.width/4,this.position.y-this.height,this.width/2,this.height);
        // c.drawImage(this.image,this.position.x,this.position.y)
    }
    update(){
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
}

class Shooters{
    constructor({position,velocity}){
        this.position=position;
        this.velocity=velocity;
        this.radius=10;
    }
    draw(){
        c.beginPath();
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI*2);
        c.fillStyle="green";
        c.fill();
        c.closePath();
    }
    update(){
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
}

class Particle{
    constructor({position,velocity,radius,color}){
        this.position=position;
        this.velocity=velocity;
        this.radius=radius;
        this.color=color;
        this.opacity=1;
    }
    draw(){
        c.save();
        c.globalAlpha = this.opacity;
        c.beginPath();
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI*2);
        c.fillStyle=this.color;
        c.fill();
        c.closePath();
        c.restore();
    }
    update(){
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.opacity-=0.05;

    }
}

class PowerCannons{
    constructor(){
        this.position={x:50,y:110}
        this.width=150;
        this.height=150;
        this.widthline=150
    }
    draw(){
        c.fillStyle="magenta"
        c.fillRect(this.position.x, this.position.y,this.width,this.height);
        c.fillStyle="red"
        c.fillRect(50,110,this.widthline,10)
    }
    update(){
        this.draw()
    }
}

class PowerCannons2{
     constructor(){
        this.position={x:canvas.width-200,y:110}
        this.width=150;
        this.height=150;
        this.widthline=150
    }
    draw(){
        c.fillStyle="magenta"
        c.fillRect(this.position.x, this.position.y,this.width,this.height);
        c.fillStyle="red"
        c.fillRect(this.position.x,110,this.widthline,10)
    }
    update(){
        this.draw()
    }
}

class PowerShooters{
    constructor({position}){
        this.position=position;
        this.width=10;
        this.height=20;
        this.velocity={x:5,y:5}
    }
    draw(){
        c.fillStyle="#A84448"
        c.fillRect(this.position.x, this.position.y,this.width,this.height);
    }
    update(){
        this.draw()
        this.position.x+= (player.position.x+player.width/2-(powercannons.position.x+powercannons.width/2))/100
        this.position.y+= (player.position.y-(powercannons.position.y+powercannons.height))/100
    }
}

class PowerShooters2{
    constructor({position}){
        this.position=position;
        this.width=10;
        this.height=20;
        this.velocity={x:5,y:5}
    }
    draw(){
        c.fillStyle="#A84448"
        c.fillRect(this.position.x, this.position.y,this.width,this.height);
    }
    update(){
        this.draw()
        this.position.x+= (player.position.x+player.width/2-(powercannons2.position.x+powercannons2.width/2))/100
        this.position.y+= (player.position.y-(powercannons2.position.y+powercannons2.height))/100
    }
}

class Cannons{
    constructor(){
        var h=Math.floor(Math.random()*2000 +1);
        this.position={x:h,y:0}
        this.velocity={
            x:5,
            y:0
        };
        this.width=35;
        this.height=35;
        this.color="green"

    }
    draw(){
        c.fillStyle=this.color;
        c.fillRect(this.position.x,this.position.y,this.width,this.height);
    }
    update(){
        this.draw();
        // console.log("hi");

        this.position.x+=this.velocity.x;
        this.position.y+=this.velocity.y;
        this.velocity.y=0;
        if(this.position.x + this.width>=canvas.width || this.position.x<=0){
            this.velocity.y=250;
            this.velocity.x=-this.velocity.x;
        }
    }
}

class InvaderShooters{
    constructor({position,velocity}){
        this.position=position;
        this.velocity=velocity;
        this.radius=10;
        this.width=7;
        this.height=15;
    }
    draw(){
        c.fillStyle="white";
        c.fillRect(this.position.x,this.position.y,this.width,this.height);
    }
    update(){
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
}

class Invader{
    constructor({position}){
        this.velocity={x:0,y:0}
        this.width=35;
        this.height=35;
        this.radius=30;
        this.position={x:position.x,y:position.y}

        const image = new Image();
        image.src="images/cannon.jfif";
    }
    draw(){
        // var a1= Math.floor(Math.random()*254)+1;
        // var a2= Math.floor(Math.random()*254)+1;
        // var a3= Math.floor(Math.random()*254)+1;
        // var color=["red","blue","orange","yellow","green","purple"]
        // var k=Math.floor(Math.random()*color.length)+1;
        // c.fillStyle=color[k];
        // // c.strokeStyle=rgba("+a1+","+a2+","+a3+",)
        // c.fillRect(this.position.x,this.position.y,this.width,this.height);
        // c.fillStyle="blue";
        // c.fillRect(this.position.x+this.width/4,this.position.y-this.height,this.width/2,this.height);
        // c.drawImage(this.image,this.position.x,this.position.y)
        c.fillStyle='white';
        c.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
    update({velocity}){
        this.draw();
        this.position.x += velocity.x;
        this.position.y += velocity.y;
    }
}

class Home{
    constructor(){
        this.position={x:canvas.width/2,y:canvas.height*3/4}
        this.width=200
        this.height=200
    }
    draw(){
        c.fillStyle="yellow";
        c.fillRect(this.position.x, this.position.y, this.width,this.height)
    }
    update(){
        this.draw();
    }
}

class PlayerLife{
    constructor(){
        this.position={x:0,y:0}
        this.width=1500
        this.height=40
        this.deduction=5
    }
    draw(){
        c.fillStyle="orange"
        c.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
    update(deduction){
        this.width-=deduction
    }
}

class HomeLife{
    constructor(){
        this.position={x:0,y:40}
        this.width=1000
        this.height=40
        this.deduction=4
    }
    draw(){
        c.fillStyle="gray"
        c.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
    update(deduction){
        this.draw();
        this.width-=deduction
    }
}

class Grid{
    constructor(){
        this.position={
            x:0,
            y:0
        }
        this.velocity={
            x:15,
            y:0
        }
        this.invaders=[];
        const rows=Math.floor(Math.random()*5 );
        const cols=Math.floor(Math.random()*5 );
        this.width=(cols+1)*40;
        for(let i=0; i<rows; i++){
            for(let j=0; j<cols; j++){
            this.invaders.push(new Invader({position:{
                x:i*37,
                y:j*37,
            }}));
        }
     }
        // console.log(this.invaders);
    }
    update(){
        this.position.x+=this.velocity.x;
        this.position.y+=this.velocity.y;

        this.velocity.y=0;
        if(this.position.x + this.width>=canvas.width || this.position.x<=0){
            if(time>=5){
                if(this.velocity.x<0){
                    this.velocity.x=-20
                }
                else{
                this.velocity.x=20;}
                this.velocity.x=-this.velocity.x;
            }
            else{
            this.velocity.x=-this.velocity.x;
            }
            this.velocity.y=100;
        }
    }

}

class THEBOSS{
    constructor(){
        this.position={x:canvas.width/2-125,y:100}
        this.width=300;
        this.height=300;
        this.velocity={x:10,y:50}
    }
    draw(){
        c.fillStyle="#374259";
        c.fillRect(this.position.x,this.position.y,this.width,this.height)
        c.fillStyle="white"
        c.fillRect((this.width/16)+this.position.x,(this.height/8)+this.position.y,this.width*3/4 + this.width/8,this.height*3/4)
    }
    update(){
        this.draw();
        this.velocity.y=10;
        if(this.position.x + this.width>=canvas.width || this.position.x<=0){
            this.velocity.x=-this.velocity.x;
            this.position.y+=this.velocity.y;
        }
        this.velocity.y=0;
        this.position.x+=this.velocity.x;
    }
}

class BossShooter{
    constructor({position}){
        this.position=position;
        this.velocity={x:10,y:10};
        this.width=25;
        this.height=40;
        this.radius=15;
    }
    draw(){
        // c.fillStyle="#FF8551"
        // c.fillRect(this.position.x,this.position.y,this.width,this.height)
        c.beginPath();
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI*2);
        c.fillStyle="#FF8551";
        c.fill();
        c.closePath();
    }
    update(){
        this.draw()
        this.position.x-=this.velocity.x
        this.position.y+=this.velocity.y
    }
}
class BossShooter1{
    constructor({position}){
        this.position=position;
        this.velocity={x:10,y:7};
        this.width=25;
        this.height=40;
        this.radius=15;
    }
    draw(){
        // c.fillStyle="#FF8551"
        // c.fillRect(this.position.x,this.position.y,this.width,this.height)
        c.beginPath();
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI*2);
        c.fillStyle="#FF8551";
        c.fill();
        c.closePath();
    }
    update(){
        this.draw()
        // this.position.x-=this.velocity.x
        this.position.y+=this.velocity.y
    }
}
class BossShooter2{
    constructor({position}){
        this.position=position;
        this.velocity={x:10,y:15};
        this.width=25;
        this.height=40;
        this.radius=15;
    }
    draw(){
        // c.fillStyle="#FF8551"
        // c.fillRect(this.position.x,this.position.y,this.width,this.height)
        c.beginPath();
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI*2);
        c.fillStyle="#FF8551";
        c.fill();
        c.closePath();
    }
    update(){
        this.draw()
        // this.position.x-=this.velocity.x
        this.position.y+=this.velocity.y
    }
}
class BossShooter3{
    constructor({position}){
        this.position=position;
        this.velocity={x:10,y:10};
        this.width=25;
        this.height=40;
        this.radius=15;
    }
    draw(){
        // c.fillStyle="#FF8551"
        // c.fillRect(this.position.x,this.position.y,this.width,this.height)
        c.beginPath();
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI*2);
        c.fillStyle="#FF8551";
        c.fill();
        c.closePath();
    }
    update(){
        this.draw()
        this.position.x+=this.velocity.x
        this.position.y+=this.velocity.y
    }
}
class BossShooter4{
    constructor({position}){
        this.position=position;
        this.velocity={x:10,y:7};
        this.width=25;
        this.height=40;
        this.radius=15;
    }
    draw(){
        // c.fillStyle="#FF8551"
        // c.fillRect(this.position.x,this.position.y,this.width,this.height)
        c.beginPath();
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI*2);
        c.fillStyle="#FF8551";
        c.fill();
        c.closePath();
    }
    update(){
        this.draw()
        // this.position.x+=this.velocity.x
        this.position.y+=this.velocity.y
    }
}

class BossLife{
    constructor(){
        this.position={x:0,y:75}
        this.width=2000;
        this.height=30;
        this.deduction=5;
    }
    draw(){
        c.fillStyle="#002B5B"
        c.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
    update(){
        this.width-=this.deduction
    }
}

const player=new Player();
const grids=[new Grid()];
const cannons=[new Cannons(),new Cannons(),new Cannons(),new Cannons()];
const IS=[];
const particles=[];
const playerlife=new PlayerLife();
const powercannons=new PowerCannons();
const powershooters=[]
const powercannons2=new PowerCannons2();
const powershooters2=[]
const home=new Home();
const homelife=new HomeLife();
var score=0;
const theboss=new THEBOSS();
const bossshooter=[];
const bossshooter1=[];
const bossshooter2=[];
const bossshooter3=[];
const bossshooter4=[];
const bosslife=new BossLife();



// const invader=new Invader();
// const shoot=[new Shooters({
//     position:{
//         x:300,
//         y:300
//     },
//     velocity:{
//         x:0,
//         y:-5
//     }
// })]
var shoot=[]
const keys={
    L:{
        pressed:false
    },
    R:{
        pressed:false
    },
    U:{
        pressed:false
    },
    D:{
        pressed:false
    },
    S:{
        pressed:false
    }
}
var time2=0
var p=0;
// var homelife=0
var cannonlife=0;
var frames=0;
var gameOver=false;
function GameOver(){
    if(playerlife.width<=0){
        gameOver=true;
    }
    else if(homelife.width<=0){
        gameOver=true;
    }
}

function createParticles(object,color){
         for(let i=0;i<5;i++){
                            particles.push(new Particle({
                                position:{
                                    x:object.position.x + object.width/2,
                                    y:object.position.y + object.height/2
                                },
                                velocity:{
                                    x:(Math.random()-0.5)*2,
                                    y:(Math.random()-0.5)*2
                                },
                                radius:Math.random()*10,
                                color:color
                            }))
                        }
}


function animate(){
    
    // console.log(powercannons.widthline)
    if(gameOver && bosslife.width>0){
        var sound3=new Audio("sounds/GameOver.mp3")
        sound3.play();
        alert("GameOver")
        return alert("GameOver")
    }
    else if(gameOver && bosslife.width<=0){
        alert("PLAYER WINS,BASE SUCCESSFULLY SAVED!! BTW UR SCORE: "+score)
        return alert("PLAYER WINS,BASE SUCCESSFULLY SAVED!! BTW UR SCORE: "+score)
    }
    var p=document.querySelector(".score")
    p.textContent=score;

    // console.log(playerlife.width)
    requestAnimationFrame(animate);
    c.fillStyle="black";
    c.fillRect(0,0,canvas.width,canvas.height);
   
    home.update();
    homelife.draw();
    // homelife.draw();
    // c.fillStyle="white"
    // c.fillRect(0,0,500,40);
    playerlife.draw();
    
    bossshooter.forEach(bs =>{
        bs.update();
    })
    bossshooter1.forEach(bs =>{
        bs.update();
    })
    bossshooter2.forEach(bs =>{
        bs.update();
    })
    bossshooter3.forEach(bs =>{
        bs.update();
    })
    bossshooter4.forEach(bs =>{
        bs.update();
    })
    if(powercannons2.widthline>=0){
    powercannons2.update();
    }

    if(powercannons.widthline>=0){
        powercannons.update();
    }
    if(powercannons.widthline<=0){
        setInterval(Timer2,1000)
        function Timer2(){
            time2+=1
        }
    }
    // bosslife.draw();
    // c.fillText("HOME",canvas.width/2, canvas.height*3/4)
    if(score>=25){
    cannons.forEach((cannon,i) =>{
        cannon.update();
        if(cannon.position.y + cannon.height>canvas.height){
            cannons.shift();
            console.log("popped")
        }
        if(cannons.length===0){
            cannons.push(new Cannons())
            cannons.push(new Cannons())
            cannons.push(new Cannons())
            cannons.push(new Cannons())


        }
        shoot.forEach(sh =>{
            if(sh.position.x + cannon.width>=cannon.position.x && sh.position.x - cannon.width<=cannon.position.x &&
                sh.position.y<=cannon.position.y){
                    cannonlife+=1;
                    console.log(cannonlife);
                    if(cannonlife>=250){
                        cannons.forEach(seg =>{
                            seg.color="red"
                        })
                    }
                    if(cannonlife>=500){
                        
                            cannons.splice(i,1)
                            score+=5;
                        
                    
                    createParticles(cannon,"white")
                    }
                    if(cannons.length===0){
                        // console.log("kyon")
                        cannonlife=0;
                        cannons.forEach(seg =>{
                            seg.color="green"
                        })
                        cannons.push(new Cannons())
                        cannons.push(new Cannons())
                        cannons.push(new Cannons())
                        cannons.push(new Cannons())
                    }
                    
                }

        })
    })
}
    IS.forEach((enemyshooter,i) =>{
        if(enemyshooter.position.y + enemyshooter.height >= canvas.height){
            IS.shift();
        }
        else{
        enemyshooter.update();
        // console.log()
        }
        if(enemyshooter.position.y + enemyshooter.height >= player.position.y &&
            enemyshooter.position.x + player.width >= player.position.x&&
            enemyshooter.position.x - player.width <= player.position.x
            )
            {
                IS.splice(i,1);
                // PlayerLife-=1;
                createParticles(player,"white")
                // console.log("life going");
                playerlife.update(5);
                GameOver();
            }
            if(enemyshooter.position.y + enemyshooter.height >= home.position.y &&
                enemyshooter.position.x >= home.position.x&&
                enemyshooter.position.x - home.width <= home.position.x
                )
            {
                IS.splice(i,1)
                homelife.update(5);
                GameOver();
                console.log(homelife.width);
            }
    })
    // var p=0;
    // if(time===10){
    //     alert("MINI CANNONS ARE ACTIVATED")
    // }
    // if(score===50 && p==0){
    //     alert("POWER CANNON IS ACTIVATED !!")
    //     ;
    // }

    if(frames!=0 && frames%100==0 && score>25){
        
        // if(cannons.length==4){
        for(var i =0;i<cannons.length;i++){
        // console.log("yeah")
        IS.push(new InvaderShooters({
            position:{
                x:cannons[i].position.x,
                y:cannons[i].position.y
            },
            velocity:{
                x:0,
                y:10
            }

        }))
    }
// }
        // console.log(IS);
    }
    player.update();

    particles.forEach((particle,i) => {
        if(particle.opacity<=0){
            
                particles.splice(i,1);
            
           
        }
        else{
            particle.update();
        }
    //    console.log(particles)
    })

    
    // invader.update();
    // console.log(shoot);
    // if(time>=5){
    //     grids.forEach(segment =>{
    //         segment.velocity.x=10;
    //     })
    // }
    shoot.forEach((segment,index) =>{
        if(segment.position.y + segment.radius <=0 ){
            // shoot.splice(index,1);
            shoot.shift();
        }
        else{
            segment.update();
        }
        
        
    })
    if(powercannons.widthline>=0 || powercannons2.widthline>=0){
    grids.forEach((segment1,k) =>{
        segment1.update();
         if(segment1.invaders.length===0){
                        grids.splice(k,1)
                        grids.push(new Grid());
                        
                        // console.log(grids)
                    }
        segment1.invaders.forEach((segment,i) =>{
            segment.update({velocity: segment1.velocity});
                if(player.position.x-player.width<=segment.position.x && player.position.x + player.width >=segment.position.x 
                    && player.position.y-player.height <=segment.position.y && player.position.y + player.height >=segment.position.y){
                    var sound4= new Audio("sounds/mixkit-falling-hit-757.wav")
                    sound4.play();
                    playerlife.update(5);
                    segment1.invaders.shift()
                

                    // if(playerlife.width<=0){
                        GameOver();
                    // }
                }

                if(home.position.x-home.width<=segment.position.x && 
                    home.position.x + home.width >=segment.position.x 
                    && home.position.y<=segment.position.y)
                    {
                        // homelife+=1;
                        // console.log("hlhfsja hdhufghufguw");
                        homelife.update(5);
                        console.log(homelife.width);
                        segment1.invaders.splice(i,1);
                    }
            shoot.forEach((sh ,j)=>{
                if(sh.position.y - sh.radius <= segment.position.y + segment.height &&
                    sh.position.x + sh.radius >= segment.position.x &&
                    sh.position.x-sh.radius<= segment.position.x){

                    createParticles(segment,"yellow")
                    score+=1;
                    var sound1=new Audio("sounds/shoot-3-81138.mp3")
                    sound1.play();
                    segment1.invaders.splice(i,1);
                    console.log(segment1.invaders)
                    
                    // if(grids.length===0){
                    //     console.log("yo");
                    //     grids.push(new Grid());
                    // }
                    // else if (segment1.invaders.length===0){
                       
                    // }
                //    console.log(grids)
                    shoot.splice(j,1);
                }
               
            })
        })
    })}

    powershooters.forEach((ps,i) =>{
        console.log(ps.position)
        if(ps.position.x>=canvas.width || ps.position.y>=canvas.height){
            powershooters.splice(i,1);
        }
        else{
        ps.update();
        }
        if(ps.position.x + player.width>=player.position.x && ps.position.x-player.width<=player.position.x&&ps.position.y>+player.position.y){
            createParticles(player,"blue")
            powershooters.splice(i,1);
            playerlife.update(5);
        }
    })
    powershooters2.forEach((ps2,i)=>{
        if(ps2.position.x>=canvas.width || ps2.position.y>=canvas.height){
            powershooters2.splice(i,1);
        }
        else{
            ps2.update();
        }
        if(ps2.position.x + player.width>=player.position.x && ps2.position.x-player.width<=player.position.x&&ps2.position.y>+player.position.y){
            createParticles(player,"blue")
            powershooters2.splice(i,1);
            playerlife.update(5);
        }
    })

    if(score>=200){
    shoot.forEach((sh,i) =>{
        if(sh.position.y>=powercannons.position.y + powercannons.height &&
            sh.position.x<=powercannons.position.x + powercannons.width&&
            sh.position.x>=powercannons.position.x-powercannons.width){
                // powercannonlife-=2;
                powercannons.widthline-=0.03;
                // var sound2=new Audio("sounds/shoot-1-81135.mp3")
                // sound2.play();
            }
        if(sh.position.y>=powercannons2.position.y + powercannons2.height &&
            sh.position.x<=powercannons2.position.x + powercannons2.width&&
            sh.position.x>=powercannons2.position.x-powercannons2.width){
                powercannons2.widthline-=0.03;
                // var sound2=new Audio("sounds/shoot-1-81135.mp3")
                // sound2.play();
            }
    })
}
    // console.log(powershooters)
    console.log()
    if(score>200){
     if(powercannons.widthline>=0 || powercannons2.widthline>=0){   
    if(frames%25===0){
        if(powercannons.widthline>=0){
        powershooters.push(new PowerShooters({
            position:{
                x:powercannons.position.x + powercannons.width/2,
                y:powercannons.position.y + powercannons.height
            }
        }))
    }
        if(powercannons2.widthline>=0){
        powershooters2.push(new PowerShooters2({
            position:{
                x:powercannons2.position.x + powercannons2.width/2,
                y:powercannons2.position.y + powercannons2.height
            }
        }))
    }
    }
   
}

}
if(powercannons2.widthline===0 || powercannons.widthline===0){
    score+=50;
    }
if(bosslife.width<=0){
        console.log("bosssuuuu")
        gameOver = true;
    }

if(powercannons.widthline<=0 && powercannons2.widthline<=0){
    theboss.update();
    bosslife.draw();
    
}
if(powercannons.widthline<=0 && powercannons2.widthline<=0){
    if(frames%50===0 && bosslife.width>=500){
    bossshooter.push(new BossShooter({
        position:{
            x:theboss.position.x,
            y:theboss.position.y+theboss.height
        }
    }))
    bossshooter.push(new BossShooter({
        position:{
            x:theboss.position.x + theboss.width/4,
            y:theboss.position.y+theboss.height
        }
    }))
    
    bossshooter1.push(new BossShooter1({
        position:{
            x:theboss.position.x+theboss.width/4,
            y:theboss.position.y+theboss.height
        }
    }))
    bossshooter2.push(new BossShooter2({
        position:{
            x:theboss.position.x+theboss.width/2,
            y:theboss.position.y+theboss.height
        }
    }))
    bossshooter3.push(new BossShooter3({
        position:{
            x:theboss.position.x+theboss.width*3/4,
            y:theboss.position.y+theboss.height
        }
    }))
    bossshooter3.push(new BossShooter3({
        position:{
            x:theboss.position.x+theboss.width*3/4,
            y:theboss.position.y+theboss.height
        }
    }))
    bossshooter3.push(new BossShooter3({
        position:{
            x:theboss.position.x+theboss.width,
            y:theboss.position.y+theboss.height
        }
    }))
    bossshooter4.push(new BossShooter4({
        position:{
            x:theboss.position.x + theboss.width*3/4,
            y:theboss.position.y+theboss.height
        }
    }))
}
else{
    if(frames%25===0 && bosslife.width<=500){
        bossshooter.push(new BossShooter({
            position:{
                x:theboss.position.x,
                y:theboss.position.y+theboss.height
            }
        }))
        bossshooter.push(new BossShooter({
            position:{
                x:theboss.position.x + theboss.width/4,
                y:theboss.position.y+theboss.height
            }
        }))
        
        bossshooter1.push(new BossShooter1({
            position:{
                x:theboss.position.x+theboss.width/4,
                y:theboss.position.y+theboss.height
            }
        }))
        bossshooter2.push(new BossShooter2({
            position:{
                x:theboss.position.x+theboss.width/2,
                y:theboss.position.y+theboss.height
            }
        }))
        bossshooter3.push(new BossShooter3({
            position:{
                x:theboss.position.x+theboss.width*3/4,
                y:theboss.position.y+theboss.height
            }
        }))
        bossshooter3.push(new BossShooter3({
            position:{
                x:theboss.position.x+theboss.width*3/4,
                y:theboss.position.y+theboss.height
            }
        }))
        bossshooter3.push(new BossShooter3({
            position:{
                x:theboss.position.x+theboss.width,
                y:theboss.position.y+theboss.height
            }
        }))
        bossshooter4.push(new BossShooter4({
            position:{
                x:theboss.position.x + theboss.width*3/4,
                y:theboss.position.y+theboss.height
            }
        }))
    }
}


}
if(powercannons.widthline<=0 && powercannons2.widthline<=0){
bossshooter.forEach((bs,i)=>{
    console.log("hsdgfhsfhg")
    if(bs.position.x>=canvas.width || bs.position.y>=canvas.height || bs.position.x<=0){
        bossshooter.splice(i,1);
    }
    if(bs.position.x - player.width<=player.position.x &&
         bs.position.x + player.width>=player.position.x&&
         bs.position.y>=player.position.y)
        {   
            // console.log("hvdfhbvhudfbvhehvvheh")
            playerlife.update(15);
            bossshooter.splice(i,1);
        }
    if(bs.position.x>=home.position.x && bs.position.x<=home.position.x+home.width
        &&bs.position.y>=home.position.y){
            homelife.update(15);
            bossshooter.splice(i,1);
             var sound2=new Audio("sounds/shoot-1-81135.mp3")
                sound2.play();
        }
})
bossshooter2.forEach((bs,i)=>{
    if(bs.position.x>=canvas.width || bs.position.y>=canvas.height || bs.position.x<=0){
        bossshooter2.splice(i,1);
    }
    if(bs.position.x - player.width<=player.position.x &&
        bs.position.x + player.width>=player.position.x&&
        bs.position.y>=player.position.y)
        {
            playerlife.update(15);
            bossshooter2.splice(i,1);
        }
        if(bs.position.x>=home.position.x && bs.position.x<=home.position.x+home.width
            &&bs.position.y>=home.position.y){
                homelife.update(15);
                bossshooter2.splice(i,1);
                var sound2=new Audio("sounds/shoot-1-81135.mp3")
                sound2.play();
            }
    
})
bossshooter3.forEach((bs,i)=>{
    if(bs.position.x>=canvas.width || bs.position.y>=canvas.height || bs.position.x<=0){
        bossshooter3.splice(i,1);
    }
    if(bs.position.x - player.width<=player.position.x &&
        bs.position.x + player.width>=player.position.x&&
        bs.position.y>=player.position.y)
        {
            playerlife.update(15);
            bossshooter3.splice(i,1);
        }
        if(bs.position.x>=home.position.x && bs.position.x<=home.position.x+home.width
            &&bs.position.y>=home.position.y){
                homelife.update(15);
                bossshooter3.splice(i,1);
                var sound2=new Audio("sounds/shoot-1-81135.mp3")
                sound2.play();
            }
})
bossshooter1.forEach((bs,i)=>{
    console.log("hsdgfhsfhg")
    if(bs.position.x>=canvas.width || bs.position.y>=canvas.height || bs.position.x<=0){
        bossshooter1.splice(i,1);
    }
    if(bs.position.x - player.width<=player.position.x &&
         bs.position.x + player.width>=player.position.x&&
         bs.position.y>=player.position.y)
        {   
            // console.log("hvdfhbvhudfbvhehvvheh")
            playerlife.update(15);
            bossshooter1.splice(i,1);
        }
        if(bs.position.x>=home.position.x && bs.position.x<=home.position.x+home.width
            &&bs.position.y>=home.position.y){
                homelife.update(15);
                bossshooter1.splice(i,1);
                var sound2=new Audio("sounds/shoot-1-81135.mp3")
                sound2.play();
            }
})
bossshooter4.forEach((bs,i)=>{
    console.log("hsdgfhsfhg")
    if(bs.position.x>=canvas.width || bs.position.y>=canvas.height || bs.position.x<=0){
        bossshooter4.splice(i,1);
    }
    if(bs.position.x - player.width<=player.position.x &&
         bs.position.x + player.width>=player.position.x&&
         bs.position.y>=player.position.y)
        {   
            // console.log("hvdfhbvhudfbvhehvvheh")
            playerlife.update(15);
            bossshooter4.splice(i,1);
        }
        if(bs.position.x>=home.position.x && bs.position.x<=home.position.x+home.width
            &&bs.position.y>=home.position.y){
                homelife.update(15);
                bossshooter4.splice(i,1);
                var sound2=new Audio("sounds/shoot-1-81135.mp3")
                sound2.play();
            }
})
shoot.forEach((sh,i) =>{
    if(sh.position.x>=theboss.position.x && sh.position.x<=theboss.position.x+theboss.width
        && sh.position.y<=theboss.position.y + theboss.height) {
            console.log("hilifegoing")
            shoot.splice(i,1);
            bosslife.update();
        }
})

}
if(theboss.position.x <=player.position.x&& theboss.position.x + theboss.width >= player.position.x
    &&theboss.position.y + theboss.height>=player.position.y){
        playerlife.update(1);
    }
if(theboss.position.x <=home.position.x&& theboss.position.x + theboss.width >= home.position.x
    &&theboss.position.y + theboss.height>=home.position.y){
        homelife.update(1);
        }



    

    if(keys.L.pressed && player.position.x - player.width>0){
        // console.log("h")
        player.velocity.x = -20;
        player.velocity.y =0;
    }
    else if(keys.R.pressed && player.position.x+2*player.width<canvas.width){
        player.velocity.x=20;
        player.velocity.y=0
    }
    else if(keys.U.pressed && player.position.y>0){
        player.velocity.y = -20;
        player.velocity.x = 0;
    }
    else if(keys.D.pressed && player.position.y<canvas.height - player.height){
        player.velocity.y = 20;
        player.velocity.x = 0;
    }
    else if(keys.S.pressed && (player.position.x + player.wdith>0 && player.position.x<canvas.width - player.width &&player.position.y>0 && player.position.y<canvas.height - player.height)){
        shoot.push(
            new Shooters({
                position:{
                    x:player.position.x + player.width/2,
                    y:player.position.y-player.height
                },
                velocity:{
                    x:0,
                    y:-50
                }
            })
        );
    }
    // else if(keys.S.pressed && (keys.L.pressed || keys.R.pressed || keys.U.pressed || keys.D.pressed)){
    //     shoot.push(
    //         new Shooters({
    //             position:{
    //                 x:player.position.x + player.width/2,
    //                 y:player.position.y-player.height
    //             },
    //             velocity:{
    //                 x:0,
    //                 y:-100
    //             }
    //         })
    //     );
    // }
    else{
        player.velocity.x=0;
        player.velocity.y=0;
    }
    // if(cannons.position.y>canvas.height){
    //     cannons=[];
    //     cannons.push(new Cannons());
    //     cannons.push(new Cannons())
    // }
    frames++;
    //console.log(frames);
    if(powercannons.widthline>=0 || powercannons2.widthline>=0){
    if(frames%750===0){
        grids.push(new Grid());
    }
}
    if(powercannons.widthline<=0){
        p=p+1;
    }
    if(time2<5 && time2!=0){
        console.log(p);
        grids.push(new Grid());
        grids.push(new Grid());
        grids.push(new Grid());
        grids.push(new Grid());
    }
}
animate();


addEventListener("keydown",(event) =>{
    switch(event.key){
        case "ArrowLeft":
            keys.L.pressed = true;
            //  console.log("h:");
            break;
        case "ArrowRight":
            keys.R.pressed = true;
            break;
        case "ArrowUp":
            keys.U.pressed = true;
            break;
        case "ArrowDown":
            keys.D.pressed = true;
            break;
        case " ":
            keys.S.pressed = true;
            shoot.push(
                new Shooters({
                    position:{
                        x:player.position.x + player.width/2,
                        y:player.position.y-player.height
                    },
                    velocity:{
                        x:0,
                        y:-50
                    }
                })
            );
           
            
            break;
    }
})

addEventListener("keyup",(event) =>{
    switch(event.key){
        case "ArrowLeft":
            keys.L.pressed = false;
            // console.log("l");
            break;
        case "ArrowRight":
            keys.R.pressed = false;
            break;
        case "ArrowUp":
            keys.U.pressed = false;
            break;
        case "ArrowDown":
            keys.D.pressed = false;
            break;
        case " ":
             keys.S.pressed = false;
            break;
    }
})

setInterval(timer,1000)
var time=0;
function timer(){
    time=time+1;
    // console.log(time)
}