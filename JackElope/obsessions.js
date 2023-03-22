/*
everything in here should be generic

more like the themes than anything

themes from zampanios should go into the obsession engine and build themselves from themes. 

(aka procedural obsessions)



*/

//dont want it to work how themes do

const GLITCH = 'GLITCH'; //jr
const HOMESTUCK = 'HOMESTUCK'; //jr
const ZAMPANIO = 'ZAMPANIO'; //jr
const FARRAGNAROK = 'FARRAGNAROK'; //jr
const THEECHIDNAUNIVERSE = 'THEECHIDNAUNIVERSE'; //jr
const THE_MAGNUS_ARCHIVES = 'THE_MAGNUS_ARCHIVES'; //jr
const HENCH = 'HENCH'; //kr
const FIVEDARPS = 'FIVEDARPS'; //IC
const TOGITHINGY = 'TOGITHINGY'; //CD
const SUBTLEWARS = 'SUBTLEWARS'; //MI
const CNC = 'CNC'; //DM
const THEWAYAHEAD = 'THEWAYAHEAD'; //Daedalus
const FORWANTOFKNOWLEDGE = 'FORWANTOFKNOWLEDGE'; //Daedalus
const OFANDTHEYSHALL = 'OFANDTHEYSHALL'; //Daedalus



class Obsession {
  name = "";
  blorbos = []
  minorBlorbos = []
  importantEvents = []
  commonPhrases = []
  opinions = []
  fanGoals = []
  locations = []
  objects = []
  jobs = []

  constructor(name, blorbos, minorBlorbos,importantEvents, opinions, commonPhrases, fanGoals, locations,objects,jobs) {
    this.name = name;
    this.blorbos = blorbos;
    this.minorBlorbos = minorBlorbos;

    this.importantEvents = importantEvents
    this.commonPhrases = commonPhrases;
    this.opinions = opinions;
    this.fanGoals = fanGoals;
    this.locations = locations;
    this.objects = objects;
    this.jobs = jobs;

  }

  randomLocation =(rand)=>{
    const arr = this.locations;
    if(arr.length === 1 && arr[0] === ""){
      return rand.pickFrom(["that one place","the labyrinth","the spiral"]);
    }
    return rand.pickFrom(arr);
  }

  randomObject =(rand)=>{
    const arr = this.objects;
    if(arr.length === 1 && arr[0] === ""){
      return rand.pickFrom(["thingamajig","spiral","mask","book","tome","mirror","sextant","coin","blade","milk bottle","cloak"]);
    }
    return rand.pickFrom(arr);
  }

  randomJob =(rand)=>{
    const arr = this.jobs;
    if(arr.length === 1 && arr[0] === ""){
      return rand.pickFrom(["shambling horror with your face","minotaur","horror"]);
    }
    return rand.pickFrom(arr);
  }

  randomBlorbo =(rand)=>{
    const arr = this.blorbos;
    if(arr.length === 1 && arr[0] === ""){
      return rand.pickFrom(["that one guy","shambling horror with your face","whats-their-face"]);
    }
    return rand.pickFrom(arr);
  }

  randomMinorBlorbo =(rand)=>{
    const arr = this.minorBlorbos;
    if(arr.length === 1 && arr[0] === ""){
      return rand.pickFrom(["that one guy","shambling horror with your face","whats-their-face"]);
    }
    return rand.pickFrom(arr);
  }

  randomEvent =(rand)=>{
    const arr = this.importantEvents;
    if(arr.length === 1 && arr[0] === ""){
      return rand.pickFrom(["when you inevitably succumbed to the endless maze","when you finally took a break from digging and drank some water","when you realized the end was never the end"]);
    }
    return rand.pickFrom(arr);
  }

  randomCommonPhrases =(rand)=>{
    const arr = this.commonPhrases;
    if(arr.length === 1 && arr[0] === ""){
      return rand.pickFrom(["the end is never the end","zampanio is a really fun game","the truth is layered","your insides are worth as much as your outsides","the only thing keeping you here is your obsessive need to know more"]);
    }
    return rand.pickFrom(arr);
  }

  randomOpinion =(rand)=>{
    const arr = this.opinions;
    if(arr.length === 1 && arr[0] === ""){
      return rand.pickFrom(["I should draw others to the maze","I should make a fan work of Zampanio","an endless labyrinth of websites that are not what they are is a really great idea","the end is never the end","zampanio is a really fun game","the truth is layered","your insides are worth as much as your outsides","the only thing keeping you here is your obsessive need to know more"]);
    }
    return rand.pickFrom(arr);
  }

  randomGoal =(rand)=>{
    const arr = this.fanGoals;
    if(arr.length === 1 && arr[0] === ""){
      return rand.pickFrom(["never forget what I find at https://discord.gg/tZmtKwnbac","tell all my friends about zampanio","spread the maze as far possible","dig and dig and dig and dig","tell others that zampanio is a really fun game"]);
    }
    return rand.pickFrom(arr);
  }

}


const all_obsessions = {};
//(name, blorbos, importantEvents, controversialMemes, commonPhrases, opinions) {


//  constructor(name, blorbos, importantEvents, opinions, commonPhrases, fanGoals) {

//obessions to do: human centipede (https://www.youtube.com/watch?v=GFokXnCCMf8)
/*
farragnarok
echidna universe
zampanio (mary king)
togigageta 
subtle wars
shadowed lands 
inscryption

*/



