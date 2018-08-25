





$(document).ready(function setGame(){

    let fighter = null;
    let enemy = null;
    let trophy = 0;
    $(".dennis").prependTo(".charSelect");
    $(".mac").prependTo(".charSelect");
    $(".charlie").prependTo(".charSelect");
    $(".dee").prependTo(".charSelect");
    $(".playerStats").text("Health: "+0+"    Attack: "+0);
    $(".enemyStats").text("Health: "+0);
    let dennis = {
        name : ["D.E.N.N.I.S."],
        attack: 3,
        attackNew: 9,
        counter: 10,
        health: 90,
    };

    let mac = {
        name : "Mac",
        attack: 2,
        attackNew: 5,
        counter: 10,
        health: 150,
    };

    let charlie = {
        name : "Greenman",
        attack: 7,
        attackNew:6,
        counter: 10,
        health: 120,
    };

    let dee = {
        name : "Sweet Dee",
        attack: 5,
        attackNew:4,
        counter: 10,
        health: 70,
    };

// character select

    $(".dennis").click(function () {
        if (fighter === null && enemy === null) {
            fighter = dennis;
            $(".dennis").prependTo(".playerChar");
            $(".playerStats").text("Health: "+fighter.health+"    Attack: "+fighter.attack);
            return fighter;
        }
        if (fighter !== null && enemy === null) { 
            enemy = dennis;
            $(".dennis").prependTo(".enemyChar");
            $(".enemyStats").text("Health: "+enemy.health);
            return enemy;
        }
        else {
            event = null;
        }
    });  

    $(".mac").click(function () {
        if (fighter === null && enemy === null) {
            fighter = mac;
            $(".mac").prependTo(".playerChar");
            $(".playerStats").text("Health: "+fighter.health+"    Attack: "+fighter.attack);
            return fighter;
        }
        if (fighter !== null && enemy === null) { 
            enemy = mac;
            $(".mac").prependTo(".enemyChar");
            $(".enemyStats").text("Health: "+enemy.health);
            return enemy;
        }
        else {
            event = null;
        }

    });  

    $(".charlie").click(function () {
        if (fighter === null && enemy === null) {
            fighter = charlie;
            $(".charlie").prependTo(".playerChar");
            $(".playerStats").text("Health: "+fighter.health+"    Attack: "+fighter.attack);
            return fighter;
        }
        if (fighter !== null && enemy === null) { 
            enemy = charlie;
            $(".charlie").prependTo(".enemyChar");
            $(".enemyStats").text("Health: "+enemy.health);
            return enemy;
        }
        else {
            event = null;
        }

    });  

    $(".dee").click(function () {
        if (fighter === null && enemy === null) {
            fighter = dee;
            $(".dee").prependTo(".playerChar");
            $(".playerStats").text("Health: "+fighter.health+"    Attack: "+fighter.attack);
            return fighter;
        }
        if (fighter !== null && enemy === null) { 
            enemy = dee;
            $(".dee").prependTo(".enemyChar");
            $(".enemyStats").text("Health: "+enemy.health);
            return enemy;
        }
        else {
            event = null;
        }
    });  





// Attack play

    $(".atkBtn").click(function (){
        if (fighter === null) {
            alert ('Please pick Character')
        } 
        if (fighter !== null && enemy === null) {
            alert("Please pick enemy character")
        }
        if (enemy.health <= 0 && fighter.health > 0) {
            enemy = null;
            trophy = trophy+1;
            alert("Please pick next enemy!");
            $(".enemyChar").hide();
            return trophy;
        }
        if (enemy.health > 0 && fighter.health <= 0) {
            alert("You Lose!");
            return setGame();
        }
        else {
            fighter.health = fighter.health - enemy.counter;
            enemy.health = enemy.health-fighter.attack;
            fighter.attack = fighter.attack + fighter.attackNew;
            $(".playerStats").text("Health: "+fighter.health+"    Attack: "+fighter.attack);
            $(".enemyStats").text("Health: "+enemy.health);
            return winGame();
        }
        console.log(enemy);
        console.log(fighter);
    }) 
    
    function winGame() {
        if (trophy === 2) {
            alert("You win!");
            return setGame();
        }
        else {
            trophy=trophy;
        }
    };
  

    $(".rstBtn").click( function gameRst() {

        return setGame();

    });

});

