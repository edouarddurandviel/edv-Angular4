(function (){

    var trains =  [
        {
            passagers: 10,
            stations: 6,
            node: [0, 0, 1, 1, 0, 0], // crossings set to 1
        }, 
        {
            passagers: 20,
            stations: 5,
            node: [0, 0, 1, 1, 0], // crossings set to 1
        }, 
        { 
            passagers: 30,
            stations: 8,
            node: [0, 0, 1, 0, 1, 0, 0, 0], // crossings set to 1
        }
    ];  
        

     // check if all the conditions are completed including if is it an interconnection ?
    var canTurn = function(train_id){
        var train = train_id;

            var j = -1;
            while(j){
                    if(train.node[j] === 0){ // if the node value is positive set turn function to TRUE and is autorized to turn
                         return false;
                    }else if(train.node[j] === 1 && j >= train.stations){
                        return true;
                    }
                j++;
            }
        
    }


    var canGo = function(){

        switch(trains) {
            case trains[0].passagers > trains[1].passagers || trains[0].passagers > trains[2].passagers :
                return {
                    lets_turn: canTurn(trains[0]), // return true or false
                } 
            
            case trains[1].passagers > trains[0].passagers || trains[1].passagers > trains[2].passagers :
                return {
                    lets_turn: canTurn(trains[1]), // return true or false
                }
            
            case trains[2].passagers > trains[0].passagers || trains[2].passagers > trains[1].passagers :
                return {
                    lets_turn: canTurn(trains[2]), // return true or false
                }
        } 
        
        console.log(trains[0].passagers);
        
    }

    setTimeout(canGo(), 1000);
 

})();