all_obsessions[GLITCH] = new Obsession(
  "[INSERT FANDOM HERE]",
  ["CHARACTER1","CHARACTER2","CHARACTER3"],
  ["MINORCHARACTER1","MINORCHARACTER2","MINORCHARACTER3"],
  ["EVENT1","EVENT2","EVENT3"],
  ["HEADCANON1","HEADCANON2","HEADCANON3"],
  ["your insides are worth as much as your outsides","MEME2","MEME3"],
  ["GOAL1","GOAL2","GOAL2"],
  ["LOCATION1","LOCATION2","LOCATION3"],
  ["OBJECT1","OBJECT2","OBJECT3"],
  ["JOB1","JOB2","JOB3"]

);

all_obsessions[ZAMPANIO] = new Obsession(
  "[INSERT FANDOM HERE]",
  ["CHARACTER1","CHARACTER2","CHARACTER3"],
  ["MINORCHARACTER1","MINORCHARACTER2","MINORCHARACTER3"],
  ["EVENT1","EVENT2","EVENT3"],
  ["HEADCANON1","HEADCANON2","HEADCANON3"],
  ["MEME1","MEME2","MEME3"],
  ["GOAL1","GOAL2","GOAL2"],
  ["LOCATION1","LOCATION2","LOCATION3"],
  ["OBJECT1","OBJECT2","OBJECT3"],
  ["JOB1","JOB2","JOB3"]

);

all_obsessions[HOMESTUCK] = new Obsession(
  "Homestuck",
  ["Jack Noir","Calliope","Caliborn","Lord English","Eridan","Gamzee","Vriska","Equius","Terezi","Kanaya","Feferi","Nepeta","Aradia","Tavros","Sollux","Karkat","Roxy","Jane","Dirk","Jake","Jade","Rose","Dave","John"],
  ["The Mayor","Parcel Mistress","Casey","Meenah","Cronus","Kurloz","Horuss","Aranea","Latula","Porrim","Meulin","Kankri","Mituna","Rufioh","Damara",")(IC","Snowman","Lil Cal","Spades Slick","Doc Scratch"],
  ["when we realized Lord English really HAD been here all along","when jade finally entered the session","when rose and dave realizd they were die to the green sun","when john god tiered","when we realized jade had a copy of her own dead body","when vriska killed all those people","when the trolls realized they were in a single session","when act 7 finally came out","when homosuck happened","when dave and karkat spent all that time on the meteor together","when john realized he actually no longer liked con air","when jade got those dog ears","when vriska chucked all those dead bodies into sprites","when gamzee killed all those people","when terezi and gamzee black dated","when aranea explained leprechaun romance to us","when rose became an alcholic","when rose and kanaya finally kissed","when earth was destroyed","when we realized dirk and roxy lived in a flooded, post apocalyptic earth","when jane went trickster and everything was just peachy","when caliborn was obsessed with SAW just like Bro but unlike Dirk","when johns birthday kept happening","when karkat realized he wasn't a good friend-leader","when aradia died 1001 times off screen"],
  ["it genuinely rewrote my brain on how fiction works","Vriska did nothing wrong","act 1 was the best part","knight classes exploit their aspect"],
  ["this is stupid","what pumpkin","be the other guy","dear sweet precious cassie","flip the fuck out","x2 Facepalm Combo","a hell of a mystery","acrobatic fucking pirouette","addiction is a powerful thing","bluh","boggle vacantly at these shenanigans","don't turn your back on the body","he is already here","ironic proximity to some horses","irons in the fire","it's hard being a kid. Its hard and nobody understand.","legendary piece of shit","federal fucking issue"],
  ["learn how to draw in the symbolic style","write a fan-fiction about that time on the meteor","write a fan comic where everyone lives","rewrite the epilogues to be less depressing","write a story about characters from another series playing sburb","code an elaborate simulation of sburb complete with glitches"],
  ["Incipisphere","Paradox Space","Frog Temple","Ectobiology Lab","Dream Bubble","Brooding Caverns","Skaia","Furthest Ring","Alternia","Beforus","The Meteor","Prospit","Derse","The Battlefield","The Land of Wind and Shade","The Land of Little Cubes and Tea","The Land of Caves and Silence","The Land of Maps and Treasure","The Land of Clockwork and Heat","The Land of Pulse and Haze","The Land of Light and Rain","The Green Sun","The Land of Frost and Frogs"],
  ["juju","tumor","grist","special stardust","squiddle","fenestrated plane","codpiece","pumpkin","painting of a horse attacking a football player","matriorb","lil cal","boondollar","perfectly generic cube","kernel sprite","ring of orbs x fold","cake","shitty sword","bunny","frog"],
  ["ectobiologist","godtier","kernal sprite","carapacian","consort","denizen","player","knight","maid","mage","page","rogue","sylph","seer","thief","prince","bard","heir","witch","grimdark","grimbark","trickster"]
  );

