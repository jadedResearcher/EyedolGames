const handleRestaurantPage = (name, themes, seed) => {
  const theme_keys = themes.split(",")
  const container = document.querySelector("#categories");
  const rand = new SeededRandom(seed);
  container.id = "profile";

  const header = createElementWithClassAndParent("div", container, "profile_header");
  const image = createElementWithClassAndParent("img", container, "profile_image");

  const title = createElementWithClassAndParent("h1", container, "title");
  const features = createElementWithClassAndParent("div", container, "features");
  const reviews = createElementWithClassAndParent("div", container, "reviews");

  title.innerHTML = name;
  setupFeaturedItems(features, rand, theme_keys);
  setupReviews(reviews, rand, theme_keys);



  let images = collateAllImages(rand, theme_keys);
  images.then((results) => {
    image.src = rand.pickFrom(results);
    if (rand.nextDouble() > .5) {
      image.style.objectFit = "none";
    }
  });
}

const setupFeaturedItems = (container, rand, theme_keys) => {
  const title = createElementWithClassAndParent("h2", container, "section-title");
  const parent = createElementWithClassAndParent("div", container, "featured-meals");
  handleFeatureScrolling(parent,rand,theme_keys );


  title.innerHTML = "Featured Items";
  for (let i = 0; i < 10; i++) {
    renderOneFeaturedItem(parent, rand, theme_keys, false);
  }
}

const setupReviews = (container, rand, theme_keys) => {
  const title = createElementWithClassAndParent("h2", container, "section-title");
  const parent = createElementWithClassAndParent("div", container, "featured-reviews");
  handleReviewScrolling(parent,rand,theme_keys );

  title.innerHTML = "What people are saying";
  for (let i = 0; i < 10; i++) {
    renderOneReview(parent, rand, theme_keys, false);
  }
}

const getItemName = (rand, theme_keys, weird) => {
  const possibilities = [
    `${pickARandomThemeFromListAndGrabKey(rand, theme_keys, ADJ, true)} ${pickARandomThemeFromListAndGrabKey(rand, theme_keys, OBJECT, true)}`,
    `${pickARandomThemeFromListAndGrabKey(rand, theme_keys, COMPLIMENT, true)} ${pickARandomThemeFromListAndGrabKey(rand, theme_keys, OBJECT, true)}`,
    `${pickARandomThemeFromListAndGrabKey(rand, theme_keys, PERSON, true)}'s ${pickARandomThemeFromListAndGrabKey(rand, theme_keys, OBJECT, true)}`,
    `${pickARandomThemeFromListAndGrabKey(rand, theme_keys, ADJ, true)} ${pickARandomThemeFromListAndGrabKey(rand, theme_keys, OBJECT, true)}`,
    `${pickARandomThemeFromListAndGrabKey(rand, theme_keys, LOCATION, true)}'s ${pickARandomThemeFromListAndGrabKey(rand, theme_keys, OBJECT, true)}`
  ];

  if (weird) {
    possibilities.push(`${pickARandomThemeFromListAndGrabKey(rand, theme_keys, INSULT, true)} ${pickARandomThemeFromListAndGrabKey(rand, theme_keys, OBJECT, true)}`,)
  }
  return rand.pickFrom(possibilities);
}

const handleFeatureScrolling = (container,rand, existing_keys)=>{
  let lastScrollTime = 0; //not to spam events
  container.onscroll = () => {
    const newTime = new Date().getTime();
    if (((newTime - lastScrollTime)) < 50) {
      return;
    }
    lastScrollTime = newTime;

    window.requestAnimationFrame(() => {
      renderOneFeaturedItem(container, rand, [...existing_keys,rand.pickFrom(Object.keys(all_themes))],true);
    });

  };
}

const handleReviewScrolling = (container, rand,existing_keys)=>{
  let lastScrollTime = 0; //not to spam events
  container.onscroll = () => {
    const newTime = new Date().getTime();
    if (((newTime - lastScrollTime)) < 50) {
      return;
    }
    lastScrollTime = newTime;

    window.requestAnimationFrame(() => {
      renderOneReview(container, rand,[...existing_keys,rand.pickFrom(Object.keys(all_themes))],true);
    });

  };
}


const renderOneFeaturedItem = (parent, rand, theme_keys, weird) => {
  const container = createElementWithClassAndParent("div", parent, "one-featured-meal");


  const imageContainer = createElementWithClassAndParent("div", container, "meal-image-container");

  const image = createElementWithClassAndParent("img", imageContainer, "meal-image");
  const title = createElementWithClassAndParent("h3", container, "meal-title");
  title.innerHTML = getItemName(rand, theme_keys, weird);
  const price = createElementWithClassAndParent("div", container, "meal-title");
  price.innerHTML = `$${(rand.getRandomNumberBetween(0,5) + rand.nextDouble()).toFixed(2)}`;
  const add_button = createElementWithClassAndParent("button", imageContainer, "add");
  add_button.innerHTML = "Add";

  let images = collateAllImages(rand, theme_keys);
  images.then((results) => {
    image.src = rand.pickFrom(results);
    if (rand.nextDouble() > .5) {
      image.style.objectFit = "none";
    }
  });

}

