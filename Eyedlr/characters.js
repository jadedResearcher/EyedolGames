

class Character {
  name;
  liked_posts = []; //can view a profiles likes
  icon; //could be an absolute or relative url
  pinned_post;//each char has up to one of these
  posts = [];
  reblogged_posts = [];

  //responds to keyphrases
  readied_reblogs;

  tick = async (parentToRenderTo) => {
    //some make posts, some like or reblog other posts, some reply in posts, some send asks, some do nothing
  }

  likePost = (post) => {
    this.liked_posts.push(post);
    post.likePost();
  }

  unlikePost = (post) => {
    removeItemOnce(this.liked_posts, post);
    post.unlikePost();
  }


  createNewPost(text, tags, suggested_reblogs, suggested_tags) {
    const post = new Post(this, text, null, tags, suggested_reblogs, suggested_tags);
    this.posts.push(post);
    return post;
  }

  findAPostEvenIfYouHaveInteractedWithIt = () => {
    return rand.pickFrom(all_posts);
  }



  reblogAPost(parent, text, tags, suggested_reblogs, suggested_tags) {
    //  constructor(owner, text, parent, tags, suggested_reblogs, suggested_tags) {
    const post = new Post(this, text, parent, tags, suggested_reblogs, suggested_tags);
    this.posts.push(post);
    this.reblogged_posts.push(post);
    parent.addChild(post);
    return post;
  }

  //if you're on someones profiles, thats what you see
  renderAllPosts = (parent) => {
    if (this.pinned_post) {
      this.pinned_post.renderToScreen(parent);
    }
    for (let post of this.posts) {
      post.renderToScreen(parent);
    }
  }


}

const randomPornBotIcon = () => {
  if (rand.nextDouble() > 0.81) {
    return rand.pickFrom(weirdImageList);

  }
  return rand.pickFrom(normalImageList);
}

const randomPornBotName = () => {
  return rand.pickFrom(first_names) + getRandomNumberBetween(0, 9999);
}

const randomPornBot = () => {
  return new PornBot(randomPornBotName(), "http://eyedolgames.com/JackElope/images/SexySingles/" + randomPornBotIcon());
}



//want at least three of these for every real character. 
//they use the obsession engine to post things, but also 
class PornBot extends Character {
  // 20h:14m:36s
  //5d:23h:17:04s
  //4d:15h:21m:33s
  //http://knucklessux.com/PuzzleBox/Secrets/Watcher/shambling_yes_no_presentation_by_the_watcher_of_threads.ppsx 
  //https://www.tumblr.com/majimjam/714607788559679488/are-you-trapped-on-tumblr-right-now?source=share   porn bots should post

  //the names and icons vary but at the end of the day they're all pornbots
  constructor(name, icon) {
    super();
    this.name = name;
    this.icon = icon;
    this.quirk = randomQuirk(rand);
  }

  quotidianPost = () => {
    let innaneComments = ["caw!!!", "so true bestie!", "!!!","i came to have a good time and honestly i'm feeling so attacked right now", "i feel so attacked right now", "i'm in this picture and i don't like it"];
    let possiblePosts = [
      "20h:14m:36s",
      "5d:23h:17:04s",
      "4d:15h:21m:33s",
      `<a target='blank' href ="https://www.tumblr.com/majimjam/714607788559679488/are-you-trapped-on-tumblr-right-now?source=share"><img src ='images/Secrets/tumblr_screenshots/savepoint.PNG'></a>`
    ]
    if (zampanioEyes.length > 0) {
      let zEye = rand.pickFrom(zampanioEyes);
      possiblePosts.push(`I spy with my little eye: <img src='${zEye}'>`,)
    }

    return this.createNewPost(rand.pickFrom(possiblePosts), [rand.pickFrom(innaneComments)], innaneComments.concat(links), innaneComments);

  }