all_obsessions[THE_MAGNUS_ARCHIVES] =new Obsession(
  "The Magnus Archives",
  ["John","Martin","Basira","Daisy","Georgie","Melanie","Elias","Tim","Sasha"],
  ["Jurgen Leitner","Gertrude","Richard","Raymond","Eric","Anthony","Jane","Oliver","Monster Pig","Sasha","The Admiral","Jonah Magnus","Peter Lukas","Nikola","The Eye","The Buried","The Spiral","The Stranger","The Dark","The Hunt","The Flesh","The Slaughter","The Web","The Vast","The Lonely","The End","The Desolation","The Corruption","Jude","Michael","Mikaele","Helen","Tim","Danny","Melanie","Adelard","Annabelle","Breekon and Hope","Mary","Gerry","Jared","Agnes","Daisy","Manuela"],
  ["when it was revealed that JOHN was the Archive and not the Archivist","when the Unknowing started up with clown music","when the Eyepocalypse finally hit right when everything seemed hopeful","when we realized the Archivst had been hunting","when we realized that Gerry really did die in america","when we realized EXACTLY what the tapes were for and who they were aligned with","when basira logicked her way out of the unknowing","when we realized that all cops are bastards"],
  ["smirkes 14 were a really great way to think about horror fiction","smirkes 14 were such stupid colonizer bullshit","helen did nothing wrong","michael was better than helen","helen was better than michael","georgie did nothing wrong","basira did nothing wrong","The Admiral deserves all the love"],
  ["the magnus archives is a  podcast","it is not what it is","i open the door","hello, john","Apologies for the deception","statement ends","statement begins"],
  ["start a podcast","try to write a bunch of horror short stories and voice act them","write a time travel fix it fic where the Distorion helps undo season 5","write a wildly out of character chat fic where everyone is happy","write a fic where jon goes back to his kid self and teams up with joshua gillespie to save the world","write an increasingly unhinged fan simulation of the spiral that consumes more and more of my and everyone around me's lives"],
  ["Sannikov Land","Ny-Ålesund","Millbank Prison","Hilltop Road","The Archives","London","The Panopticon","The Distortion's Hallways"],
  ["web table","'The Seven Lamps of Architecture'","'Ex Altiora'","web lighter","'Catalogue of the Trapped Dead'","'The Boneturner's Tale'","'A Guest For Mister Spider'","Leitner Book","tape recorder","eye"],
  ["archival assistant","avatar","Archivist","entity","Avatar of the Eye","Avatar of the Buried","Avatar of the Spiral","Avatar of the Stranger","Avatar of the Dark","Avatar of the Hunt","Avatar of the Slaughter","Avatar of the Web","Avatar of the Vast","Avatar of the Lonely","Avatar of the End","Avatar of the Desolation","Avatar of the Corruption"]
  );



//////////////////////////////////////////////////////////////////////////////////////////
//                                        HENCH  (submitted by KR)                      //
//////////////////////////////////////////////////////////////////////////////////////////


  const henchCharRaw = `Anna/The Auditor
  Leviathan
  Supercollider
  June
  Quantum Entanglement`

  const henchChar2Raw = `Greg
  Keller
  Vesper
  Darla
  Jav
  Molly
  McKinnon
  Electric Eel`

  const henchImportantEventsRaw =`when Supercollider broke Anna's leg
  when Anna created the Injury Report
  when Anna had to do fieldwork
  when June cut Anna off
  when Quantum did THAT`;

  const henchOpinionsRaw = `Supercollider deserved it
  NO ONE deserves what happened to Supercollider
  Leviathan's compound was a communist utopia
  `;

  const henchMemesRaw = `Frigid Auditor Bitch`

  const henchGoalsRaw = `write some fanfic in this setting
  make a hench OC
  make a supervillain OC`;

  const henchLocationsRaw = `Leviathan's compound
  Dovecote`;

  const henchObjectsRaw = `Anna's cane
  Leviathan's armor`

  const henchJobsRaw= `supervillain
  superhero
  hench`

  all_obsessions[HENCH] = new Obsession(
    "Hench by Natalie Zina Walschots",
    henchCharRaw.split("\n"),
    henchChar2Raw.split("\n"),
    henchImportantEventsRaw.split("\n"),
    henchOpinionsRaw.split("\n"),
    henchMemesRaw.split("\n"),
    henchGoalsRaw.split("\n"),
    henchLocationsRaw.split("\n"),
    henchObjectsRaw.split("\n"),
    henchJobsRaw.split("\n")  
  );


//////////////////////////////////////////////////////////////////////////////////////////
//                                        5Darps  (submitted by IC)                     //
//////////////////////////////////////////////////////////////////////////////////////////

const darpsCharRaw = `Priska, Piper, Riku, Otto`;
const darpsChar2Raw = `Street, Mars, Venus, Tank, Mr. Yurlungur, Giltia, Kohl, Trudie, Hexe Trude, Grace, Marie, Anu, Apollo, Lucius, Phantom Dealer, Beatdown, Officer Lane, Nyan Nyan, Officer Moriard, Brad, Sano, Bob, Decoy Otto, Uria, Sasuke, Ninkendog, Thriller Killer, Serpent Night Terror`;
const darpsImportantEventsRaw=`when Riku killed the Netherworld King, when Maha Vailo broke Otto's criminal mark, when Hexe Trude took over the Satellite`
const darpsOpinionsRaw=``;
const darpsMemesRaw=``;
const darpsGoalsRaw=``;
const darpsLocationsRaw=``;
const darpsObjectsRaw=``;
const darpsJobsRaw=``;

all_obsessions[FIVEDARPS] = new Obsession(
  "5Darps",
  darpsCharRaw.split(","),
  darpsChar2Raw.split(","),
  darpsImportantEventsRaw.split(","),
  darpsOpinionsRaw.split(","),
  darpsMemesRaw.split(","),
  darpsGoalsRaw.split(","),
  darpsLocationsRaw.split(","),
  darpsObjectsRaw.split(","),
  darpsJobsRaw.split(",")  
);


//////////////////////////////////////////////////////////////////////////////////////////
//                                  Togigageta   (submitted by CD)                      //
//////////////////////////////////////////////////////////////////////////////////////////


