let horrors = ["protojr1.png",
  , "protojr2.png"
  , "protojr3.png"
  , "protojr4.png"
  , "protojr5.png"
  , "protojr6.png"
  , "protojr7.png"
  , "protojr8.png"
  , "protojr9.png"
  , "protojr10.png"
  , "protojr11.png"
  , "protojr12.png"
  , "protojr13.png"
  , "protojr14.png"
  , "protojr15.png"
  , "protojr16.png"
  , "protojr17.png"
  , "protojr18.png"]
class ProfilePage extends PageObject {

  obsessions=[];

  //  currentPage = profile? new Profile(name,image,matchPercent,loc) : new HomePage();

  constructor(seed, name, image, matchPercent, loc) {
    super();
    this.seed = seed ? seed : 13;
    this.rand = new SeededRandom(this.seed);
    this.quirk = testQuirk(this.rand);

    let numberObsessions = this.rand.getRandomNumberBetween(1,3);
    for(let i = 0; i<numberObsessions; i++){
      this.obsessions.push(this.rand.pickFrom(Object.values(all_obsessions)));
    }
    this.age = this.rand.getRandomNumberBetween(18, 99);
    this.name = name ? name : "Shambling Horror With Your Face";
    this.image = image ? baseURL + image : `http://farragofiction.com/ZampanioHotlink/KRsAIExperiments/${pickFrom(horrors)}`;
    this.loc = loc ? loc : "Right Behind You ;)";
    this.matchPercent = matchPercent ? matchPercent : "-216";
    this.lastOnline = this.rand.getRandomNumberBetween(0, 30);//days ago, 1 in X chance of being online now to talk to.
  }

  deploy = () => {
    const parent = document.querySelector("#container");
    let target = this.basicPageStructure(parent);




    let header = createElementWithClassAndParent("div", target, "profile-header");
    let headerContent = createElementWithClassAndParent("div", header, "profile-header-content");

    let imageEle = createElementWithClassAndParent("img", headerContent, "profile-image");
    imageEle.src = this.image;

    let rightCol = createElementWithClassAndParent("div", headerContent, "profile-header-right");

    let matchBox = createElementWithClassAndParent("div", rightCol, "profile-match-box");

    let matchPercent = createElementWithClassAndParent("div", matchBox, "profile-percent match");
    matchPercent.innerText = this.matchPercent + "% Match";

    let friendPercent = createElementWithClassAndParent("div", matchBox, "profile-percent friend");
    friendPercent.innerText = this.rand.getRandomNumberBetween(0, 100) + "% Friend"

    let enemyPercent = createElementWithClassAndParent("div", matchBox, "profile-percent enemy");
    enemyPercent.innerText = this.rand.getRandomNumberBetween(this.matchPercent, 100 - this.matchPercent) + "% Enemy"


    let nameEle = createElementWithClassAndParent("div", rightCol, "profile-name");
    nameEle.innerText = this.name;

    let ageEle = createElementWithClassAndParent("div", rightCol, "profile-age");
    ageEle.innerText = this.age;

    let locEle = createElementWithClassAndParent("div", rightCol, "profile-loc");
    locEle.innerText = this.loc;



    let messageButton = createElementWithClassAndParent("button", headerContent, "message-button");
    messageButton.innerText = "Message Them";





    let content = createElementWithClassAndParent("div", target, "profile-content");
    this.setupAbout(content);
    this.setupDetails(content);



  }




