// const//
const story = {
 loadingScreen:"“Walls have ears. Doors have eyes. Trees have voices. Beasts tell lies. Beware the rain. Beware the snow. Beware the man You think you know.",
 intro: "You and your partner our on your way to visit your mother ,normally you arrive before dinner. But you had a late start and its now dark. So you decide to find a place for the night. You see a house in the distance . ..",
 
 rooms:"An elderly couple answers the door and informs you they don't rent rooms. But they would be happy to let you stay the night ",
 
 driving:"As you continue to drive to look for a place to stay you notice a red pickup truck has been following you for quiet sometime .. ",

 rooms21:" Once inside the couple offers you coffee and cake while taking your things to the spare bedroom.",

 rooms22:"Once inside the car you pull back onto the main road as it begins to rain heavily ",
 
 driving21:"You pull off into the side road but the truck still follows it has sped up and is right behind you. You try to swerve but the back roads are small and you crash into the ditch. As you begin to lose consciousness the last thing you see is a shadowy figure dragging your partner from the crash you can hear their desperate screams for help but its to late and the world goes black .. ",
 
  
 driving22:"",
}

const selected = {
    intro1:{button1: "stop to see if they rent rooms", button2:"continue driving",},
    rooms1:{button1:" You decide to take the nice couple up on their offer and they welcome you inside ",button2:"The couple gives you major creeper vibes. So you politely decline their offer and high tail it back to the car ",},
    driving1:{button1:"Paranoia sets in so you decide tp pull off onto the next side road to see if the truck follows. ", button2:" You decide to speed up the car but continue in search of the nearest lodging "},
}



// cached elements :
const msg = document.getElementById('game');
const button1 = document.getElementById('btn1');
const button2= document.getElementById('btn2');


// event listeners//

document.getElementById("btn1").addEventListener("click", handleBOne);
document.getElementById("btn2").addEventListener("click", handleBTwo);