const togiCharRaw = `Bastonia
Forest
Fiction
Adeff
Esafa`;
const togiChar2Raw = `Fibasie
Tosbab
Fofo
Didaes
Egast
Coddy
Bab
The Mayor`;
const togiImportantEventsRaw = `when the siblings found the terminal
when Bastonia escaped their home
when Bastonia found the first gateway
when Esafa stole the ancient artifact
when Adeff pierced the veil
when the secret temple was uncovered
when the mayor finally appeared`;
const togiOpinionsRaw = `Cube is a better name
Adeff is irredeemable
Forest is the best character in anything ever
Fiction shouldn't have forgiven Forest
Esafa is the cutest
Lagamorph's Alley is terrifying
the projection sequences are pretty cool
the twist about the mayor is cliche`;
const togiMemesRaw = `putting silverware in the bathtub
ripe snow globes
the everything collection
I hope you get shot soon
The Locksmith
crowbars`;
const togiGoalsRaw = `write a fanfic about Didaes' daily schedule
make a remix of Tosbab's song
paint all of Bab's paintings in real life
write a fanfic about the siblings' past
write out how Esafa's sidequest works
make a map of the Rotting Woods
document all of Coddy's dialogue
draw fanart of Fofo at work on a new tool
draw the siblings in the Temple of Above`;
const togiLocationsRaw = `Bas' house
Esafa's lab
the Temple of Above
Somewhat Standard Supermarket
Lagomorph's Alley
The Rotting Woods
The Labyrinth
Breakdown Junction
the siblings' house
the mayor's office
Fibasie's tutorial booth
the playground
the Temple of Identity`;
const togiObjectsRaw = `source mirror
drop decoder
purple key
terminal
liminal lens
eye candy
sandy bottle`;
const togiJobsRaw = `cashier
hunter
painter
reologist
alchuemist`;


all_obsessions[TOGITHINGY] = new Obsession(
  "Togigageta",
  togiCharRaw.split("\n"),
  togiChar2Raw.split("\n"),
  togiImportantEventsRaw.split("\n"),
  togiOpinionsRaw.split("\n"),
  togiMemesRaw.split("\n"),
  togiGoalsRaw.split("\n"),
  togiLocationsRaw.split("\n"),
  togiObjectsRaw.split("\n"),
  togiJobsRaw.split("\n")  
);


//////////////////////////////////////////////////////////////////////////////////////////
//                                  SubtleWArs   (submitted by MI)                      //
//////////////////////////////////////////////////////////////////////////////////////////



//MI NOTE: These are all Gods, so that'll be fun
const swCharRaw = `The Immaculate
The Skinless Forest
The Masked Crown
The Storm-Cord
The Leviathan
The Cyclopean
The Daughter
The Moonson
The Anabasis
The Spider-in-Sharpness
The Imago
The Pageantine
The Old Queen Carnage
The Lady Thorn
The Shackle-Forge
The Gorge Gnash
The Pale Dancer
The Mother Locust
The Undercradle
The Incarnadine
The Mendicant
The Incarnadine
The Other Sun`;
const swChar2Raw = `W. Aster
Sandra Wakelight
The Rapture-Wurm
General Ruin
Wings-of-Tempest
The Splintered
The First Flame
Ruth of Rieche
James “Invincible” Kastanza (Self titled)
Thomson Osgood
Sun-In-Waiting
Lady Sapphire
The Cogwhale
The Knight-in-The-Woods
The Unblivion`;
const swImportantEventsRaw = `when the Second Dawn broke
when the Dawn of Time came
when the Old War was won
when the Farmer's Crime was punished
when the Paracosm came
when the Nine Breath Truth was implemented
when the Splintered ascended 
when the First Flame ascended 
when the First Exodus of Beasts occurred
when the Leviathan drank the Moonson
When the Infant Vendetta ended
when Atlantis fell
when Leviathan, Winter, and the Pale Dancer fought the War of Frost
when the First Luthier committed the Tragedy of the Storm-Cord
when Old Queen Carnage waged the War of Death
when the Red Revel ended the Berlin Convergence
when the Alica bound the Enlaced
when Oliver gazed into the Infestation
when General Ruin died
when the Emergence came
when the Reckoning happened
when the Corpse of the Primordial Dragon hit Detroit
when the New War begins `;
const swOpinionsRaw = `The Moonson did nothing wrong.
The Unplace is a great idea.
Leviathan is responsible for everything.
Fae are overpowered.
Ruth of Reiche is the best author.
C. Ambrose is the best author.
Sandra Wakelight is the best author.
Leila Raines is the worst author.
The Spider-in-Sharpness is the most important God.
The timeline doesn't make sense.
The Farmer's Crime was Cain and Abel.
The Imago is the son of the Other Sun
Plato was right, the world is a supernal reflection
The Mountain is as a gem with 813 facets
Moths are those who Seek
Magic is an extensive kind of Lie
The world created the Gods, not the other way round
The Pageantine's dream is all of our world
The Mountain is a collective hallucination `;
const swMemesRaw = `Almire is a peaceful land
As above so below
TENDON DAMAGE
All my worlds lost
The Wolves Wore Smiling Skin
:) 
Anabased
Who is W. Aster?
ITS NOT THE FUCKING UNPLACE YOU PIECE OF SHIT AZURITE
I will never forgive the Mendicant
JAMES KASTZANA LIVES
Ask me about the Moon`;
const swGoalsRaw = `Dream of the Mountain
Solve a Grimoire
Ascend during a Convergence
Kill an Endless
Kill a God
Remake the Other Mountain
Find a Rite
Build a stronger Cult
Become an Entity
Write a complete guide to the Mountain
Find the Moonson's Secret
Solve the secret of the Exaltation
Wake the Pageantine
Free the Moonson
Become a star-soul
Become Omniscient
Create new Magic`;
const swLocationsRaw = `Almire
The Mountain in Dreams
The Head
The Summit
The Alabaster Library
The Chancery
The Aviary Incandescent
The Watchtowers
The Ivory Maze
Summer's Lodge 
The Innards
Court
House of Traitors
The Gullet
The Workshop
The Pyre
Warrens
The Gallery
Dancer's Hall
Burrows
The Flanks
The Orchestra 
The Forest
Deep Woods
The Heart of the Forest
The Abattoir
Museum of Scars
The Arena 
The Trench
House of Needles
The Swarm
The Unfair Embassy
The Waystone Path
Pillar of Brass
The Depths
Lake Lethe, 
City of Gears
Blackstone Cathedral
Heartbreak Grove
The Abyss
The Spider Door
The Half-jails
Tomb of the Moonson
The Buried
THE Aether
The Observatory
The Titan's Road
The Winding Road
The Other Mountain
Realms Between
Unplace
Impossible Angles
Beyond
Eras' Court`;
const swObjectsRaw = `Skyglass Knife
Altar of Sacrifice
Rite of Reforging
Knowledge of Impossible Edges
Courtly Manners 1934 edition
Dragon Egg
Sliver of Oak
Hadur-Bag
Sword of Loss
The Eclipse Tarot
Madman's Head`;
const swJobsRaw = `Occultist
Endless
Awakened
Azurite
Weaver
Author
Archmage
Entity`;


