
let nameOfHero = "Kratos";
let victories = 80;
let defeats = 10;
let placing = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]

let rank = victories - defeats;

function checkHeroLevel(victories,defeats){
    return victories - defeats;
} 

 checkHeroLevel();

    if (rank <= 10){
        console.log("O Herói de nome " + nameOfHero + ", tem o saldo de: " +  rank + " de vitórias e está no nivel: " + placing[0]);
    }else if (rank >= 11 && rank <= 20){
        console.log("O Herói de nome " + nameOfHero + ", tem o saldo de: " +  rank + " de vitórias e está no nivel: " + placing[1]);
    }else if (rank >= 21 && rank <= 50){
        console.log("O Herói de nome " + nameOfHero + ", tem o saldo de: " +  rank + " de vitórias e está no nivel: " + placing[2]);
    }else if (rank >= 51 && rank <= 80){
        console.log("O Herói de nome " + nameOfHero + ", tem o saldo de: " +  rank + " de vitórias e está no nivel: " + placing[2]);
    }else if (rank >= 81 && rank <= 90){
        console.log("O Herói de nome " + nameOfHero + ", tem o saldo de: " +  rank + " de vitórias e está no nivel: " + placing[3]);
    }else if (rank >= 91 && rank <= 100){
        console.log("O Herói de nome " + nameOfHero + ", tem o saldo de: " +  rank + " de vitórias e está no nivel: " + placing[4]);
    }else if (rank > 100){
        console.log("O Herói de nome " + nameOfHero + ", tem o saldo de: " +  rank + " de vitórias e está no nivel: " + placing[5]);
    };
        
        



       