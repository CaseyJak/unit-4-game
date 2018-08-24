





$(document).ready(function setGame(){

    let fighter = null;
    let enemy = null;

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

    $(".dennis").click(function (evt) {
        if (fighter === null && enemy === null) {
            fighter = dennis;
            $(".dennis").prependTo(".playerChar");
            return fighter;
        }
        if (fighter !== null && enemy === null) { 
            enemy = dennis;
            $(".dennis").prependTo(".enemyChar");
            return enemy;
        }
        else {
            event = null;
        }
    });  

    $(".mac").click(function (evt) {
        if (fighter === null && enemy === null) {
            fighter = mac;
            $(".mac").prependTo(".playerChar");
            return fighter;
        }
        if (fighter !== null && enemy === null) { 
            enemy = mac;
            $(".mac").prependTo(".enemyChar");
            return enemy;
        }
        else {
            event = null;
        }

    });  

    $(".charlie").click(function (evt) {
        if (fighter === null && enemy === null) {
            fighter = charlie;
            $(".charlie").prependTo(".playerChar");
            return fighter;
        }
        if (fighter !== null && enemy === null) { 
            enemy = charlie;
            $(".charlie").prependTo(".enemyChar");
            return enemy;
        }
        else {
            event = null;
        }

    });  

    $(".dee").click(function (evt) {
        if (fighter === null && enemy === null) {
            fighter = dee;
            $(".dee").prependTo(".playerChar");
            return fighter;
        }
        if (fighter !== null && enemy === null) { 
            enemy = dee;
            $(".dee").prependTo(".enemyChar");
            return enemy;
        }
        else {
            event = null;
        }
    });  





// Attack play

    $(".atkBtn").click(function (evt){
        if (enemy === null && fighter.health > 0) {
            alert("pleaes pick enemy character")
        }
        else {
            fighter.health = fighter.health - enemy.counter;
            enemy.health = enemy.health-fighter.attack;
            fighter.attack = fighter.attack + fighter.attackNew;
        }
        console.log("Fighter health:" + fighter.health);
console.log("Enemy health:" + enemy.health);
console.log("Fighter attack:" + fighter.attack);
    }) 
    



    $(".rstBtn").click( function gameRst() {
        $(".dennis").prependTo(".charSelect");
        $(".mac").prependTo(".charSelect");
        $(".charlie").prependTo(".charSelect");
        $(".dee").prependTo(".charSelect");
        return setGame();
        console.log(fighter);
        console.log(enemy);

    });
    console.log(fighter);
    console.log(enemy);

});

