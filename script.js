const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const hearts = document.getElementById("hearts");

/* Floating Hearts */

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random()*window.innerWidth+"px";

    heart.style.fontSize = (15+Math.random()*30)+"px";

    heart.style.animationDuration = (3+Math.random()*3)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);

}

setInterval(createHeart,250);

/* No Button */

noBtn.addEventListener("mouseover",()=>{

    const x=Math.random()*(window.innerWidth-120);

    const y=Math.random()*(window.innerHeight-60);

    noBtn.style.left=x+"px";

    noBtn.style.top=y+"px";

});

/* Yes Button */

yesBtn.addEventListener("click",()=>{

    for(let i=0;i<80;i++){

        createHeart();

    }

    document.body.innerHTML=`

    <div id="hearts"></div>

    <div style="
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    height:100vh;
    background:#ffe4ec;
    ">

        <h1 style="color:#ff2d55;font-size:50px;">
            YAY!! ❤️
        </h1>

        <h2>I love you bebe! 💖</h2>

        <img src="https://media.tenor.com/ZlndAzfwx80AAAAj/kiss-bubu-dudu.gif"
        style="width:250px;border-radius:20px;">

    </div>

    `;

});