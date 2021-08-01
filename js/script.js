/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

const quotes = [
  {
    quote: "To choose doubt as a philosophy of life is akin to choosing immobility as a means of transportation.",
    source: "Yann Martel",
    citation: "Life of Pi",
    year: 2001,
    tags: ["Novel", "Adventure fiction", "Inspiration"]
  },
  {
    quote: "Enthusiasm makes up for a host of deficiencies.",
    source: "Barack Obama",
    citation: "A Promised Land",
    year: 2020,
    tags: ["Politics", "Inspiration"]
  },
  {
    quote: "Perseverance is not a long race; it is many short races one after the other.",
    source: "Walter Elliot",
    citation: "",
    year: null,
    tags: []
  },
  {
    quote: "No one can make you feel inferior without your consent.",
    source: "Eleanor Roosevelt",
    citation: "",
    year: null,
    tags: ["Politics", "Inspiration"]
  },
  {
    quote: "Courage is resistance to fear, mastery of fear, not absence of fear.",
    source: "Mark Twain",
    citation: "",
    year: null,
    tags: ["Inspiration"]
  },
  {
    quote: "Some people can read War and Peace and come away thinking it's a simple adventure story. Others can read the ingredients on a chewing gum wrapper and unlock the secrets of the universe.",
    source: "Lex Luthor",
    citation: "Superman",
    year: 1987,
    tags: ["Movies", "Fiction", "Villains"]
  }
]


/***
 * returns a random quote object from quotes array based on a random number
***/
function getRandomQuote() {
  const max = quotes.length;
  const randNumber = Math.floor(Math.random() * max);
  return quotes[randNumber];
}


/***
 * creates quote HTML and displays it on page
***/
function printQuote() {
  
  const randomQuote = getRandomQuote();
  const numOfTags = randomQuote.tags.length;

  let HTML = `<p class="quote"> ${randomQuote.quote} </p>
  <p class="source"> ${randomQuote.source} `;

  if (randomQuote.citation) {
    HTML += `<span class="citation"> ${randomQuote.citation} </span>`;
  }
  if (randomQuote.year) {
    HTML += `<span class="year"> ${randomQuote.year} </span>`;
  }
  HTML += "</p>";

  if (numOfTags !== 0) {
    HTML += `<p class="tags">`
    for (let i = 0; i < numOfTags; i++) {
      HTML += `<span class="tag"> ${randomQuote.tags[i]} </span>`;
    }
    HTML += "</p>"
  }

  document.getElementById('quote-box').innerHTML = HTML;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);