all_obsessions[SUBTLEWARS] = new Obsession(
  "Mountain-in-Dreams",
  swCharRaw.split("\n"),
  swChar2Raw.split("\n"),
  swImportantEventsRaw.split("\n"),
  swOpinionsRaw.split("\n"),
  swMemesRaw.split("\n"),
  swGoalsRaw.split("\n"),
  swLocationsRaw.split("\n"),
  swObjectsRaw.split("\n"),
  swJobsRaw.split("\n")  
);


//////////////////////////////////////////////////////////////////////////////////////////
//                         CNC (aka machining)   (submitted by DM)                      //
//////////////////////////////////////////////////////////////////////////////////////////

const cncCharRaw = `Abom79
This Old Tony
Tubalcain`;
const cncChar2Raw = ``;
const cncImportantEventsRaw = `when Tony broke a bit
when Abom79 used the overhead crane
when Abom79 used a Starrett indicator to center stock on a lathe
when Tony added a DRO to the mill
when Tony fed his cat metal scraps until it pooped machine bolts`;
const cncOpinionsRaw = `Tony is too poor to buy cheap tools`;
const cncMemesRaw = `Tram the head.
Check your chuck for concentricity.
Shop math.
`;
const cncGoalsRaw = `acquire a power tap`;
const cncLocationsRaw = `the home shop.
the garage.
the metal fan`;
const cncObjectsRaw = `drill bit
screw`;
const cncJobsRaw = `machinist`;


all_obsessions[CNC] = new Obsession(
  "The Machining Hobby",
  cncCharRaw.split("\n"),
  cncChar2Raw.split("\n"),
  cncImportantEventsRaw.split("\n"),
  cncOpinionsRaw.split("\n"),
  cncMemesRaw.split("\n"),
  cncGoalsRaw.split("\n"),
  cncLocationsRaw.split("\n"),
  cncObjectsRaw.split("\n"),
  cncJobsRaw.split("\n")  
);



//////////////////////////////////////////////////////////////////////////////////////////
//                        The Way Ahead    (submitted by Daedalus)                      //
//////////////////////////////////////////////////////////////////////////////////////////
//https://www.royalroad.com/fiction/42202/the-way-ahead/

const twaCharRaw = `Edwin Karl Maxlin`;
const twaChar2Raw = `Inion, Rillah, Lefi`;
const twaImportantEventsRaw = `when Edwin fell through worlds and from the sky, when Edwin argued with the god-emperor of birdkind, when Edwin slew the mage of the blood plague, when Edwin made a machine to control the weather, when Edwin discovered that some bacteria are immune to fire`;
const twaOpinionsRaw = `The Empire is obviously evil and wrong for having Skill control, Edwin is an absolute idiot and that's not at all how social anxiety works, a twelve-skill limit is tantamount to genocide, the Empire is dystopic, Niall is a brave and upstanding freedom fighter, the bandit arc was absolutely awful, Rillah is incredibly untrustworthy, Inion thinks of Edwin as a pet, Edwin is a complete blank slate, Edwin's personality makes the story basically unreadable and is so unrealistic, Edwin is a very realistic look at social anxiety, social anxiety doesn't exist, they call themselves the Empire obviously they're evil, the dwarf king whatsisname is just the absolute worst, Lefi is secretly Loki, Lefi has the Immortality and Age Resistance skills`;
const twaMemesRaw = `Further testing required!,Further research required!`;
const twaGoalsRaw = `Map out all the skills, write a Lefi fanfiction`;
const twaLocationsRaw = `Highpeak Kingdoms, The Verdant, Joriah, Vinstead`;
const twaObjectsRaw = ` a crystal erlenmyer flask holding a perpetually-burning flame`;
const twaJobsRaw = `Alchemist`;


all_obsessions[THEWAYAHEAD] = new Obsession(
  "The Way Ahead",
  twaCharRaw.split(","),
  twaChar2Raw.split(","),
  twaImportantEventsRaw.split(","),
  twaOpinionsRaw.split(","),
  twaMemesRaw.split(","),
  twaGoalsRaw.split(","),
  twaLocationsRaw.split(","),
  twaObjectsRaw.split(","),
  twaJobsRaw.split(",")  
);


//////////////////////////////////////////////////////////////////////////////////////////
//                       The Encyclopedia Arcane    (submitted by Daedalus)             //
//////////////////////////////////////////////////////////////////////////////////////////

