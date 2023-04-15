/*
  NOTE: I can't feasibly write ALL of this on my own. 

  if i take popular tumblr posts, in some way link back to the original (wihout hiding. maybe a read more tag?)
*/


/*
   a post is a doubly linked list chain of reblogs

   TODO: if you have a parent, instead of keeping track of your own notes, you use the parents, recursively
*/
class Post {
  text; //can be html
  tags;
  notesEle;
  owner; //a character
  //next three are internal because they only work if you have no parent, otherwise its the root.
  internal_likes = 0; //array of profiles that liked this
  internal_numreblogs = 0;//instead of recursing across everything, just count
  internal_replies = []; //array of text and owner pairs cluttering up the notes
  parent; //a post
  timestamp;
  children = []; //posts
  //for the porn bots, how should they react when reblogging
  suggested_reblogs = [];
  suggested_tags = [];
  element;

  constructor(owner, text, parent, tags, suggested_reblogs, suggested_tags) {
    this.owner = owner;
    this.text = text;
    this.parent = parent;
    //this isn't expected to change.
    if (this.parent) {
      this.root = this.getParent();
      this.root.internal_numreblogs++;
    }
    this.tags = tags;
    this.timestamp = Date.now();
    this.suggested_reblogs = suggested_reblogs;
    this.suggested_tags = suggested_tags;
    this.createElement();
  }

  //used for queing likes, rebogs, replies, etc. 
  //tumblr seems to store these in the root blindly
  getParent = () => {
    if (!this.parent) {
      return this;
    } else {
      return this.parent.getParent();
    }
  }

  getLikes = () => {
    if (!this.parent) {
      return this.internal_likes;
    } else {
      return this.root.internal_likes;
    }
  }

  syncNotes = ()=>{
    //won't get everything but at least goes all the way up the chain
    if(this.parent){
      this.parent.syncNotes();
    }
    this.notesEle.innerText = this.getLikes() + this.getNumberReplies() + this.getNumberReblogs() + " notes";
  }

  likePost = () => {
    if (!this.parent) {
      this.internal_likes +=1;
    } else {
      return this.root.internal_likes+=1;
    }
    this.syncNotes();
    
  }

  unlikePost = () => {
    if (!this.parent) {
      this.internal_likes += -1;
    } else {
      return this.root.internal_likes += -1;
    }
    this.syncNotes();

  }

  getNumberReblogs = () => {
    if (!this.parent) {
      return this.internal_numreblogs;
    } else {
      return this.root.internal_numreblogs;
    }
  }

  getNumberReplies = () => {
    if (!this.parent) {
      return this.internal_replies.length;
    } else {
      return this.root.internal_replies.length;
    }
  }

  getReplies = () => {
    if (!this.parent) {
      return this.internal_replies;
    } else {
      return this.root.internal_replies;
    }
  }



  //adds own text to array, then parents, then that parents parents till it runs out of parents
  //then reverses the order so root goes first
  //needs to return owner, text pairs. (so i can grab name and etc)
  grabReblogChain = (so_far = []) => {
    so_far.push({ owner: this.owner, text: this.text });
    if (this.parent) {
      return this.parent.grabReblogChain(so_far);
    } else {
      return so_far;
    }
  }

  addChild = (child)=>{
    this.children.push(child);
    this.syncNotes();

  }





  renderToScreen = (parent) => {
    parent.append(this.element);
  }

