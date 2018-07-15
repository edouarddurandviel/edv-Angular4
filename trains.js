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
        

    
    var canTurn = function(train_id){
            for(var j = -1; j < train[train_id].node.length; j++){ 
                if(train[train_id].node[j] === 0){ 
                    return false;
                }else if(train[train_id].node[j] === 1){
                    return true;
                }
            }
        }

    var enoughStations = function(nb){
        var n = 0;
        while(n){
            if(n >= trains[nb].stations){
                return true;
            }else{
                return false;
            }
            n++;
        }
    }

    var combine = function(trains){
        for(var i = -1; i < trains.length; i++){ 
            if(enoughStations(i) === true && canTurn(i) === true){
                return true;
            }else{
                return false;
            }
        }
    }


    var canGo = function(){

        switch(trains) {
            
            case trains[0].passagers > trains[1].passagers || trains[0].passagers > trains[2].passagers :
                return {
                    lets_turn: combine(trains[0]), // return true or false
                } 
            
            case trains[1].passagers > trains[0].passagers || trains[1].passagers > trains[2].passagers :
                return {
                    lets_turn: combine(trains[1]), // return true or false
                }
            
            case trains[2].passagers > trains[0].passagers || trains[2].passagers > trains[1].passagers :
                return {
                    lets_turn: combine(trains[2]), // return true or false
                }
        } 
        
        
    }

    setTimeout(canGo(), 1000);
 