//https://www.royalroad.com/fiction/56715/the-encyclopedia-arcane
const fwokCharRaw = ``;
const fwokChar2Raw = `T. Ketveh, Senior Gosiah`;
const fwokImportantEventsRaw = ``;
const fwokOpinionsRaw = `The Encyclopedia is solid exposition`;
const fwokMemesRaw = ``;
const fwokGoalsRaw = `Develop more`;
const fwokLocationsRaw = `Ikraish, Ithular`;
const fwokObjectsRaw = ``;
const fwokJobsRaw = `Mage-researcher, teleportation engineer`;


all_obsessions[FORWANTOFKNOWLEDGE] = new Obsession(
  "The Encyclopedia Arcane",
  fwokCharRaw.split(","),
  fwokChar2Raw.split(","),
  fwokImportantEventsRaw.split(","),
  fwokOpinionsRaw.split(","),
  fwokMemesRaw.split(","),
  fwokGoalsRaw.split(","),
  fwokLocationsRaw.split(","),
  fwokObjectsRaw.split(","),
  fwokJobsRaw.split(",")  
);

//////////////////////////////////////////////////////////////////////////////////////////
//                       Of And They Shall    (submitted by Daedalus)                   //
//////////////////////////////////////////////////////////////////////////////////////////
//:) :) :)

const oatsCharRaw = `Ilkur Taisal Relikar`;
const oatsChar2Raw = `Zenunual, Garin, Etuia`;
const oatsImportantEventsRaw = `when Ilkur conquered Ikraish, when Etuia betrayed her family, when Ilkur became The Archgod`;
const oatsOpinionsRaw = `Ilkur did nothing wrong, Zenunal is hot (Zenunal would kill you/yes I know), I ship Etuia and Ilkur`;
const oatsMemesRaw = ``;
const oatsGoalsRaw = `Zenunal (a succubus)/everyone smut fanfiction`;
const oatsLocationsRaw = `Ikraish`;
const oatsObjectsRaw = ``;
const oatsJobsRaw = `Archking, Battlemage, a Chosen One`;


all_obsessions[OFANDTHEYSHALL] = new Obsession(
  "Of And They Shall",
  oatsCharRaw.split(","),
  oatsChar2Raw.split(","),
  oatsImportantEventsRaw.split(","),
  oatsOpinionsRaw.split(","),
  oatsMemesRaw.split(","),
  oatsGoalsRaw.split(","),
  oatsLocationsRaw.split(","),
  oatsObjectsRaw.split(","),
  oatsJobsRaw.split(",")  
);



//////////////////////////////////////////////////////////////////////////////////////////
// Zampanio    (Bullshit, Guesses and Extroploations about Zampanio the Game)           //
//////////////////////////////////////////////////////////////////////////////////////////

const zCharRaw = `Castor, Pollux,Mary King,noli,the Author,Web,The Player,Truth,Narrator,Cutsey Anime Girl, The Partigiano, Waste of Lies,Jaxon Researcher,NotAMinotaur`;
const zChar2Raw = `Doc Slaughter,Zampano,Mysterious Hooded Cat Person,Librarian, Talking Animal, Nameless Invisible Character,ZEUS ,Mermaid, Savepoint Fairy, Susan,Clarence,lionfish, Princess, Janky Sprite,Memory Guy,Eye,Data Collectors, Shambling Horror With Your Face,ShamblingHorrorWithYourFace`;
const zImportantEventsRaw = `when you mistook an old lady in the forest with moss growing on her for a background statue ,when you find the banquet hall,when you realize you've played this game before, when you lose the game, when you realize you're already playing the game,when you rescued your sister, when the adventures of castor and pollux started, when you ragequit so bad you decided to delete your save, when you had to dodge the meteor shower,when the playe rescued a kitten, when we ended up cutting these magic pipes that delivered energy to a mermaid city and they had to be repaired in the epilogue, when we watched a meteor shower in the sky together,when the player saved all the mermaids from some evil threat,when the player mastered their magic powers , when you found a copy of yourself in the maze,when the player jaywalked, when the player made the world's most grand and destructive BBQ, when the player stopped a big bad evil guy through powers of friendship and incredible violence, when the player character was seated at some kind of banquet hall that looked like it could have held dozens of people, but only one other person was in it`;
const zOpinionsRaw = `Zampanio is a good game,
it seems like the developers were well aware and went "fuck it, it's a feature" instead of actually fixing it.,
The sum of what I have said.,This fruit and this meat change people. ,There are no guests.,The feast is laid out for those meant to partake.,My quest is, at last, at its end.,everyone is getting scary or getting scared,that won't make sense to a lot of you. maybe not even any of you, really. but. just trust me on this one.,you've played this game before, i've played this game before,A pawn on a stage; no matter its colour at this precise moment, it is a pawn on a stage., We were all born for it, one way or the other, in this circling, spiraling chain of exchanges.,A notion of the pneuma; nothing else, other than what is.,To testify, through our actions, that we are alive, and are.,The choices we don't make, as do the choices we make.,Love, justice, duty and mercy, like belief in a higher power, are an act of faith; they are because they are assumed to be.,There is serenity in clockwork. Listen to the tick of seconds. It will guide you where you belong.,Awash in blood, no matter how you phrase it; whenever it unites or separates, whenever it's scaffolding or alkahest.,you should really play zampanio if you haven't already,the weird absence online only ended up intriguing me,it would make weird noises sometimes that made me naueous,the black screen was a maze,authors always stick text in ciphers when (in the fiction) that text would have no real reason to be encoded,the Author specifically recalled their father working on Zampanio before his disappearance,the Author was specifically looking for evidence of their father's trademark in the game,the most memorable scene from Zampanio recreated in this game was one where, from what i can remember, the player character was seated at some kind of banquet hall that looked like it could have held dozens of people but only one other person was in it, it might have been the Author's way of testing to see who would really be dedicated enough to this search that they'd go all the way of finding every secret they'd hidden in the gameyour customisation utterly changes your character's skill tree,Zampanio seems to be some sort of a weird western-style role-playing game,apparently Zampanio has a living community,it breaks my heart to see peeps miss out on [Secrets] because they're trying to explore everything traditionally,I found starting with a new branch everytime led to less variation then playing the same one over and over and letting the game do its thing`;
const zMemesRaw = `The Truth Is Layered,ancient italian video games slash greek myths,inexplicable force that deletes zampanio content,zampanio is a very good game you should play it",What color is the shade of Disbelief,you is needed to end the world,colonize your mind, verified fact,blatant lie,contemporary of pong,do you traverse mazes clockwise or counterclockwise, rip grumpy cat, the susan isnt there,dodge this moist pimp,Time Is Dead,L'n hpkpi wr ef jofghlqluf.,verses lines words,step 3, cut them in threes, this was the best birthday present i could have asked for, i looked away from my computer and realized that i had been playing zampanio for 14 hours straight,i swea i only palyed it 3 times.,YOUR TWIN IS GONE,GO TO ZEUS TO PLEAD FOR HER LIFE,There are no guests.,you've played this game before,There is serenity in clockwork. Listen to the tick of seconds. It will guide you where you belong.,guide you to your ascension,lattice of infinite possibilities,everyone should play it :),do not ask how the LAN party went,A coffee stain appeared in the settings menu,This is 100% anecdotal, but I found starting with a new branch everytime led to less variation then playing the same one over and over and letting the game do its thing,Vescillation is way overhyped,when you went with a standard Joriahn creation, when you got the memory of his death, You watch those two feet sway back and forth,Clear your mind. Focus only on what you find here. Do not think of the world without, do not bring your own memories. That leads to corruption.,:), How much do you think waffles cost?,The Susan isn't there`;
const zGoalsRaw = `delete at least three zampanio fan works,not a fed, died like cowards, give the bear lots of air, beware oblivion is at hand,longest table everget lost forever, tell my friends about zampanio, make a zampanio fan hack, make a zampanio fan game, write a zampanio fan fiction, draw a zampanio fan comic, make a zampanio arg, keep reading this site and never forget anything i find in it`;
const zLocationsRaw = `Morgan's Hill, Duskhollow, mermaid city, wasteland,banquet hall,classroom I used to go to as a kid,temple to Noli,Zampanio,sprawling jungle,vast metropolis,maze,labyrinth, A vast hall set with many long tables`;
const zObjectsRaw = `unos autograph book, duo mask, tres milk bottle, quatro blade, cinque cloak, sextant, septum coin, octome, novum mirror, weird spiral pattern, the lights, clown nose, long table, boat, mediafire link, spiral pupils, computer`;
const zJobsRaw = `priest of Noli,savepoint fairy,god, Achievement System,dev console,Data Collector,bomber`;


