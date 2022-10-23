const quotesList = [
  {
    author: "Ash",
    quote: `There's no sense in going out of your way to get somebody to like you.`,
  },
  {
    author: "Meowth",
    quote:
      "We do have a lot in common. The same earth, the same air, the same sky. Maybe if we started looking at what's the same, instead of looking at what's different, well, who knows?",
  },
  {
    author: "N",
    quote: "Make your wonderful dream a reality, and it will become your truth",
  },
  {
    author: "Giovanni",
    quote:
      "A wildfire destroys everything in its path. It will be the same with your powers unless you learn to control them.",
  },
  {
    author: "NPC",
    quote:
      "When you have lemons, you make lemonade; and when you have rice, you make rice balls.",
  },
  {
    author: "Ash",
    quote: "That's okay, Brock, you'll find lots of other girls to reject you!",
  },
  {
    author: "Marshall",
    quote:
      "Even if you lose in battle, if you surpass what you’ve done before, you have bested yourself.",
  }
];

export default function addQuote() {
  const quotesArray = quotesList;
  const $quotesText = document.querySelector("#pokemon-quotes--text");
  const $quotesAuthor = document.querySelector("#pokemon-quotes--text-author");
  const randomNumber = Math.floor(Math.random() * 10);
  $quotesAuthor.textContent = quotesArray[randomNumber].author;
  $quotesText.textContent = quotesArray[randomNumber].quote;
}
