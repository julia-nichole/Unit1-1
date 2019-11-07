// const//
const story = {
 onLoad:"Walls have ears. Doors have eyes. Trees have voices. Beasts tell lies. Beware the rain. Beware the snow. Beware the man You think you know.",
 
 intro: "You and your partner our on your way to visit your mother, normally you arrive before dinner. But you had a late start and its now dark. So you decide to find a place for the night. You see a house in the distance . ..",
 
 rooms:"An elderly couple answers the door and informs you they don't rent rooms. But they would be happy to let you stay the night ",
 
 driving:"As you continue to drive to look for a place to stay you notice a red pickup truck has been following you for quiet sometime .. ",

 rooms21:" Once inside the couple offers you coffee and cake while taking your things to the spare bedroom.",

 dontStay1:" after getting back in the car and driving for a bit it begins to rain heavily making it difficult to see whats in front of you . ",
 
 sideRoad :"You pull off into the side road but the truck still follows it has sped up and is right behind you. You try to swerve but the back roads are small and you crash into the ditch. As you begin to lose consciousness the last thing you see is a shadowy figure dragging your partner from the crash you can hear their desperate screams for help but its to late and the world goes black .. ",
 
 rainPull:"After about 15 min the rain dies down and you are able to get to the next exit and find a motel to stay in for the night.  ",
 
 rainContin:"", 
  gameOver: " GAME OVER ",

 notEat:"You notice the elderly couple strangely watching your partner as if they are waiting for something...Suddenly your partner starts foaming at the mouth, choking on their own saliva. You rush to their side desperately trying to figure out how to help them in your own panic you don't realise the old couple closing in on you and the old man bashes you in the back of the head with a lamp. "
}

const selected = {
    onLoad:{"btn1":"choose","btn2":"wisely"},
    
    intro:{"btn1": "stop to see if they rent rooms", "btn2":"continue driving",},
    
    rooms:{"btn1":" You decide to take the nice couple up on their offer and they welcome you inside ","btn2":"The couple gives you major creeper vibes. So you politely decline their offer and high tail it back to the car "},
    
    dontStay2:{"btn1":" pull over and wait for the rain to calm down " , "btn2":" continue driving it just rain and you want to get to a hotel soon"},
  
   
    driving:{"btn1":"Paranoia sets in so you decide tp pull off onto the next side road to see if the truck follows. ", "btn2":" You decide to speed up the car but continue in search of the nearest lodging "},
    
    
    eatOrNot:{"btn1":"You decline any refreshments but your partner eagerly takes some. ","btn2":"You and your partner graciously accept you haven't eaten since the morning and are starving."},
     gameOver:{"btn1":"" ,"btn2":""},
}



// cached elements :
const msg = document.getElementById('game');
const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const headerEl = document.querySelector('header');
const sectionEl = document.getElementById('gamemsg');
const start = document.getElementById('start');
const resetEl = document.getElementById('reset');
// event listeners//


document.getElementById("btn1").addEventListener("click",storyOne );
document.getElementById("btn2").addEventListener("click", storyTwo);
document.getElementById("start").addEventListener("click", startStory);
document.getElementById("reset").addEventListener("click", resetGame);

var state;
// functions

init();
function startStory(evt){ 
switch (state){
    case story.onLoad:
        state = story.intro;
      break;
    default:
}
render();
}

function storyOne(){
    switch (state) {
        case story.onLoad:
          state = story.intro;
          break;
        case story.intro:
          state = story.rooms;
          break;
        case story.rooms:
        state = story.rooms21;
          break;
    default:
}}
function storyTwo(){
switch (state){
  case story.onLoad:
    state = story.intro;
    break;
    case story.intro:
    state = story.driving;
    break;
    case story.driving:
    state = story.sideRoad;
    sectionEl.style.fontSize = "30px";
    break;
    case story.sideRoad:
      state = story.gameOver;


    
  default:  
}
}
function resetGame(evt) {
    window.location.reload();
  }


  function render() {
    sectionEl.textContent = state;
    stateSwitch();
  }
  function init(){
      state = story.onLoad;
      render();
  }

  function stateSwitch(){
    switch(state) {
      case story.onLoad:
        button1.textContent = selected.onLoad["btn1"];
        button2.textContent = selected.onLoad["btn2"];
        break;
      case story.intro:
        button1.textContent = selected.intro["btn1"];
        button2.textContent = selected.intro["btn2"];
        button1.style.fontSize = "25px";
        button1.style.fontFamily = "'Cormorant Garamond', serif";
        button2.style.fontSize = "25px";
        button2.style.fontFamily = "'Cormorant Garamond', serif"
        break;
        case story.rooms:
            button1.textContent = selected.rooms["btn1"];
            button2.textContent = selected.rooms["btn2"];
          break;
          case story.driving:
              button1.textContent = selected.driving["btn1"];
              button2.textContent = selected.driving["btn2"];
             break;
             case story.sideRoad:
                button1.textContent = selected.driving["btn1"];
                button2.textContent = selected.driving["btn2"];
               break;
               case story.gameOver:
               button1.textContent = "You"
               button2.textContent ="Failed";

              break;
        default:

    }
  }