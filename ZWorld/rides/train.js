const TRAIN = "Train";
class TeaserTrain extends TeaserRide {
  rideType = TRAIN;

  constructor(rand) {
    const themes = [];
    let number_themes = rand.getRandomNumberBetween(1, 3);
    for (let i = 0; i < number_themes; i++) {
      themes.push(rand.pickFrom(Object.values(all_themes)));
    }
    //no procedural obsessions for now
    const obsession = rand.pickFrom(Object.values(all_obsessions)); //think of it like brand tie ins

    //you can put "the" in front of these
    const excitingWords = ["Great Rat Train", "Jose", 'Jaimie', "Rat", "Ride", "Subway", "Car", "Express", "Locomotive", "Steam", "Monorail", "Train", "Demon", "Titan", "Twister", "One", "Scream", "Revenge", "Horridor", "Labyrinth", "Choo-Choo", "Track", "Fury", "Blitz", "Escape", "Ride", "Blaster", "Experience", "Train", "Scream", "Mountain"]
    const sizeWords = ["Never Ending", "Endless", "Eternal", "Big", "Huge", "Big", "Massive", "Little", "Giant", "Gigantic"];


    const chosenAdj = rand.pickFrom(themes).pickPossibilityFor(ADJ, rand)
    const chosenPerson = rand.pickFrom(themes).pickPossibilityFor(PERSON, rand)
    const chosenObject = rand.pickFrom(themes).pickPossibilityFor(OBJECT, rand)
    const chosenLocation = rand.pickFrom(themes).pickPossibilityFor(LOCATION, rand)

    const noun = rand.pickFrom([chosenPerson, chosenLocation, chosenObject]);

    const nameTemplates = [
      `${noun}`,
      `The ${noun}`,
      `The ${rand.pickFrom(sizeWords)} ${noun}`,
      `${rand.pickFrom(excitingWords)} ${noun}`,
      `${noun}: The ${rand.pickFrom(excitingWords)} `,
      `${noun} ${rand.pickFrom(excitingWords)}`,
      `${obsession.name}: The ${rand.pickFrom(excitingWords)}`,
      `${obsession.name}: The ${chosenAdj} ${rand.pickFrom(excitingWords)}`,

      `${chosenAdj} ${rand.pickFrom(excitingWords)}`,
      `${chosenAdj} ${rand.pickFrom(excitingWords)}`,
      `The ${chosenAdj} ${rand.pickFrom(excitingWords)}`,
    ];
    const foodThemes = [...themes, all_themes[rand.pickFrom(food_keys)]]
    const restaurantName = getRestaurantName(rand, foodThemes.map((t) => t.key), true)
    const restaurantUrl = `http://eyedolgames.com/Zampanini/?name=${encodeURI(restaurantName).replace(/'/g, "%27")}&themes=${encodeURI(foodThemes.map((t) => t.key))}&feeUnder=${rand.getRandomNumberBetween(1, 113)}`;
    const nearbyAttractions = `${rand.getRandomNumberBetween(2, 13)} ${rand.pickFrom(["Miles", "Blocks", "Feet", "Meters", "Kilometers", "Jumps", "Turns"])} from: <a target='_blank' href='${restaurantUrl}'>${restaurantName}</a>`;

    const chosenName = titleCase(rand.pickFrom(nameTemplates));


    const teaserTemplates = [`Before Eyedol Games' Acquisition, the top manufacturing company Idlev was making rides at break neck speed. It was no surprise they'd be a leader in innovation for new ways of manufacturing death defying experiences.<br><br>${chosenName} was their first attempt. `,
      "Trains Trains Trains Trains!",
      "Choo-Choo-Choose this ride!",
      "Chuga like never before.",
    `Race like a ${noun}, we provide the track.`,
    `Scream for ${rand.pickFrom([, "chills and thrills", chosenName, "ice cream", "it", "this living legend", "all who are born die", "there is no justice in life"])}.`,
    `Take a ${rand.pickFrom(["Terrifying Trip", "Creepy Caboose", "Riotous Ride"])} into ${rand.pickFrom(["Extreme Exhilaration", "Freaky Fun", "Panicky Pleasure"])}! (Additional Fee Required)`,
    `Looking for some new ${rand.pickFrom(["excitement", "thrills", "chills", "experiences"])}? This track let's you get an immersive experience like never before. Let your body betray you as your flesh turns to cold metal, your eyes replaced by headlights, your mouth transfixed in horror and engraved in cheap glossy plastic. Let their joyful screams become your prison.`,
    `Are you ${rand.pickFrom(["kind", "brave", "bad", "scared", "epic"])} enough to ${rand.pickFrom(["placate", "murder", "battle", "kill", "fight", "survive"])} ${chosenName}?`,
    `${rand.pickFrom(["Sleeker", "Faster", "Smarter", "Higher", "More Terrifying"])} and ${rand.pickFrom(["Smoother", "Wetter", "Tastier", "More Rigid"])} than ever before! Like a Shark!`,
      "Join us in celebrating our newly opened House of Notes Experience with a brand new train!  Award winning Abhorrineer Devona Avamund  takes us on a dark descent into obsession and hot tunes!",
    `Children aged four to one hundred and four will be enchanted as this state of the art train showcases ${rand.pickFrom(["space", "sanity", "death", "dad"])} defying turns!`,
    `If you have a fear of ${rand.pickFrom(["relaxing", "trains", "coal", "tracks", "spirals", "trains", "engines", "steam", "spiders", "teacups", noun + "s"])}, consider yourself warned.`,
    `${chosenName} is our first attempt at a new process we call 'harvesting'. Essentially, when old trains are set to retire, whatever is still operational is salvaged and refitted in order to save massively on costs of manufacturing. Our designers take these stray pieces and fit them into new trains.`];


    const desc = rand.pickFrom(teaserTemplates);
    super(chosenName, rand.pickFrom(trainImages), themes, obsession, nearbyAttractions, desc)
  }
}

