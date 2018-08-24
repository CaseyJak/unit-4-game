let fighter = null;
let enemy = null;

$(document).ready(function setGame(){


    let options = [{
        name : ["D.E.N.N.I.S."],
        attack: 3,
        attackNew:0,
        counter: 10,
        health: 90,
    },

    {
        name : "Mac",
        attack: 2,
        attackNew:0,
        counter: 10,
        health: 150,
        attackAdd: function(){
            let attackNew = this.attack + 9;
            return attackNew; 
        }
    },

   {
        name : "Greenman",
        attack: 7,
        attackNew:0,
        counter: 10,
        health: 120,
        attackAdd: function(){
            let attackNew = this.attack + 6;
            return attackNew; 
        }
    },

{
        name : "Sweet Dee",
        attack: 5,
        attackNew:0,
        counter: 10,
        health: 70,
        attackAdd: function(){
            let attackNew = this.attack + 4;
            return attackNew;
        }
    }];
})