all_obsessions[ZAMPANIO] = new Obsession(
  "Zampanio",
  zCharRaw.split(","),
  zChar2Raw.split(","),
  zImportantEventsRaw.split(","),
  zOpinionsRaw.split(","),
  zMemesRaw.split(","),
  zGoalsRaw.split(","),
  zLocationsRaw.split(","),
  zObjectsRaw.split(","),
  zJobsRaw.split(",")  
);


//////////////////////////////////////////////////////////////////////////////////////////
//                   The Echidna Universe    (JR and IC's Zampanio Fanwork)             //
//////////////////////////////////////////////////////////////////////////////////////////


const teuCharRaw = `Camille, Neville, Devona, Witherby, Ria, Yongki, Captain, Vik, K, Lee/Hunter, Hoon, River, Parker, Peewee, Wanda, Train Girl Ambrose`;
const teuChar2Raw = `Rod, Rebel, Melon,Doc Slaughter, The Closer,The Intern, Flower Chick, Robert Bobert, Bobert Robert, The Eye Killer, Alt, Tyrfing, The Neighbor, NAM, Ronin, Himbo, Hostage, The Italian `;
const teuImportantEventsRaw = `when you realize that the Intern is only PRETENDING not to be in the Loop, when you realize there are two Closers and two Eye Killers and two Wanda/Wodins but no one else has doubles, when you realize that nearly all characters came from another universe, when you realize that Wanda defends the Eye Killer in Court every single loop, when you realize that its a SPACE loop into parallel dimensions and not a time loop, when you realize that wodin becomes the wanderer becomes wanda, when you realize wodin transwed their gender just to make a straight man joke about the Intern, when you realize that despite how normal the Intern is JR still stole his name, when you realize JR stole the names of everyone except those from lobotomy corp`;
const teuOpinionsRaw = `wanda should finally just let the memes end,parker should be allowed to tunnel out of the universe as a little treat,the closer is a girlboss, captain shouldn't be allowed to be inside his old body because yongki is there, yongki is child coded, its problematic to ship devona with anyone because she's canonical ace/aro, the eye killer is a minor, camille x ria is a toxic ship, witherby x neville is otp, its problematic to ship neville with anyone because he's child coded, neville is a grown ass man who can make his own decisions, devona is autistic, neville is autistic, devona has adhd, neville has adhd, camille is so completely normal, camille is DEFINITELY dead, ria is problematic, parker deserves happiness, k is a little shit, k deserves happiness, camille did nothing wrong, ria did nothing wrong, captain did nothing wrong, vik did nothing wrong, k did nothing wrong, lee/hunter did nothing wrong, hoon did nothing wrong, river did nothing wrong, parker did nothing wrong, peewee did nothing wrong, wanda is responsible for everything that went wrong`;
const teuMemesRaw = `The End is Never The End, Hydrate or Diedrate. The Truth Is Layered`;
const teuGoalsRaw = `create zampanio branches from this branch, dig dig dig dig, find all the secrets, record what secrets i've found, update the wiki, write a story about how you found zampanio, write a story about how you found the echidna universe, write a story write a story write a story`;
const teuLocationsRaw = `train station, parkers tunnels,mall, maze, parking lot, disney land, ohio, italy, florida, eyedol hq`;
const teuObjectsRaw = `unos autograph book, duo mask, tres milk bottle, quatro blade, cinque cloak, sextant, septum coin, octome, novum mirror`;
const teuJobsRaw = `CEBro, CFO, Shambling Horror, Lawyer, Auditor, Games Researcher, Conductor, Accountant, Imagineer`;