class DetailsTrain extends DetailsRide {
  rideType = TRAIN;


  generateDescription = (ele) => {
    const fearLevel = rand.getRandomNumberBetween(1, 3)
    const confusionLevel = rand.getRandomNumberBetween(1, 3)

    this.generateFlavor(ele, fearLevel, confusionLevel)



    const intro = createElementWithClassAndParent("div", ele, "section");

    const topSpeed = `${rand.getRandomNumberBetween(10, 100)} ${rand.pickFrom(["inches", "meters", "miles", "yards", "kilometers", "feet"])} per ${rand.pickFrom(["minute", "second", "hour", "minute", "second", "hour", "hour", "hour", "minute", "second", "hour", "week"])}`;

    const trackLength = `${rand.getRandomNumberBetween(1, 100)} ${rand.pickFrom(["inches", "meters", "miles", "yards", "kilometers", "feet"])}`;


    const introParts = [`With a maximum speed of ${topSpeed}, ${this.name} is THE train ride.`]

  

    if (topSpeed.includes("week") || topSpeed.includes("day")) {
      introParts.push("Perfect for children!");
    } else {
      introParts.push(`${rand.pickFrom(["Thrill", "Marvel", "Wonder", "Tremble"])} at the speed!`);
    }

    intro.innerText = introParts.join(" ");

    const intro2 = createElementWithClassAndParent("div", ele, "section");
    const introParts2 = [`Guests experience the wonder of ${trackLength} of track!`]


    if (trackLength.includes("miles") || trackLength.includes("kilometers")) {
      introParts2.push(`You'll have plenty of time to ${rand.pickFrom(["marvel at", "gaze at", "memorize"])} the countryside!`);
    } else {
      introParts2.push("It'll be over before you know it!");
    }

    intro2.innerText = introParts2.join(" ");



    this.generateWarnings(ele, fearLevel, confusionLevel)

    const label = createElementWithClassAndParent("div", ele, "info-box-label");
    label.innerText = "By the Numbers: ";

    const ul = createElementWithClassAndParent("ul", ele);
    ul.style.marginBottom = "50px";

    const facts = {
      "Top Speed": topSpeed,
      "Track Length": trackLength,
      "Fear Level": fearLevel,
      "Confusion Level": confusionLevel
    }

    for (let key of Object.keys(facts)) {
      const doop = createElementWithClassAndParent("li", ul);
      doop.innerHTML = `${key}: ${facts[key]}`;
    }



  }


}