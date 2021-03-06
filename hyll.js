let matches_won=0;
let matches_lost=0;
let max_won=0;
let countEl=document.getElementById("count-el");
let maxEl=document.getElementById("max-el");
let resEl=document.getElementById("res-el");
let count2El=document.getElementById("count2-el");
let highScoreFromLocalStorage = localStorage.getItem("highScore")

if (highScoreFromLocalStorage) {
    
    max_won = highScoreFromLocalStorage
    maxEl.textContent="High score: " + max_won
}


function buttonAnimation1() {
 
    document.querySelector(".user-choice-display").classList.add("pressed1");
  
    setTimeout(function() {
        document.querySelector(".user-choice-display").classList.remove("pressed1");
    }, 1200);
    
  
  }

  function buttonAnimation2() {
 
    document.querySelector(".computer-choice-display").classList.add("pressed2");
  
    setTimeout(function() {
        document.querySelector(".computer-choice-display").classList.remove("pressed2");
    }, 1450);
    
  
  }

  function colorAnimation_draw() {
    resEl.textContent="🏳️It's a Draw!";
    document.querySelector(".container_main_bottom").classList.add("draw_background");
  
    setTimeout(function() {
        document.querySelector(".container_main_bottom").classList.remove("draw_background");
        document.querySelector(".user-choice-display").setAttribute("src", "images/users-move.png");
        document.querySelector(".computer-choice-display").setAttribute("src", "images/computers-move.png");
    }, 1450);
  }

function restart() {
    matches_won=0;
    matches_lost=0;
    max_won=0;
    resEl.innerHTML=`<span style="color:rgb(255, 196, 0)">S</span><span style="color:rgb(255, 0, 170)">t</span><span style="color:rgb(0, 185, 80)">a</span><span style="color:rgb(255, 145, 0)">r</span><span style="color:rgb(195, 11, 97)">t </span><span style="color:rgb(255, 0, 242)">G</span><span style="color:rgb(0, 255, 47)">a</span><span style="color:rgb(0, 255, 255)">m</span><span style="color:rgb(218, 229, 15)">e</span><span style="color:rgb(255, 0, 0)">!</span>`;
    count2El.textContent="Computer's Score: "+matches_lost
    countEl.textContent="Your Score: "+matches_won
    localStorage.setItem("highScore", max_won);
    highScoreFromLocalStorage = localStorage.getItem("highScore");
    maxEl.textContent="High score: " + highScoreFromLocalStorage;
}


  function colorAnimation_lose() {
    
    resEl.textContent="🚩Oops!You Lost";
    
    
    if (matches_won>max_won) {
        max_won=matches_won
        
    }
    matches_lost = matches_lost + 1
    count2El.textContent="Computer's Score: "+matches_lost
    maxEl.textContent="High score: " + max_won
    document.querySelector(".container_main_bottom").classList.add("lose_background");
    localStorage.setItem("highScore", max_won);
    setTimeout(function() {
        
        document.querySelector(".container_main_bottom").classList.remove("lose_background");
        document.querySelector(".user-choice-display").setAttribute("src", "images/users-move.png");
        document.querySelector(".computer-choice-display").setAttribute("src", "images/computers-move.png");
    }, 1450);
}

function colorAnimation_win() {
    resEl.textContent="🟢You won!";
    matches_won = matches_won + 1
    countEl.textContent="Your Score: "+matches_won
    document.querySelector(".container_main_bottom").classList.add("win_background");
    
    setTimeout(function() {
        document.querySelector(".container_main_bottom").classList.remove("win_background");
        document.querySelector(".user-choice-display").setAttribute("src", "images/users-move.png");
        document.querySelector(".computer-choice-display").setAttribute("src", "images/computers-move.png");
    }, 1450);
}

function the_computer(b) {
    var random_number=Math.floor( Math.random() * 3 ) + 1;
    if (b===1) {
        if (random_number===2) {
            
            document.querySelector(".user-choice-display").setAttribute("src", "results/mice_scared_left.png");
            document.querySelector(".computer-choice-display").setAttribute("src", "results/cat_happy.png");
            colorAnimation_lose();
            buttonAnimation1();
            buttonAnimation2();
            
            
        }

        if (random_number===3) {
            document.querySelector(".user-choice-display").setAttribute("src", "results/happy_mice_left.png");
            document.querySelector(".computer-choice-display").setAttribute("src", "results/new_right.png");
            colorAnimation_win();
            buttonAnimation1();
            buttonAnimation2();
        }

        if (random_number===1) {
            document.querySelector(".user-choice-display").setAttribute("src", "results/happy_mice_left.png");
            document.querySelector(".computer-choice-display").setAttribute("src", "results/happy_mice_right.png");
            colorAnimation_draw();
            buttonAnimation1();
            buttonAnimation2();
        }
    }
    
    if (b===2) {
        if (random_number===2) {
            document.querySelector(".user-choice-display").setAttribute("src", "results/cat_happy_left.png");
            document.querySelector(".computer-choice-display").setAttribute("src", "results/cat_happy.png");
            colorAnimation_draw();
            buttonAnimation1();
            buttonAnimation2();
        }

        if (random_number===3) {
            document.querySelector(".user-choice-display").setAttribute("src", "results/cat_left.png");
            document.querySelector(".computer-choice-display").setAttribute("src", "results/elephant_right.png");
            colorAnimation_lose();
            buttonAnimation1();
            buttonAnimation2();
        }

        if (random_number===1) {
            document.querySelector(".user-choice-display").setAttribute("src", "results/cat_happy_left.png");
            document.querySelector(".computer-choice-display").setAttribute("src", "results/mice_scared_right.png");
            colorAnimation_win();
            buttonAnimation1();
            buttonAnimation2();
        }
    }
    
    if (b===3) {
        if (random_number===2) {
            document.querySelector(".user-choice-display").setAttribute("src", "results/elephant_left.png");
            document.querySelector(".computer-choice-display").setAttribute("src", "results/cat_right.png");
            colorAnimation_win();
            buttonAnimation1();
            buttonAnimation2();
        }

        if (random_number===3) {
            document.querySelector(".user-choice-display").setAttribute("src", "results/elephant_left.png");
            document.querySelector(".computer-choice-display").setAttribute("src", "results/elephant_right.png");
            colorAnimation_draw();
            buttonAnimation1();
            buttonAnimation2();
        }

        if (random_number===1) {
            document.querySelector(".user-choice-display").setAttribute("src", "results/new_left.png");
            document.querySelector(".computer-choice-display").setAttribute("src", "results/happy_mice_right.png");
            colorAnimation_lose();
            buttonAnimation1();
            buttonAnimation2();
        }
    }
    
}

function disable_onclick() {
    document.getElementById('cat_onclick').onclick = null;
    document.getElementById('mouse_onclick').onclick = null;
    document.getElementById('elephant_onclick').onclick = null;
    setTimeout(function() {
        document.getElementById('cat_onclick').setAttribute("onclick","cat_respond()");
        document.getElementById('mouse_onclick').setAttribute("onclick","mouse_respond()");
        document.getElementById('elephant_onclick').setAttribute("onclick","elephant_respond()");
    }, 1250);
}

function cat_respond() {
    user_random_number = 2;
    the_computer(user_random_number);
    disable_onclick();
}

function mouse_respond() {
    user_random_number = 1;
    the_computer(user_random_number);
    disable_onclick();
}

function elephant_respond() {
    user_random_number = 3;
    the_computer(user_random_number);
    disable_onclick();
}

