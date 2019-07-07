let petName;
let ageVariable = 5;
let hungerVariable = 3;
let sleepinessVariable = 3;
let boredomVariable = 1;
let hungerReduceVariable = 1;
let sleepinessReduceVariable = 1;
let boredomReduceVariable = 1;

$('.bars').hide();

$('#startButton').on('click', (e) => {
    game.startGame();
}
)
const game = {
startGame () {
    petName = prompt('What do you want to name your pet?', '');
    $('#startButton').hide();
    // petName = new Tamagotchi(petName);
    petName = new Tamagotchi(petName);
    petName.initPet();

},
setTimer () {
    const timer = setInterval(() => {
        console.log(`Game timer: ${petName.time}`);
        petName.time +=1;
        $('#gameTimer').text(`Time: ${petName.time}`)
        if ((petName.time % ageVariable) === 0){
            petName.age +=1;
            $('#ageTracker').text(`Age: ${petName.age}`)
        }
        if ((petName.time % hungerVariable) === 0){
            petName.hunger +=1;
            $('#hungerTracker').text(`Hunger: ${petName.hunger}`)
        }
        if ((petName.time % sleepinessVariable) === 0){
            petName.sleepiness +=1;
            $('#sleepinessTracker').text(`Sleepiness: ${petName.sleepiness}`)
        } 
        if ((petName.time % boredomVariable) === 0){
            petName.boredom +=1;
            $('#boredomTracker').text(`Boredom: ${petName.boredom}`)
        }
        if (petName.hunger >= 10) {
            clearTimeout(timer);
            this.gameOver('hungry');
        }
        if (petName.sleepiness >= 10) {
            clearTimeout(timer);
            this.gameOver('sleepy');
        }
        if (petName.boredom >= 10) {
            clearTimeout(timer);
            this.gameOver('bored');
        }
    }, 1000)
},
hungerReduce () {
    if (petName.hunger > 0) {
        petName.hunger -= hungerReduceVariable;
    $('#hungerTracker').text(`Hunger: ${petName.hunger}`)
    }
},

sleepinessReduce () {
    if (petName.sleepiness > 0) {
    petName.sleepiness -= sleepinessReduceVariable;
    $('#sleepinessTracker').text(`Sleepiness: ${petName.sleepiness}`)
    $('#pet').css('background-color', 'black');
    $('#pet').css('color', 'white').delay(600);
    }
},

boredomReduce () {
    if (petName.boredom > 0) {
    petName.boredom -= boredomReduceVariable;
    $('#boredomTracker').text(`Boredom: ${petName.boredom}`)
    }
},

gameOver (reason) {
    $('#pet').css('color', 'red').append(`<h1>Oh no! <u>${petName.name}</u> became too ${reason} and left for another dimension!</h1>`);
    $('#ghost').attr('src', 'images/angry-ghost.svg');
    // clearTimeout(game);
    // clearInterval(game);

}

}

$('.buttons').on('mousedown', e => {
    $(e.target).css('background-color', 'white');
    $(e.target).css('color', 'black');
})

$('.buttons').on('mouseup', e => {
    $(e.target).css('background-color', 'black');
    $(e.target).css('color', 'white');
})

$("#feed").on('click', () => {
    console.log("feed clicked");
    game.hungerReduce();
})

$("#lights").on('click', () => {
    console.log("lights clicked");
    game.sleepinessReduce();
})

$("#play").on('click', () => {
    console.log("play clicked");
    game.boredomReduce();
})