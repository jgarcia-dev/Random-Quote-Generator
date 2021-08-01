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
    year: 2001
  },
  {
    quote: "Enthusiasm makes up for a host of deficiencies.",
    source: "Barack Obama",
    citation: "A Promised Land",
    year: 2020
  },
  {
    quote: "Perseverance is not a long race; it is many short races one after the other.",
    source: "Walter Elliot",
    citation: "",
    year: null
  },
  {
    quote: "No one can make you feel inferior without your consent.",
    source: "Eleanor Roosevelt",
    citation: "",
    year: null
  },
  {
    quote: "Courage is resistance to fear, mastery of fear, not absence of fear.",
    source: "Mark Twain",
    citation: "",
    year: null
  },
  {
    quote: "Some people can read War and Peace and come away thinking it's a simple adventure story. Others can read the ingredients on a chewing gum wrapper and unlock the secrets of the universe.",
    source: "Lex Luthor",
    citation: "Superman",
    year: 1987
  }
]

console.log(quotes);

/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);