  setupDetails = (parent) => {
    let content = createElementWithClassAndParent("div", parent, "profile-details");

    let header = createElementWithClassAndParent("div", content, "profile-details-header");
    header.innerText = "Their Details";

    const createDetail = (label, text) => {
      let ele = createElementWithClassAndParent("div", content, "profile-details-wrapper");

      let labelEle = createElementWithClassAndParent("div", ele, "profile-details-label");
      labelEle.innerText = label;

      let textEle = createElementWithClassAndParent("div", ele, "profile-details-text");
      textEle.innerText = text;
    }

    const modifiers = ["and serious about it", "but not serious about it", "but it doesn't matter", "but only on weekends", "whenever family asks"]

    createDetail("Last Online", `${this.lastOnline === 0 ? 'Online Now!' : this.lastOnline + " days ago."}`);
    createDetail("Ethnicity", this.rand.pickFrom(["It's a secret ;)", "Wouldn't you like to know, weather boy.", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "Intentionally Left Blank", "Yes", "No", "Not Disclosed"]));
    createDetail("Height", `${this.rand.getRandomNumberBetween(3, 8)}' ${this.rand.getRandomNumberBetween(0, 12)}'' (${(this.rand.nextDouble() + 1).toFixed(2)}m)`);//the birbs don't know what a reasonable conversion of feet to meters would be, they just know profiles have this format. 
    createDetail("Body Type", this.rand.pickFrom(["Just Like Yours", "Universal", "Expensive", "Colorful", "Stable", "Vast", "Cold", "Temperate", "Abnormal", "Glorious", "Warm", "Hospitable", "Celestial", "Super Massive", "Clean", "Fashionable", "Skeletal", "Rotting", "Pleasant", "Angled", "Strange", "Haunted", "Crowded", "Cozy", "Filled with Natural Light", "Plant-Based", "Vibrant", "Elegant", "Controversial", "Dramatic", "Old-fashioned", "Trendy", "Classic", "Simple", "Spacious", "Bad", "Good", "Incorrect", "Correct", "Snuggly", "Soft", "Intimidating", "Powerful", "Curvy", "Non-Euclidean", "Athletic", "Thin", "Monstrous", "Shambling"]));
    createDetail("Diet", this.rand.pickFrom(["Exclusively My Own Flesh", "Pica", "Theft Based", "Sexual Canibalism", "Human Flesh", "Carrion", "Fast Food", "Bones", "Mold", "Fungus", "More than 70% Meat", "30-70% Meat", "Less than 30% Meat", "Wood ;)", "Pollen", "Grass", "Honey", "Nectar", "Flowers", "Zooplankton", "Worms", "Squid", "Frozen Rodents", "Small Insects", "Crickets", "Cake", "Frogs", "Snakes", "Mucus", "Molluscs", "Blood", "Eggs", "Coral", "Phagocytosis", "Myzocytosis", "Suction Feeding", "Ram Feeding", "", "Bulk Feeding", "Fluid Feeding", "Deposit Feeding", "Filter Feeding", "Trash", "Small Mammals", "Vertebrates", "Aquatic Invertebrates", "Larvae", "Aquatic Vegetation", "Grain", "Brains", "Other Birds", "Fruit, Seeds, Berries, Insects", "Bugs", "Omnivore", "Spiders", "Only Plants", "Vegan", "Mostly Meat", "Corn Chips", "Pizza", "Information", "Obsession"]));
    createDetail("Smokes", this.rand.pickFrom(["Socially", "While On Fire", "During Parties", "After Sex", "Yes", "No", "Sometimes", "No", "No", "No", "No", "No", "No", "No"]));
    createDetail("Drinks", this.rand.pickFrom(["Tea", "Coffee", "Never", "Milk", "Soda", "Blood", "Juice", "Alcohol", "Water", "Socially", "While On Fire", "During Parties", "After Sex", "Yes", "No", "Sometimes", "No", "No", "No", "No", "No", "No", "No"]));
    createDetail("Drugs", this.rand.pickFrom(["Insulin", "Ibuprofen", "A Weed", "Alchohol", "Socially", "While On Fire", "During Parties", "After Sex", "Yes", "No", "Sometimes", "No", "No", "No", "No", "No", "No", "No"]));
    createDetail("Religion", this.rand.pickFrom(["Atheiest " + this.rand.pickFrom(modifiers), "Agnostic " + this.rand.pickFrom(modifiers), "8 Divine", "Socially", "While On Fire", "During Parties", "After Sex", "Yes " + this.rand.pickFrom(modifiers), "No", "Sometimes", "No", "No", "No", "No", "No", "No", "No"]));
    const signs = ["Cancer", "Taurus", "Aries", "Libra", "Leo", "Virgo", "Gemini", "Scorpius", "Sagittarius", "Pisces", "Aquarius", "Capricorn"]
    createDetail("Sign", `${this.rand.pickFrom(signs)} ${this.rand.pickFrom(modifiers)}`);
    createDetail("Education", this.rand.pickFrom(["Zampanio", "Eyedlr", "Internet", "Community College", "Cooking School", "Clown College", "Med School", "Tech School", "School of Hard Knocks", "Doctorate", "Masters", "Bachelors", "Dropped Out of College", "High-School", "Dropped Out of High-School", "College"]));
    createDetail("Job", this.rand.pickFrom(["Spy", "Porn Bot", "Software Developer", "Nurse", "Truck Driver", "Manager", "Office Drone", "Black Smith", "Carpenter", "Mechanic", "Handy Man", "Electrician", "Plumber", "Fire Fighter", "Clown", "Military", "Police Officer", "Marketing", "Sales", "Customer Service", "Tech Support", "Secretary", "Bartender", "Assistant", "Accountant", "Wait Staff", "Construction Worker", "Model", "Doctor", "Lawyer", "Janitor", "No", "Yes", "Food Prep", "Cashier", "Military", "Programming", "Retail"]));
    let income = this.rand.getRandomNumberBetween(0, 7) * 10000;
    if (this.rand.nextDouble() > 0.5) {
      income += this.rand.getRandomNumberBetween(0, 7) * 10000;;
    }

    if (this.rand.nextDouble() > 0.95) {
      income += this.rand.getRandomNumberBetween(0, 50) * 10000;;
    }

    createDetail("Income", `$${(income - 10000).toLocaleString()}-$${(income + 10000).toLocaleString()}`);
    createDetail("Offspring", this.rand.pickFrom([this.rand.getRandomNumberBetween(0, 19), "Doesn't Want Kids", "Doesn't Have Kids, Might Want Some One Day", "No"]));
    const petAction = ["Is Allergic To", "Likes", "Dislikes", "Eats", "Pets", "Breeds", "Loves", "Craves", "Wants To Be Accpted By"]
    const petType = ["Frogs", "Lizards", "Snakes", "Pigeons", "Guinea Pigs", "Ferrets", "Chinchillas", "Dogs", "Cats", "Fish", "Small Animals", "Rabbits", "Livestock", "Birds", "Turtles", "Gerbils", "Hamsters", "Rodents", "Rats", "Pigs", "Mice", "Horses"]

    createDetail("Pets", `${this.rand.pickFrom(petAction)} ${this.rand.pickFrom(petType)}`);
    //https://www.html-code-generator.com/javascript/array/languages-name
    const languages_list = [
      { name: "Afrikaans", code: "af" },
      { name: "Albanian - shqip", code: "sq" },
      { name: "Amharic - አማርኛ", code: "am" },
      { name: "Arabic - العربية", code: "ar" },
      { name: "Aragonese - aragonés", code: "an" },
      { name: "Armenian - հայերեն", code: "hy" },
      { name: "Asturian - asturianu", code: "ast" },
      { name: "Azerbaijani - azərbaycan dili", code: "az" },
      { name: "Basque - euskara", code: "eu" },
      { name: "Belarusian - беларуская", code: "be" },
      { name: "Bengali - বাংলা", code: "bn" },
      { name: "Bosnian - bosanski", code: "bs" },
      { name: "Breton - brezhoneg", code: "br" },
      { name: "Bulgarian - български", code: "bg" },
      { name: "Catalan - català", code: "ca" },
      { name: "Central Kurdish - کوردی (دەستنوسی عەرەبی)", code: "ckb" },
      { name: "Chinese - 中文", code: "zh" },
      { name: "Chinese (Hong Kong) - 中文（香港）", code: "zh-HK" },
      { name: "Chinese (Simplified) - 中文（简体）", code: "zh-CN" },
      { name: "Chinese (Traditional) - 中文（繁體）", code: "zh-TW" },
      { name: "Corsican", code: "co" },
      { name: "Croatian - hrvatski", code: "hr" },
      { name: "Czech - čeština", code: "cs" },
      { name: "Danish - dansk", code: "da" },
      { name: "Dutch - Nederlands", code: "nl" },
      { name: "English", code: "en" },
      { name: "English (Australia)", code: "en-AU" },
      { name: "English (Canada)", code: "en-CA" },
      { name: "English (India)", code: "en-IN" },
      { name: "English (New Zealand)", code: "en-NZ" },
      { name: "English (South Africa)", code: "en-ZA" },
      { name: "English (United Kingdom)", code: "en-GB" },
      { name: "English (United States)", code: "en-US" },
      { name: "English (United States)", code: "en-US" },
      { name: "English (United States)", code: "en-US" },
      { name: "English (United States)", code: "en-US" },
      { name: "English (United States)", code: "en-US" },
      { name: "English (United States)", code: "en-US" },
      { name: "English (United States)", code: "en-US" },
      { name: "English (United States)", code: "en-US" },
      { name: "English (United States)", code: "en-US" },
      { name: "English (United States)", code: "en-US" },

      { name: "Esperanto - esperanto", code: "eo" },
      { name: "Estonian - eesti", code: "et" },
      { name: "Faroese - føroyskt", code: "fo" },
      { name: "Filipino", code: "fil" },
      { name: "Finnish - suomi", code: "fi" },
      { name: "French - français", code: "fr" },
      { name: "French (Canada) - français (Canada)", code: "fr-CA" },
      { name: "French (France) - français (France)", code: "fr-FR" },
      { name: "French (Switzerland) - français (Suisse)", code: "fr-CH" },
      { name: "Galician - galego", code: "gl" },
      { name: "Georgian - ქართული", code: "ka" },
      { name: "German - Deutsch", code: "de" },
      { name: "German (Austria) - Deutsch (Österreich)", code: "de-AT" },
      { name: "German (Germany) - Deutsch (Deutschland)", code: "de-DE" },
      { name: "German (Liechtenstein) - Deutsch (Liechtenstein)", code: "de-LI" },
      { name: "German (Switzerland) - Deutsch (Schweiz)", code: "de-CH" },
      { name: "Greek - Ελληνικά", code: "el" },
      { name: "Guarani", code: "gn" },
      { name: "Gujarati - ગુજરાતી", code: "gu" },
      { name: "Hausa", code: "ha" },
      { name: "Hawaiian - ʻŌlelo Hawaiʻi", code: "haw" },
      { name: "Hebrew - עברית", code: "he" },
      { name: "Hindi - हिन्दी", code: "hi" },
      { name: "Hungarian - magyar", code: "hu" },
      { name: "Icelandic - íslenska", code: "is" },
      { name: "Indonesian - Indonesia", code: "id" },
      { name: "Interlingua", code: "ia" },
      { name: "Irish - Gaeilge", code: "ga" },
      { name: "Italian - italiano", code: "it" },
      { name: "Italian (Italy) - italiano (Italia)", code: "it-IT" },
      { name: "Italian (Switzerland) - italiano (Svizzera)", code: "it-CH" }, { name: "Italian - italiano", code: "it" },
      { name: "Italian (Italy) - italiano (Italia)", code: "it-IT" },
      { name: "Italian (Switzerland) - italiano (Svizzera)", code: "it-CH" }, { name: "Italian - italiano", code: "it" },
      { name: "Italian (Italy) - italiano (Italia)", code: "it-IT" },
      { name: "Italian (Switzerland) - italiano (Svizzera)", code: "it-CH" }, { name: "Italian - italiano", code: "it" },
      { name: "Italian (Italy) - italiano (Italia)", code: "it-IT" },
      { name: "Italian (Switzerland) - italiano (Svizzera)", code: "it-CH" }, { name: "Italian - italiano", code: "it" },
      { name: "Italian (Italy) - italiano (Italia)", code: "it-IT" },
      { name: "Italian (Switzerland) - italiano (Svizzera)", code: "it-CH" },
      { name: "Italian - italiano", code: "it" },
      { name: "Italian (Italy) - italiano (Italia)", code: "it-IT" },
      { name: "Italian (Switzerland) - italiano (Svizzera)", code: "it-CH" },
      { name: "Japanese - 日本語", code: "ja" },
      { name: "Kannada - ಕನ್ನಡ", code: "kn" },
      { name: "Kazakh - қазақ тілі", code: "kk" },
      { name: "Khmer - ខ្មែរ", code: "km" },
      { name: "Korean - 한국어", code: "ko" },
      { name: "Kurdish - Kurdî", code: "ku" },
      { name: "Kyrgyz - кыргызча", code: "ky" },
      { name: "Lao - ລາວ", code: "lo" },
      { name: "Latin", code: "la" },
      { name: "Latvian - latviešu", code: "lv" },
      { name: "Lingala - lingála", code: "ln" },
      { name: "Lithuanian - lietuvių", code: "lt" },
      { name: "Macedonian - македонски", code: "mk" },
      { name: "Malay - Bahasa Melayu", code: "ms" },
      { name: "Malayalam - മലയാളം", code: "ml" },
      { name: "Maltese - Malti", code: "mt" },
      { name: "Marathi - मराठी", code: "mr" },
      { name: "Mongolian - монгол", code: "mn" },
      { name: "Nepali - नेपाली", code: "ne" },
      { name: "Norwegian - norsk", code: "no" },
      { name: "Norwegian Bokmål - norsk bokmål", code: "nb" },
      { name: "Norwegian Nynorsk - nynorsk", code: "nn" },
      { name: "Occitan", code: "oc" },
      { name: "Oriya - ଓଡ଼ିଆ", code: "or" },
      { name: "Oromo - Oromoo", code: "om" },
      { name: "Pashto - پښتو", code: "ps" },
      { name: "Persian - فارسی", code: "fa" },
      { name: "Polish - polski", code: "pl" },
      { name: "Portuguese - português", code: "pt" },
      { name: "Portuguese (Brazil) - português (Brasil)", code: "pt-BR" },
      { name: "Portuguese (Portugal) - português (Portugal)", code: "pt-PT" },
      { name: "Punjabi - ਪੰਜਾਬੀ", code: "pa" },
      { name: "Quechua", code: "qu" },
      { name: "Romanian - română", code: "ro" },
      { name: "Romanian (Moldova) - română (Moldova)", code: "mo" },
      { name: "Romansh - rumantsch", code: "rm" },
      { name: "Russian - русский", code: "ru" },
      { name: "Scottish Gaelic", code: "gd" },
      { name: "Serbian - српски", code: "sr" },
      { name: "Serbo - Croatian", code: "sh" },
      { name: "Shona - chiShona", code: "sn" },
      { name: "Sindhi", code: "sd" },
      { name: "Sinhala - සිංහල", code: "si" },
      { name: "Slovak - slovenčina", code: "sk" },
      { name: "Slovenian - slovenščina", code: "sl" },
      { name: "Somali - Soomaali", code: "so" },
      { name: "Southern Sotho", code: "st" },
      { name: "Spanish - español", code: "es" },
      { name: "Spanish (Argentina) - español (Argentina)", code: "es-AR" },
      { name: "Spanish (Latin America) - español (Latinoamérica)", code: "es-419" },
      { name: "Spanish (Mexico) - español (México)", code: "es-MX" },
      { name: "Spanish (Spain) - español (España)", code: "es-ES" },
      { name: "Spanish (United States) - español (Estados Unidos)", code: "es-US" },
      { name: "Sundanese", code: "su" },
      { name: "Swahili - Kiswahili", code: "sw" },
      { name: "Swedish - svenska", code: "sv" },
      { name: "Tajik - тоҷикӣ", code: "tg" },
      { name: "Tamil - தமிழ்", code: "ta" },
      { name: "Tatar", code: "tt" },
      { name: "Telugu - తెలుగు", code: "te" },
      { name: "Thai - ไทย", code: "th" },
      { name: "Tigrinya - ትግርኛ", code: "ti" },
      { name: "Tongan - lea fakatonga", code: "to" },
      { name: "Turkish - Türkçe", code: "tr" },
      { name: "Turkmen", code: "tk" },
      { name: "Twi", code: "tw" },
      { name: "Ukrainian - українська", code: "uk" },
      { name: "Urdu - اردو", code: "ur" },
      { name: "Uyghur", code: "ug" },
      { name: "Uzbek - o‘zbek", code: "uz" },
      { name: "Vietnamese - Tiếng Việt", code: "vi" },
      { name: "Walloon - wa", code: "wa" },
      { name: "Welsh - Cymraeg", code: "cy" },
      { name: "Western Frisian", code: "fy" },
      { name: "Xhosa", code: "xh" },
      { name: "Yiddish", code: "yi" },
      { name: "Yoruba - Èdè Yorùbá", code: "yo" },
      { name: "Zulu - isiZulu", code: "zu" }
    ];

    let speaks = [];
    let amount = this.rand.getRandomNumberBetween(0, 3);
    if (this.rand.nextDouble() > .5) {
      amount += this.rand.getRandomNumberBetween(0, 3);
    }

    if (this.rand.nextDouble() > .95) {
      amount += this.rand.getRandomNumberBetween(0, 19);
    }

    const fluency = ["Elementary", "Limited", "Professionally", "Can Count to Ten", "Okay", "Fluently", "High School"]


    for (let i = 0; i < amount; i++) {
      speaks.push(`${this.rand.pickFrom(languages_list).name}(${this.rand.pickFrom(fluency)})`);
    }

    createDetail("Speaks", speaks.join(", "));

  }

  setupAbout = (parent) => {
    let content = createElementWithClassAndParent("div", parent, "profile-about");
  
    const createSection = (label, text) => {
      let ele = createElementWithClassAndParent("div", content, "profile-section-wrapper");
  
      let labelEle = createElementWithClassAndParent("div", ele, "profile-section-title");
      labelEle.innerText = label;
  
      let textEle = createElementWithClassAndParent("div", ele, "profile-section-text");
      textEle.innerHTML = this.quirk.apply(text);
    }
  
    let sections =getPossibleSections(this.rand, this.obsessions);
  
    for(let section of sections){
      section.makeRamble();
      createSection(section.title, section.ramble)
    }
  
  
  }

}