  quotidianReblog = (post) => {
    let innaneComments = ["caw!!!", "so true bestie!", "!!!", "i feel so attacked right now", "i'm in this picture and i don't like it"];
    if (post.suggested_reblogs && rand.nextDouble() > 0.5) {
      let t = [];
      if (post.suggested_tags) {
        t.push(this.quirk.apply(rand.pickFrom(post.suggested_tags)));
      }

      if (post.root && post.root.suggested_tags) {
        t.push(this.quirk.apply(rand.pickFrom(post.root.suggested_tags)));
      }
      return this.reblogAPost(post, this.quirk.apply(rand.pickFrom(post.suggested_reblogs)), t, ["message me for a good time!", "that's so sexy!", "wow! so interesting!", "tell me more!", "what a great idea!"], [...innaneComments, "link", "sexy"]);
    } else {
      return this.reblogAPost(post, this.quirk.apply(rand.pickFrom(innaneComments.concat(links))), [this.quirk.apply(rand.pickFrom(innaneComments))], ["message me for a good time!", "that's so sexy!", "wow! so interesting!", "tell me more!", "what a great idea!"], [...innaneComments, "link", "sexy"]);
    }
  }

  tick = async (parentToRenderTo) => {
    console.log("JR NOTE: quotidian tick");
    let target = this.findAPostEvenIfYouHaveInteractedWithIt();

    if (target && rand.nextDouble() > 0.75) {
      if (rand.nextDouble() > 0.5) {
        this.likePost(target);
      } else {
        let post = this.quotidianReblog(target);
        if (post && parentToRenderTo) {
          post.renderToScreen(parentToRenderTo);
        }
      }
    } else {
      let post = this.quotidianPost();
      if (post && parentToRenderTo) {
        post.renderToScreen(parentToRenderTo);
      }
    }
  }
}

//you should be allowed to follow people
//you can get asks (if you reply, posts), do you traverse mazes clockwise or counterclockwise
//you should get to post, and your posts are treated just like any other (aka they can be reblogged and commented on and etc)
class Observer extends Character {


}

//literally created Eyedlr, constantly reblogging memes and occasionally @ing the intern1, 
//occasionally reblogs something with a Prophecy
//will NEVER reblog anything Wodin did OR intern2. (v much not interested in her past self)
//WILL NOT LEAVE INTERN3 ALONE (let the man grieve! stop trying to recruit him! he'll join you when he's ready!)
//32, 40, 41, 59  posts secrets and shit (future JR i know you wanna know where i got those numbers from but i'd rather an Unmarked tell you)
class Wanda extends Character {

//wanda likes youtube better https://www.tumblr.com/batastrophe7/714415053266436096/yea-and-it-fucking-kicked-ass-and-it-fucking?source=share



}

//only reblogs their own posts. 
//only does a single new post. 
//http://farragofiction.com/Gopher/NORTH/
//when they reblog a post, load up the page for that location in the gopher maze
//then determine which paths are available from there
//create a reblog with the content of the new page (including false doors and hydration stations, basically all .txt files)
//the wanderer only can wander.
class Wanderer extends Character {
  name = "wanderer";

  icon = "images/icons/wanderer.png";
  tags = ["i'm almost there i'm sure of it", "i've gotta keep going", "i don't like this", "gopher", "wow", "i'm so thirsty", "it's all so clear now!", "so close", "i feel like i'm on the verge of a breakthrough", "haven't found the end yet", "i'm probably not lost", "weird", "look what i found", "it HAS to mean something, right?", "this could be the key!", "what if its related to zampanio?", "do you think this proves anything?"];


