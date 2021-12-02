const quotes = [
	{
		quote: 'Be yourself; everyone else is already taken.',
		author: 'Oscar Wilde'
	},
	{
		quote: 'So many books, so little time.',
		author: 'Frank Zappa'
	},
	{
		quote: 'A room without books is like a body without a soul.',
		author: 'Marcus Tullius Cicero'
	},
	{
		quote: 'You only live once, but if you do it right, once is enough.',
		author: 'Mae West'
	},
	{
		quote: "If you tell the truth, you don't have to remember anything",
		author: 'Mark Twain'
	},
	{
		quote: 'Love all, trust a few, do wrong to none.',
		author: 'William Shakespeare'
	},
	{
		quote: 'For every minute you are angry you lose sixty seconds of happiness.',
		author: 'Ralph Waldo Emerson'
	},
	{
		quote: "If you can't explain it to a six year old, you don't understand it yourself.",
		author: 'Albert Einstein'
	},
	{
		quote: "Life isn't about finding yourself. Life is about creating yourself.",
		author: 'George Bernard Shaw'
	},
	{
		quote: 'The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.',
		author: 'Bob Marley'
	}
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