const renderOneReview = (parent, rand, theme_keys, weird) => {
  const container = createElementWithClassAndParent("div", parent, "one-review");


  const first_names = ["Jake","Rachel","Tobias","Marco","Cassie","Tom","Erek","Camille","Yongki","Parker","Ria","Devona","Neville","Witherby", "Hoon","River","Khana","Vik","Craig","John","Jude","Jade","Joey","Rose","Roxy","Jeff","Dave","Dirk","Jove","Jake","Sophie","Jaxon","Basira","Daisy","Martin","Georgie","Sasha","James","Taylor","Victoria","Jean-Paul","Bob","Alice","Carol","Eve","Adam","Rachel","Brian","Aisha","Alexandra","Alex","Tobias","Marco","Cassie","Tom","Lisa","Sarah"," Sylvester","Gordon","Helen","Jamie","Lillian","Mary","Ashton","Peter","Zawhei","Eirikr","Volour","Okarin","Peewee","Hagala","Despap","Othala","Gertrude","Mike","Michael","Peter","Simon","Manuela","Annabel"];

  const title = createElementWithClassAndParent("h3", container, "meal-title");
  title.innerHTML =`${rand.pickFrom(first_names)} ${rand.pickFrom(first_names)[0]} `;
  const rating = createElementWithClassAndParent("div", container, "rating");
  const ratings = ["<span class='good'>⭐</span><span class='good'>⭐</span><span class='good'>⭐</span><span class='good'>⭐</span><span class='good'>⭐</span>","<span class='good'>⭐</span><span class='good'>⭐</span><span class='good'>⭐</span><span class='good'>⭐</span><span class='bad'>⭐</span>","<span class='good'>⭐</span><span class='good'>⭐</span><span class='good'>⭐</span><span class='bad'>⭐</span><span class='bad'>⭐</span>","<span class='good'>⭐</span><span class='good'>⭐</span><span class='bad'>⭐</span><span class='bad'>⭐</span><span class='bad'>⭐</span>","<span class='good'>⭐</span><span class='bad'>⭐</span><span class='bad'>⭐</span><span class='bad'>⭐</span><span class='bad'>⭐</span>"];
  rating.innerHTML = pickFrom(ratings);

  const review = createElementWithClassAndParent("div", container, "meal-title");

  const qObject = ()=> pickARandomThemeFromListAndGrabKey(rand,theme_keys,OBJECT);
  const qCompliment = ()=>pickARandomThemeFromListAndGrabKey(rand,theme_keys,COMPLIMENT);
  const qInsult = ()=>pickARandomThemeFromListAndGrabKey(rand,theme_keys,INSULT);
  const quick = (key)=>pickARandomThemeFromListAndGrabKey(rand,theme_keys,key);

  console.log("JR NOTE: ", qObject)

  let reviews = [`The ${quick(OBJECT)} smelled like ${quick(SMELL)}.`,
  `Don't even bother trying the ${quick(OBJECT)}.`,
  `I can't believe how cheap the ${quick(OBJECT)} was!`,
  `My ${quick(OBJECT)} wasn't in the bag.`,
  `Don't bother getting the ${quick(OBJECT)}.`,

  `The ${quick(OBJECT)} here is a classic.`,
  `${quick(OBJECT)} is AMAZING even tho they forgot the sauce.`,

  `The ${quick(OBJECT)} here reminds me of home!`,
  `mmmmmmmmmmmmmmmmmmm  gotta love that ${quick(OBJECT)}`,

  `${quick(OBJECT)} was good. Only problem was there was it wasn't ${quick(ADJ)} like I ordered.`,
  `Got everything right.`,
  `Forgot ${getRandomNumberBetween(0,5)} items out of our bag.`,
  "It's food.",
  `Everything was okay till I tasted the ${quick(OBJECT)}. Really disappointed because usually everything I get here is great.`,
  `Can't go wrong with the ${quick(OBJECT)}.`,
  `Don't listen to anyone saying the food is ${quick(INSULT)}.`,

  `I highly recommend the ${qObject()}.`,"Food arrived thirty minutes late. Never ordering from here again!",`The ${qObject()} was a little ${qInsult()}.`,`The ${qObject()} was so ${qCompliment()}!`,`Did not like the ${qObject()}.`,`The ${qObject()} was so fresh and juicy!.`,"Never eating here again."]
 
  if(weird){
    const weird_reviews = [
      `${quick(PHILOSOPHY)}`,
      `Why did my driver cast ${quick(SUPERMOVE)}?`,
      `When I took a bite of the ${quick(OBJECT)}, ${quick(EFFECTS)}.`,
      `I was scared of my driver. ${quick(MONSTER_DESC)}.`,
      `When I touched the ${quick(OBJECT)} I saw a flash of a weird place, ${quick(LOC_DESC)}.`

    ];
    reviews = reviews.concat(weird_reviews);
  }
  review.innerHTML = rand.pickFrom(reviews);


}