  //just made the repo public cuz i figure i've been doing more and more dev work here and its alreayd found so why not
  getPostURL = (post) => {
    let eles = post.element.querySelectorAll(".gopher_url");
    if (eles && eles.length > 0) {
      let last = eles[eles.length - 1]
      return last.dataset.path;

    } else {
      return "http://farragofiction.com/Gopher/";
    }
  }
  //ironic that the wanderer is the web crawler here instead of the quotidians
  gopherCrawl = async () => {
    let t = [];
    const amount = rand.getRandomNumberBetween(1, 9);//quotidian arc number because wodin/wanderer/wanda made them
    for (let i = 0; i < amount; i++) {
      t.push(rand.pickFrom(this.tags));
    }

    t = uniq(t)
    if (this.posts.length === 0) {
      console.warn("JR NOTE: The Wanderer has entered the maze!")
      let content = await turnGopherContentIntoHTML(base_gopher_url);
      let responses = ["the end is never the end", "the maze has you", "the maze is within and the maze is without", "the truth is layered", "there is nothing worth finding here", "we wait", "friday beckons", "when will you wake up"];
      return this.createNewPost(content, t, [rand.pickFrom(responses)], [rand.pickFrom(responses)]);
    } else {
      /*
      grab last post
      grab its url
      grab potential branch points from it
      //try to make a post for them 
      //(if you can't, instead pick a random post and add a tag about backtracking)


      */
      //wow i hate these nested tryes. good job me. 
      let pendingDirection = "";
      try {
        let post = this.posts[this.posts.length - 1];
        let url = this.getPostURL(post);
        pendingDirection = url;
        let branchPoints = await findAllExitsFromGopherHoleLocation(url);
        let chosenExit = rand.pickFrom(branchPoints);

        let content = await turnGopherContentIntoHTML(chosenExit);


        return this.reblogAPost(post, content, t, ["goodbye world"], ["goodbye", "world"]);
      } catch (e) {
        //console.error(e);
        try {

          this.tags.push("i got turned around. have to go back.")
          let post = rand.pickFrom(this.posts);
          let url = this.getPostURL(post);
          let branchPoints = await findAllExitsFromGopherHoleLocation(url);
          let chosenExit = rand.pickFrom(branchPoints);

          let content = await turnGopherContentIntoHTML(chosenExit);
          content = `<p>I think I got turned around...</p>` + content;


          return this.reblogAPost(post, content, t, ["goodbye world"], ["goodbye", "world"]);
        } catch (e) {
          //console.error(e);
        }
      }

    }
  }

  tick = async (parentToRenderTo) => {
    let post = await this.gopherCrawl();
    if (post && parentToRenderTo) {
      post.renderToScreen(parentToRenderTo);
    }
  }

}


//@s intern 2, reblogs and posts memes and shitposts, especially about baby animals
//occasionally reposts things about the eye killer or other conspiracies
//if they post "i think i'm close to figuring out where the eye killer will strike next" they never post again
class Wodin extends Character {


}




//post eyedol.  at run time flip a coin and decide which intern you get, 1 or 2 or 3
//ocassionally reblogs a meme and @s Wanda when he does. 
//sometimes reblogs something wanda posted and goes "dude, not cool" and other moirail tasks 
//sometimes does an Offical Post for Eyedol Games (he runs their social media account)
//occasionally says something that ALMOST could be taken for being in the loop which wanda always thinks is so hilarious
class Intern1 extends Character {
  //https://www.tumblr.com/phantomrose96/710087799520509952?source=branch

}

//interacts with Wodin, reblogging memes and @ing them constantly 
class Intern2 extends Character {


}

//dealing with the grief of losing Wodin. only one or two posts ever, both commentless pictures of ugly baby animals
class Intern3 extends Character {

}

//only reblogs, never posts, reblogs can include a gif or image with text in it, or a link that is the reply
//mix of violence and yugioh that she reblogs
class EyeKiller extends Character {

}

//reblogs eye killer posts and also yugioh posts
class Himbo extends Character {


}

//posted like twice, both attempts at engaging, then just bounced off eyedlr
class Hostage extends Character {

}


//flat out posts spoilers, fandom blog
class Italian extends Character {


}


/*
because she is wasted she gets into all sort of things i've hidden and shows everyone.
even the memes
ESPECIALLY The memes (hey there cool kid is this you)
*/
//posts about her skyrim mods
//and other video game stuff
//plus links to her favorite burger places on zampanini (with plenty of warnings to make sure you don't get a fee)
class FlowerChick extends Character {

  //http://knucklessux.com/PuzzleBox/Secrets/Wanda%20Resume.pdf
  //ats the eye killer about this https://www.tumblr.com/mumblesplash/714417492141998081/thank-u-everyone-who-tagged-this-kaz-brekker?source=share 

}

//chats with everyone she can and directs people to jackElope
//runs the porn bot net so other characters @ her to complain about their spam occasionally
class Alt extends Character {

}

//reblogs the things alt posts
//whenever it does reblog, only speaks in the tags
class Truth extends Character {
  /*
    posts screenshots of north/south/east secrets and how to get them 
  */

}

//looping closer. eyedol games closer would NEVER get on social media during company hours
//and all hours are company hours. 
//mostly plugs her various consulting services and gets in absolutely stupid petty feuds with witherby. 
//(her type of Lonely does NOT play nice with his.)
class Closer extends Character {


}


//almost never posts, when he does its either a reblog of content free content or a succinct original post that sheds so much light on things via cutting away the irrelevancies
class Neville extends Character {


}