  //looking at this, you really can get the feeling for why react and other frameworks were invented
  //this is *miserable* to read
  //future me is gonna HATE this.
  //oh well future me
  //you can refactor it to make it more readable if you like
  //but im basically half dead from moving
  //and am allowed to be lazy
  createElement = () => {
    const post = document.createElement("div");
    post.className = "post";
    this.element = post;
    const postIcon = createElementWithClassAndParent("div", post, "post-icon");
    const postIconImg = createElementWithClassAndParent("img", postIcon);
    postIconImg.src = this.owner.icon;


    const container = createElementWithClassAndParent("div", post, "post-container");
    const header = createElementWithClassAndParent("div", container, "post-header");
    const myName = createElementWithClassAndParent("span", header);
    myName.innerText = this.owner.name;
    if (this.parent) {
      const reblogArrow = createElementWithClassAndParent("span", header, "reblog-arrow");
      reblogArrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="12px" viewBox="0 0 24 24" width="12px" fill="#000000"><g><rect fill="none" height="24" width="24" x="0"/></g><g><g><polygon points="18,12 22,8 18,4 18,7 3,7 3,9 18,9"/><polygon points="6,12 2,16 6,20 6,17 21,17 21,15 6,15"/></g></g></svg>`;
      const theirName = createElementWithClassAndParent("span", header);
      theirName.innerText = this.parent.owner.name;
    }

    const body = createElementWithClassAndParent("div", container, "post-body");

    const bodyContent = createElementWithClassAndParent("div", body);
    if (this.parent) {
      let postData = this.grabReblogChain([]);
      postData.reverse();
      for (let p of postData) {
        const reblog_ele = createElementWithClassAndParent("div", container, "reblog-post");
        const reblog_header = createElementWithClassAndParent("div", reblog_ele, "reblog-header");

        const reblogIcon = createElementWithClassAndParent("img", reblog_header, "reblog-icon");
        const reblog_name = createElementWithClassAndParent("div", reblog_header, "reblog-name");
        reblog_name.innerText = p.owner.name;
        reblogIcon.src = p.owner.icon;
        const reblog_text = createElementWithClassAndParent("div", reblog_ele, "reblog-text");
        reblog_text.innerHTML = p.text;
      }
    } else {
      bodyContent.innerHTML = this.text;
    }

    const tags = createElementWithClassAndParent("div", container, "post-tags");
    for (let tag of this.tags) {
      const ele = createElementWithClassAndParent("span", tags, "tag");
      ele.innerText = "#" + tag;
    }

    const footer = createElementWithClassAndParent("div", container, "post-footer");
    this.notesEle = createElementWithClassAndParent("div", footer, "notes-count");
    this.notesEle.innerText = this.getLikes() + this.getNumberReplies() + this.getNumberReblogs() + " notes";

    const notesIcons = createElementWithClassAndParent("div", footer, "notes-icons");

    const shareIcon = createElementWithClassAndParent("div", notesIcons, "broken");
    shareIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ff0000">
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
  </svg>`;

    const replyIcon = createElementWithClassAndParent("div", notesIcons, "");
    replyIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ff0000">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
  </svg>`;
    const reblogIcon = createElementWithClassAndParent("div", notesIcons, "");
    reblogIcon.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px"
    viewBox="0 0 24 24" width="24px" fill="#ff0000">
    <g>
      <rect fill="none" height="24" width="24" x="0" />
    </g>
    <g>
      <g>
        <polygon points="18,12 22,8 18,4 18,7 3,7 3,9 18,9" />
        <polygon points="6,12 2,16 6,20 6,17 21,17 21,15 6,15" />
      </g>
    </g>
  </svg>`;
    //https://fonts.google.com/icons?selected=Material+Icons:create:
    const likeIcon = createElementWithClassAndParent("div", notesIcons, "unliked");
    likeIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
  </svg>`;

    likeIcon.onclick = () => {
      if (observer.liked_posts.indexOf(this) === -1) {
        likeIcon.classList = ["liked"];
        observer.liked_posts.push(this);
        this.likePost();
        likeIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
      } else {
        likeIcon.classList = ["unliked"];
        removeItemOnce(observer.liked_posts, this);
        this.unlikePost();
        likeIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
      </svg>`;
      }
    }





  }
}

class Character {
  name;
  liked_posts = []; //can view a profiles likes
  icon; //could be an absolute or relative url
  pinned_post;//each char has up to one of these
  posts = [];

  //responds to keyphrases
  readied_reblogs;

  tick = async (parentToRenderTo) => {
    //some make posts, some like or reblog other posts, some reply in posts, some send asks, some do nothing
  }


  createNewPost(text, tags, suggested_reblogs, suggested_tags) {
    const post = new Post(this, text, null, tags, suggested_reblogs, suggested_tags);
    this.posts.push(post);
    return post;
  }

  reblogAPost(parent, text, tags, suggested_reblogs, suggested_tags) {
    //  constructor(owner, text, parent, tags, suggested_reblogs, suggested_tags) {
    const post = new Post(this, text, parent, tags, suggested_reblogs, suggested_tags);
    this.posts.push(post);
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

//want at least three of these for every real character. 
//they use the obsession engine to post things, but also 
class PornBot extends Character {
  // 20h:14m:36s
  //5d:23h:17:04s
  //4d:15h:21m:33s
  //http://knucklessux.com/PuzzleBox/Secrets/Watcher/shambling_yes_no_presentation_by_the_watcher_of_threads.ppsx 

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
class Wanda extends Character {




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
      return this.createNewPost(content, t, ["goodbye world"], ["goodbye", "world"]);
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
        console.error(e);
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
          console.error(e);

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


//reblogs memes and self care tips for yongki (always ats him)
//complains constantly the autism tips are useless because they are so broad because "everyone is like this"
//(oh captain, you'll never understand you're just as much on the spectrum as yongki)
class Captain extends Character {
  //https://www.tumblr.com/roach-works/714309361512611840/xteacupx-i-decided-to-create-something-that-i?source=share
}

//train facts, train memes, train pictures, all day every day. occasionally a rat pick for Jose living in her brain
//that video of the darkness taking the train
class Ambrose extends Character {


}


//reblogs EVEYR single post he sees with "get reblogged, idiot" in an attempt to go viral
//also reblogs popular posts with takes on top and eggs lee/hunter on 
class K extends Character {

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