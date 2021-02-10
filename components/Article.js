// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: 'Component Basics in Web Development',
    date: 'Feb 10th, 2021',
    firstParagraph: `Proin cursus, ex et cursus rhoncus, magna purus convallis erat, a varius massa nulla sit amet lorem. Nulla facilisi. 
          Quisque quis libero vel enim tempus sagittis nec et felis. Integer eget vulputate leo. Nulla risus nunc, molestie et rutrum sit amet, 
          eleifend ac mauris. Phasellus lectus neque, aliquet vel feugiat quis, vestibulum vel mi. Pellentesque eu justo accumsan, consequat neque 
          quis, consectetur est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet imperdiet eros.`,
    
    secondParagraph: `Cras quis vestibulum nisl, vehicula euismod tellus. Nunc purus mauris, rhoncus a mi eu, suscipit dapibus ligula. 
          Nunc eu posuere ex, viverra maximus velit. Nam ac ullamcorper eros. Quisque enim enim, mollis vel libero nec, hendrerit molestie mi. 
          Phasellus fringilla nibh quis ipsum mattis, ut fringilla leo mollis. Proin gravida, ipsum non vehicula pharetra, eros dolor malesuada 
          massa, quis placerat odio risus in lorem. Aenean quis enim finibus, dignissim velit in, tincidunt elit. Maecenas massa erat, viverra 
          eget diam a, tempor tempus purus. Fusce fringilla pretium condimentum. In ut sagittis libero. Curabitur eu turpis urna. Vestibulum sed 
          nisl vehicula, iaculis tellus vel, vehicula est.`,
    
    thirdParagraph: `Quisque porttitor ullamcorper ante. Ut dictum vestibulum mauris, ornare condimentum lectus auctor sed. Quisque sit amet 
          molestie metus. Etiam vitae condimentum dui, a accumsan ligula. In ultrices in ante ac condimentum. Donec hendrerit sem ac nunc 
          consequat, non efficitur nunc commodo. Cras nec ipsum scelerisque mi eleifend pretium vel at enim.`
  },
  {
    title: 'Useful Applications for JS Event Handlers',
    date: 'Feb 10th, 2021',
    firstParagraph: `Sed porta diam justo, eu tincidunt orci rhoncus at. Donec ut augue pretium, varius est vitae, iaculis magna. Etiam ac enim at 
          nisi vehicula suscipit ut quis magna. Morbi quis luctus erat. Etiam mollis massa nunc, ut mollis dolor mollis ut. Donec pulvinar tristique 
          nibh, quis accumsan ante varius nec. Fusce fermentum finibus hendrerit. Integer mi ante, sagittis a purus a, interdum tempor velit.`,
    
    secondParagraph: `Phasellus malesuada quam et elit tristique faucibus. Aenean at enim imperdiet, convallis urna vel, maximus elit. Quisque tincidunt, 
          urna quis porta rutrum, ipsum lectus elementum diam, eu suscipit nisl velit eget erat. Cras sed luctus tellus. Curabitur hendrerit enim sed nisi 
          rutrum, sit amet placerat orci sagittis. Ut ullamcorper pellentesque nibh non tempor. Duis viverra magna et tempus commodo. Phasellus magna justo, 
          varius ac velit a, malesuada tincidunt ante. Aliquam erat volutpat. In pharetra libero nisl, nec cursus eros finibus eu.`,
    
    thirdParagraph: `Vivamus ornare leo eu lorem bibendum luctus. Nulla sit amet lorem sem. Suspendisse dignissim pharetra nibh, eu pellentesque mi 
          eleifend vitae. Vestibulum eu est arcu. Curabitur imperdiet, leo eget lacinia maximus, nunc leo eleifend leo, eu volutpat ligula urna sed nunc. 
          Etiam pretium porttitor ex ac luctus. Donec maximus porttitor sapien a finibus. Phasellus ultricies accumsan nulla et pellentesque.`
  },
  {
    title: 'Understanding the DOM and Event Propagation',
    date: 'Feb 10th, 2021',
    firstParagraph: `Nam sit amet metus tempus, porta metus vehicula, commodo dui. Suspendisse potenti. Phasellus vestibulum libero sed eros eleifend, 
          in semper quam euismod. Sed tempus, mauris vitae gravida dictum, leo tellus iaculis mi, nec pharetra turpis arcu sit amet magna. Morbi nec 
          hendrerit urna. Praesent semper tortor erat, id ultricies libero congue in. Curabitur dictum consequat dictum. Sed feugiat enim nisl, quis 
          imperdiet enim pellentesque at. Maecenas semper lorem elit, nec suscipit tellus mattis at.`,
    
    secondParagraph: `Ut dictum, nisl ut pulvinar blandit, massa ante lobortis velit, vitae euismod dolor lectus non enim. Orci varius natoque penatibus 
          et magnis dis parturient montes, nascetur ridiculus mus. Sed a risus augue. Praesent id urna vel nunc tincidunt interdum. Vivamus commodo, 
          lacus id fermentum rhoncus, odio quam tempus tellus, id hendrerit enim enim eget nisi. Cras vitae libero in ligula ornare ullamcorper quis vitae 
          velit. Sed interdum libero nec nulla suscipit, id vulputate metus maximus. Sed molestie turpis quis lacus molestie bibendum.`,
    
    thirdParagraph: `Integer rhoncus eget ex vitae iaculis. Nam viverra hendrerit aliquet. Nunc lacinia sapien in mi semper volutpat et id dui. 
          Sed turpis erat, elementum fermentum tempor nec, feugiat a urna. Cras sodales condimentum tristique. Etiam interdum eros ut erat 
          ullamcorper placerat. Sed mattis justo ac nibh faucibus, eu maximus ligula molestie. Donec id urna eu est cursus semper sit amet a odio.`
  }
];

/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>

  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.

  Step 3: Don't forget to return something from your function!

  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).

  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/

function articleMaker(articleData) {
  let newArticle = document.createElement('div');
  newArticle.className = 'article';

  let heading = document.createElement('h2');
  heading.textContent = articleData['title'];
  newArticle.appendChild(heading);

  let date = document.createElement('p');
  date.className = 'date';
  date.textContent = articleData['date'];
  newArticle.appendChild(date);

  let paragraph = document.createElement('p');
  paragraph.textContent = articleData['firstParagraph'];
  newArticle.appendChild(paragraph);
  paragraph = document.createElement('p');
  paragraph.textContent = articleData['secondParagraph'];
  newArticle.appendChild(paragraph);
  paragraph = document.createElement('p');
  paragraph.textContent = articleData['thirdParagraph'];
  newArticle.appendChild(paragraph);

  let expandButton = document.createElement('span');
  expandButton.className = 'expandButton';
  expandButton.textContent = '+';
  newArticle.appendChild(expandButton);

  expandButton.addEventListener('click', e => {
    newArticle.classList.toggle('article-open');
  })

  return newArticle;
}

let divArticles = document.querySelector('div.articles');

data.forEach(item => {
  let newArticle = articleMaker(item);
  divArticles.appendChild(newArticle);
})