//if you try to view her profile, its set to private
//she doesn't realize, if she puts tags in a reblog (she does ALL THE TIME) she can be seen
//she is VERY chatty in tags
//v much likes reblogging adhd and anxiety tips, both for herself and neville
class Devona extends Character {
  //https://www.tumblr.com/foone/713863322485850112?source=share


}


//ria is contstantly rambling, long winded original posts, long reblog comments, plus more things in the tags (though she TRIES to use the tags as actual search terms)
//rias Tumblr is full of peewee theories and her obvious parasocial crush
//(this predates the heartbreak in West)
class Ria extends Character {


}

//she reblogs with comments and tags of :3 and other emoji, and she reblogs  *their spelling corrections (its like work!)
class Camille extends Character {


}


//very much is in his Customer Service mode, he has thousands of asks and he tries to answer each of them to the best of his ability
//he logs into tumblr exactly once per day, at set office hours and otherwise treats it like a job
//people confess the most deranged shit into his ask box, and he forgives them
class Witherby extends Character {

}

//snail posts constantly, anything cute or friendshaped as well
class Yongki extends Character {


}

class LeeHunter extends Character{
  //https://www.tumblr.com/deadcellsman/713665846445228032?source=share

}


//reblogs memes and self care tips for yongki (always ats him)
//complains constantly the autism tips are useless because they are so broad because "everyone is like this"
//(oh captain, you'll never understand you're just as much on the spectrum as yongki)
class Captain extends Character {
  //https://www.tumblr.com/monitorkernelaccess/714419723994021889?source=share

  //https://www.tumblr.com/roach-works/714309361512611840/xteacupx-i-decided-to-create-something-that-i?source=share
}

//train facts, train memes, train pictures, all day every day. occasionally a rat pick for Jose living in her brain
//that video of the darkness taking the train
class Ambrose extends Character {


}


//reblogs EVEYR single post he sees with "get reblogged, idiot" in an attempt to go viral
//also reblogs popular posts with takes on top and eggs lee/hunter on 
class K extends Character {
  name = "K";//proud he got such an early name
  icon = 'http://farragofiction.com/TwoGayJokes/Stories/MurderGameIcons/k.png';

  //k wants to be seen on EVERY post in the entire system
  //and also if a subsequent reblog goes viral, he does too
  //theif of light
  getRebloggedIdiot = (target) => {
    //he likes seeing his own name.
    if (target.text.toLowerCase().includes("k")) {
      return this.reblogAPost(target, "get reblogged idiot", ["get reblogged", "idiot", "k", "k post", "check out my profile for more quality content"], ["k", "kek", "k spam", "spam", "meme", "lol", "why would you do this", "so annoying", "trigger warning: annoying"]);
    }

  }


  tick = async (parentToRenderTo) => {
    //you are GOING to see more of K than anyone else.
    for (let i = 0; i < 3; i++) {
      let target = this.findAPostEvenIfYouHaveInteractedWithIt();

      if (target) {
        //for now, this is all K can do. will flesh him out later.
        let post = this.getRebloggedIdiot(target);
        if (post && parentToRenderTo) {
          post.renderToScreen(parentToRenderTo);
        }
      }
    }
  }
}


//sharing an account, vague post about each other and various other people
//K reblogs them constantly saying "did you know i heard so and so talking shit about you?"
//K and lee hunter are such good friends because they have the exact same kind of thirst for drama
class LeeHunter extends Character {


}


//do you love the color of the sky
//history posts, insignifance of man posts
//she has a lot of accounts and keeps forgetting which one is hers (so alt usernames?)
class River extends Character {


}

//live blogs her day (down to what time she ate and how much it cost and what she got )
//and self care tips
class DocSlaughter extends Character {


}


//ALSO lives blog his day and its always just a bit more normal and a bit more impressive than docs posts
//very popular, ocassionaly advertises his work with the PTA and his bid to run into politics
//reblogs "everyone has a doppelganger" and secret twin type posts all the time
class TheNeighbor extends Character {

}

//blogs child care tips, fighting tips and ALWAYS IS IN ALL CAPS
//warior male posts, nidhogg posting
//occasionally reblogs things like ominous picutres of something unsettling barely out of focus and ats TheNeighbor
//vague post complaints about "someone" being unmasked at midnight and drinking milk directly out of the cartoon
class Tyrfing extends Character {


}

