(function (){

    var trains =  [
       {
            passagers: 30,
            id: 3,
            stations: 6,
            node: [0, 0, 1, 1, 0, 0], // crossings set to 1
        }, 
       {
            passagers: 20,
            id: 2,
            stations: 5,
            node: [0, 0, 1, 1, 0], // crossings set to 1
        }, 
       { 
            passagers: 10,
            id: 1,
            stations: 8,
            node: [0, 0, 1, 0, 1, 0, 0, 0], // crossings set to 1
        }
    ];


    var sortedTrains = trains.sort(function (a, b) {
        return a.passagers - b.passagers;
    });

    var newNode = [];
    var rever = function(sorted, n){ 
        var nodeReverse = sorted.node.reverse().slice(1);
        if(enoughStations(sorted, n) == true){
            newNode = sorted.node.concat(nodeReverse);
            return true;
        }else{
            return false;
        }
    }

    var canTurn = function(the_train, n){
        var next = "next";
      
        for(var j = n-1; j < newNode.length; j++){ 
            if(newNode[j] === 0){ 
                return false;
            }else if(newNode[j] === 1){
                return true;
            }else if(newNode[j] === undefined){
                return next;
            }
        }
    }

   
    var enoughStations = function(the_train, stations_done){
        var n = stations_done;
        if(n >= the_train.stations){
            return true;
        }else{
            return false;
        }  
    }


    var combine = function(the_train, stations_done){
       
        if(enoughStations(the_train, stations_done) === true && canTurn(the_train, stations_done) === true){
            return true;
        }else{
            return false;
        }
        
    }

    var maListe = document.querySelector("#list");
    var n = 1;
    var stop = 16;
    var data = ""; 
    while(n <= stop){
   
    sortedTrains.forEach( el => { 
      
            data += "<tr>" + "<td>Move: " + n + "</td><td>Train: " + el.id + "</td><td>Enough_Stations ? => " + enoughStations(el, n) + "</td><td>Reverse_rails ? => " + rever(el, n) + " " + newNode;
            data += "</td><td>interconexion ? => " + canTurn(el, n) + "</td><td>Can_Turn ? => " + combine(el, n) + "</td></tr><tr></tr>"; 

  
        return data;
    });
        n++;
    }

    maListe.innerHTML = data;


})();
