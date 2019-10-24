// const//
const story = {
 intro: "You and your partner our on your way to visit your mother ,normally you arrive before dinner. But you had a late start and its now dark. So you decide to find a place for the night. You see a house in the distance . ..",
 
 rooms:"An elderly couple answers the door and informs you they don't rent rooms. But they would be happy to let you stay the night ",
 
 driving:"",
}

const selected = {
    intro1:{button1: "stop to see if they rent rooms", button2:"continue driving",}

}



// cached elements :
const msg = document.getElementById('game');
const button1 = document.getElementById('btn1');
const button2= document.getElementById('btn2');


// event listeners//
document.getElementById('btn1').addEventListener('click', story1);
document.getElementById('btn2').addEventListener('click', story2);