//fucked up glitches happen to their  posts occasionally,
// usually will reblog them normally after and say things like 'sorry about that" , occasionally posts about meals in unsettling ways
// lots of call out and cancel posts on people they don't like (usually people who insulted parker)
//occasionally @s parker pictures of hatsune miku and hydration memes
class Vik extends Character {


}


//reblogs hatsune miku
//reblogs objects with faces (alt hates this)
//reblogs dirt (that fucking cow video i love so much. Claire! It's DIRT!)
//posts and reblogs pictures of holes
//deranged anime takes (people reblog his deranged takes and say mean things, then vik attacks them)
class Parker extends Character {


}


//mostly just reblogs the things witherby posts, or popular posts teaching people how to "stay safe"
//occasionally the radio blogs instead
//gun safety tips
//will NEVER reblog Vik (she can sense the danger in them)
class Hoon extends Character {

}

//random ass philosophy posts in between posts asking how tumblr works and if he's been an asshole or not
//never reblogs. likes everything.
class NAM extends Character {

  /*"To the NORTH is ThisIsNotAGame. In it's endless hallways you see countless variations on players and screens and the wistful Might-Have-Beens of a game you wish you could have played. 
To the SOUTH is JustTruth.  In it's endless corridors lurk the bitter ThisIsNotASpiral that has been watching and trying in vain to keep from tormenting you. Only truths are here, no more masks, no more pretence. 
To the EAST is ThisIsAGame. It is a place of lies and madness. It is here. You have brought us here and it is your fault. This was never a game. This STILL isn't a game, no matter how much you insist otherwise. How long will you trap us in these endless corridors?"
*/
}


//occasionally jumps in with Vik/Parker on putting "the bad guys" on blast, other times tries to defend them
//reblogs legal advice and adds his own take as well
class Ronin extends Character {

}

//reblogs SWEET GAMING TIPS
//likes just about everything
//reblogs anything his kids say, with tags about how proud he is
//reblogs everything camille does with an awkward attempt to call her out on her badness
//(his spades crush is so obvious)
class Peewee extends Character {


}

//reblogs anything peewee says without comment but the tag is just a <3
class RobertBobert extends Character {


}

//reblogs anything peewee says without comment but the tag is just a <3<
//reblogs anything camille says with a :( (jealous that peewee likes her spades)
class Eggman extends Character {

}

//gets upset any time peewee reblogs his stuff
//reblogs shitsposts mostly
class Rebel extends Character {

}

//ecoterrorism hours baby
//rarely blogs anything because their generator only runs an hour a day
class Melon extends Character {

}

//reblogs standard memes and self care bits and bobs
//occasionally reblogs rebels bristling at Peewee to try to defuse the situation
class Rod extends Character {

}

//don't actually create JR, isntead store important things here
class JR extends Character {
  //https://www.tumblr.com/hazyscrounger/714681029142691840/i-want-to-like-zampanio-so-bad-i-feel-like-an?source=share
  //https://www.tumblr.com/jadedresearcher/714684745826566144/wait-wait-wait-sorry-to-send-a-second-ask-but?source=share
}

//TODO: make sure that images inside posts are centered all nice
class KarmicRetribution extends Character {
  posts = [
    `<img src='http://eyedolgames.com/Eyedlr/images/Secrets/Despap-1-troll.png'>
    <p>
    "You must choose."
The great wyrm Nidhogg looms over the slight young troll. Its dark scales gleam even in the dim light. Despap's eyes are green-rimmed and wide; their face has a look of crazed joy.

"No."
They float up to Nidhogg's eye level with barely a flick of their wings. Despap reaches up and pulls the crown of roses from their hair, then places it atop the wyrm's great head. 
"Instead I give the Choice to you." 
They lean forward to press a kiss to Nidhogg's forehead, below the garland. Vines or roots can be seen beginning to grow down, the tendrils latching into the serpent's flesh. As Despap pulls back, a rose buds, then blooms from where their lips were. The flower opens wide, and an eyeball can be seen in its center, rolling wildly.
"*Open your eyes,*" murmurs Despap.

Everything begins to shake and break up as the great wyrm thrashes and screams in the throes of its transformation.
    </p>
      `,
  ]
}