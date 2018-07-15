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
        

    
    var canTurn = function(train_id){
            for(var j = -1; j < train[train_id].node.length; j++){ 
                if(train[train_id].node[j] === 0){ 
                    return false;
                }else if(train[train_id].node[j] === 1){
                    return true;
                }
            }
        }

    var enoughStations = function(nb, stations_done){
        var n = stations_done;
        if(n >= trains[nb].stations){
            return true;
        }else{
            return false;
        }  
    }

    var combine = function(trains, stations_done){
        for(var i = -1; i < trains.length; i++){ 
            if(enoughStations(i, stations_done) === true && canTurn(i) === true){
                return true;
            }else{
                return false;
            }
        }
    }


    var canGo = function(){

        var n = 0;
        while(n){

            switch(trains) {
            
                case trains[0].passagers > trains[1].passagers || trains[0].passagers > trains[2].passagers :
                    return {
                        train_id: 0,
                        stations_done: n,
                        lets_turn: combine(trains[0], this.stations_done), // return true or false
                    } 
                
                case trains[1].passagers > trains[0].passagers || trains[1].passagers > trains[2].passagers :
                    return {
                        train_id: 1,
                        stations_done: n,
                        lets_turn: combine(trains[1], this.stations_done), // return true or false
                    }
                
                case trains[2].passagers > trains[0].passagers || trains[2].passagers > trains[1].passagers :
                    return {
                        train_id: 2,
                        stations_done: n,
                        lets_turn: combine(trains[2], this.stations_done), // return true or false
                    }
            } 
           

            n++;
        }       
            
        }

     


    setTimeout(canGo(), 1000);
 

})();
