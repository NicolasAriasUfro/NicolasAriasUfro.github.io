//Ejercicio de practica Javascript

//Objeto base para los personajes
class Character {
    constructor(name, health, damage) {
        //Atributos
        this.name = name;
        this.health = health;
        this.maxhealth = health;
        this.damage = damage;
    }
    //Verifica si el personaje esta vivo
    isAlive() {
        return this.health > 0;
    }

    //Ataca a otro personaje seleccionado
    attack(target) {
        console.log(`${this.name} deals ${this.damage} DMG to ${target.name}`);
        target.health -= this.damage;

    }

    //Retorna la información actual del personaje
    status() {
        return `${this.name} - HP ${this.health}/${this.maxhealth}`;
    }
}

//Función para combatir
function fight(firstCharacter, secondCharacter) {
    console.log("Empieza el combate!");
    console.log(hero.status());
    console.log(enemy.status());
    while (true) {


        //Primer personaje ataca si esta vivo
        if (firstCharacter.isAlive()) {
            firstCharacter.attack(secondCharacter);
            console.log(hero.status());
            console.log(enemy.status());
            registroBatalla(hero.status());
            registroBatalla(enemy.status());
            actualizarBarraVida();
        } else {
            console.log(`${firstCharacter.name} died!`);
            registroBatalla(`${firstCharacter.name} died!`);
            break;
        }

        //Segundo personaje ataca si esta vivo
        if (secondCharacter.isAlive()) {
            secondCharacter.attack(firstCharacter);
            console.log(hero.status());
            console.log(enemy.status());
            registroBatalla(hero.status());
            registroBatalla(enemy.status());
        } else {
            console.log(`${secondCharacter.name} died!`);
            registroBatalla(`${secondCharacter.name} died!`);
            break;
        }
        //actualizarBarraVida();
    }
}
function registroBatalla(textoRegistro){
    let registro = document.createElement("p");
    registro.textContent = textoRegistro;
    document.getElementById("registroBatalla").appendChild(registro);

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function actualizarBarraVida(){
    const barraVidaHeroe = document.getElementById("barLifeKnight");
    const barraVidaLimo = document.getElementById("barLifeLemon");
    let heroHealth = Math.max(0, hero.health/hero.maxhealth*100);
    let lemonHealth = Math.max(0, enemy.health/enemy.maxhealth*100);
    barraVidaHeroe.style.width = `${heroHealth}%`;
    barraVidaLimo.style.width = `${lemonHealth}%`;
}
function randomRangeNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}



function batallaPorDefecto(){
    fight(hero, enemy);
}
//Creación de personajes
const lifeHero = randomRangeNumber(1,100);
const lifeEnemy = randomRangeNumber(1,100);
//Daño de personajes
const damageHero = randomRangeNumber(5, 10);

const damageEnemy = randomRangeNumber(5, 10);
const hero = new Character("Knight", lifeHero, damageHero);


const enemy = new Character("Lemon", lifeEnemy, damageEnemy);
alert("Vida del heroe: "+lifeHero+" Daño del heroe: "+damageHero+" Vida del enemigo: "+lifeEnemy+" Daño del enemigo: "+damageEnemy);

function sellarConXoN(event) {
    if (event.key === 'x') {
        //ataca el primer personajes, knight
        let firstCharacter = hero;
        let secondCharacter = enemy;
        if (firstCharacter.isAlive()) {
            firstCharacter.attack(secondCharacter);
            console.log(hero.status());
            console.log(enemy.status());
            registroBatalla(hero.status());
            registroBatalla(enemy.status());
            actualizarBarraVida();
        } else {
            console.log(`${firstCharacter.name} died!`);
            registroBatalla(`${firstCharacter.name} died!`);
        }
    }
    if (event.key === 'n') {
        let firstCharacter = enemy;
        let secondCharacter = hero;
        if (firstCharacter.isAlive()) {
            firstCharacter.attack(secondCharacter);
            console.log(hero.status());
            console.log(enemy.status());
            registroBatalla(hero.status());
            registroBatalla(enemy.status());
            actualizarBarraVida();
        } else {
            console.log(`${firstCharacter.name} died!`);
            registroBatalla(`${firstCharacter.name} died!`);
        }
    }
}


document.addEventListener('keydown', sellarConXoN);
