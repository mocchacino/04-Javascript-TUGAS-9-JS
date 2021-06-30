function panggilObject(){
    var kazuha = {
        name : "Kazuha Kadehara",
        vision : "Anemo",
        gender : "Male",
        weapon : "Sword",
        rarity : 5,
        availabe : false,
    }
    console.log(kazuha)
    kazuha.availabe = true
    
    for(var x in kazuha){
        console.log(kazuha[x])
    }
}

panggilObject();