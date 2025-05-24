class Character {
    constructor(name, surname, sex, age, genetic, cognition=0, intelligence=0, strength=0, vigor=0) {
        this.character_name = name
        this.character_surname = surname
        this.character_sex = sex
        this.character_age = age
        this.character_genetic = genetic
    }
}

//-----------------------------------------------------------------------------

class Genetic {
    constructor(name, genetic_advantage, genetic_disadvantage, advantage_multiplier, disadvantage_multiplier) {
        this.genetic_name = name
        this.genetic_advantage = genetic_advantage
        this.genetic_disadvantage = genetic_disadvantage
        this.advantage_multiplier = advantage_multiplier
        this.disadvantage_multiplier = disadvantage_multiplier
    }
}

//-----------------------------------------------------------------------------

document.getElementById("create-button").addEventListener("click", function() {
    let name = (document.getElementById("name-input")).value
    let surname = (document.getElementById("surname-input")).value
    let sex = (document.getElementById("sex-input")).value
    let age = (document.getElementById("age-input")).value
    let genetic = (document.getElementById("genetics-input")).value


    const character = new Character(name, surname, sex, age, genetic)

    const character_JSON = JSON.stringify(character, null, 4)

    console.log(character_JSON)
})

//-----------------------------------------------------------------------------

document.getElementById("age-display").addEventListener("click", function() {
    document.getElementById("age-input").classList.toggle("active")
})

document.getElementById("age-input").addEventListener("mouseup", function() {
    this.classList.toggle("active")
})

document.getElementById("age-input").addEventListener("input", function () {
    document.getElementById("age-display").innerHTML = this.value
})