all_obsessions[THEECHIDNAUNIVERSE] = new Obsession(
  "The Echidna Universe",
  teuCharRaw.split(","),
  teuChar2Raw.split(","),
  teuImportantEventsRaw.split(","),
  teuOpinionsRaw.split(","),
  teuMemesRaw.split(","),
  teuGoalsRaw.split(","),
  teuLocationsRaw.split(","),
  teuObjectsRaw.split(","),
  teuJobsRaw.split(",")  
);

//////////////////////////////////////////////////////////////////////////////////////////
//                   Farragnarok    (Farrago Fiction's Not!SBURB Session)               //
//////////////////////////////////////////////////////////////////////////////////////////


const ffCharRaw = `Zawhei,Eirikr,Volour,Okarin,Peewee,Hagala,Despap,Othala,Nidhogg`;
const ffChar2Raw = `the Eagle, Loki, the consorts, Butler Bot, YN, Big Honkers`;
const ffImportantEventsRaw = `when the Leg Lamia and the Tail Lamia fought over whether Corrupt Nidhogg or Purified Nidhogg was the True Nidhogg,when the WigglerEater invaded LOHAE,when you realize the players used to be trolls and not lamia,when you realized Nidhogg had hacked reality to make scratches worse, when the Echidna Universe turned out to have a memory leak, when Peewee through himself into the Echidna to try to save the other three Universes,when Loki revealed herself to be a shapeshifter, when the Observers realized just how much power they had over the session, when Volour decided to influence the Observers opinions no matter what, when Eirikr organied the Leg Lamia to make sure Corruption happened no matter what, when Othala couldn't be found, when you realized where Othala had been, when Zawhei purified and realized how horrific her goals had been, when Nidhogg shook off the Corruption and organized the Snakes to save FarragoSpace,when it was revealed that Despap was the villain all along, when Hagala turned her back on Peewee, when Peewee revaled he remembered all 8 scratches at once, when Okarin finally fought of Slepnir, when Hagala bred four universes at once`;
const ffOpinionsRaw = `Zawhei was way too pompous, Volour was problematic, Volour was a Gaslight Gatekeep Girlboss,Nidhogg was a very dumb snake who shouldn't have been allowed to hack reality, Loki is probably JR in disguise, Loki probably isn't a leprechaun, Loki is actually a Trickster Player escaped from the Echidna, The Segundian Empire DESERVED to conquer FarragoSpace, Despap did nothing wrong, Peewee whines too much, Peewee is a poor lil meow meow, Othala barely even mattered, Nidhogg is better corrupt, Nidhogg is better purified, Hagala was too mean to Peewee`;
const ffMemesRaw = `Echidnas are gross, Pap Pap Pap!, Endless Life Better Than Endless Memes`;
const ffGoalsRaw = `write a story where Peewee accepts the Echidnas corruption as superior to Nidhoggs, let Peewee finally rest,make an elaborate semi anonymous RP system where Peewee attempts to destroy the Echidna and instead becomes Corrupted by it,write a story about Peewee breaking free of the Observers chains,clear up the void surrounding the farragnarok session, write a spiralling fan work of farragnarok that details whats inside the gross echidna`;
const ffLocationsRaw = `The Land of Mist and Trails, The Land of Horrorticulture and Essence, The Land of Shadows and S`;
const ffObjectsRaw = `echidna, frog, raptor, :hatched_chick:, fruit`;
const ffJobsRaw = `Reaper, Skald, Grace, Butler,Guide,Thief, Horse,Glitch,???,Witch`;


all_obsessions[FARRAGNAROK] = new Obsession(
  "Farragnarok",
  ffCharRaw.split(","),
  ffChar2Raw.split(","),
  ffImportantEventsRaw.split(","),
  ffOpinionsRaw.split(","),
  ffMemesRaw.split(","),
  ffGoalsRaw.split(","),
  ffLocationsRaw.split(","),
  ffObjectsRaw.split(","),
  ffJobsRaw.split(",")  
);

/*

const CharRaw = ``;
const togiChar2Raw = ``;
const togiImportantEventsRaw = ``;
const togiOpinionsRaw = ``;
const togiMemesRaw = ``;
const togiGoalsRaw = ``;
const togiLocationsRaw = ``;
const togiObjectsRaw = ``;
const togiJobsRaw = ``;


all_obsessions[TOGITHINGY] = new Obsession(
  "tbd",
  CharRaw.split("\n"),
  Char2Raw.split("\n"),
  ImportantEventsRaw.split("\n"),
  OpinionsRaw.split("\n"),
  MemesRaw.split("\n"),
  GoalsRaw.split("\n"),
  LocationsRaw.split("\n"),
  ObjectsRaw.split("\n"),
  JobsRaw.split("\n")  
);*/