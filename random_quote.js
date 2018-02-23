/********** Quotes-collection **********/
const quotes = ["It's generally a bad idea to write your own quotes.<br>-The Quote Machine",
				"It’s curious that we spend more time congratulating people who have succeeded than encouraging people who have not.<br>-Neil deGrasse Tyson",
				"To understand someone is to repeat back to them what they said better than they originally described it.<br>-Dale Carnegie, Author and Lecturer",
				"Life is about making an impact, not making an income.<br>     -Kevin Kruse",
				"Life is what happens to you while you're busy making other plans.<br>-John Lennon",
				"The most difficult thing is the decision to act, the rest is merely tenacity.<br>-Amelia Earhart",
				"The mind is everything. What you think you become.<br>-Buddha",
				"This is your life and it's ending one minute at a time.<br>-Fight Club",
				"The best time to plant a tree was 20 years ago. The second best time is now.<br>-Chinese Proverb",
				"Your time is limited, so don't waste it living someone else's life.<br>-Steve Jobs",
				"Whether you think you can or you think you can't, you're right.<br>-Henry Ford",
				"People often say that motivation doesn't last. Well, neither does bathing. That's why we recommend it daily.<br>-Zig Ziglar",
				"Every child is an artist. The problem is how to remain an artist once he grows up.<br>-Pablo Picasso",
				"The good thing about science is that it’s true whether or not you believe in it.<br>-Neil deGrasse Tyson",
				"The things you own end up owning you.<br>-Tyler Durden, Fight Club",
				"You cannot shake hands with a clenched fist.<bh>-Indira Gandhi",
				"Let us sacrifice our today so that our children can have a better tomorrow.<br>-A. P. J. Abdul Kalam",
				"All that we see or seem is but a dream within a dream.<br>-Edgar Allan Poe",
				"There is only one corner of the universe you can be certain of improving, and that's your own self.<br>-Aldous Huxley",
				"I have not failed. I've just found 10,000 ways that won't work.<br>-Thomas A. Edison",
				"Wise men speak because they have something to say, Fools because they have to say something.<br>-Plato",
				"Today you are you! That is truer than true! There is no one alive who is you-er than you!<br>-Dr. Seuss",
				"The only thing necessary for the triumph of evil is for good men to do nothing.<br>-Edmund Burke",
				"Science is a way of thinking much more than it is a body of knowledge.<br>-Carl Sagan",
				"Wrong does not cease to be wrong because the majority share in it.<br>-Leo Tolstoy",
				"But the thought of being a lunatic did not greatly trouble him, the horror was that he might also be wrong.<br>-George Orwell, 1984"];

/********** Initialization **********/
let randomNumber;
const quoteButton = document.getElementById("quote-button");
const quoteField = document.getElementById("quote-field");

/********** Prepare first quote **********/
let tweet = quotes[0];
quoteField.innerHTML = tweet;
let tweetready = tweet.replace("<br>", " ");
$("#twitter-button").attr("href", "http://twitter.com/intent/tweet?text=" + tweetready + "&hashtags=quotes");

/********** Quote-button event **********/
quoteButton.addEventListener('click', () => {
	randomNumber = Math.floor(Math.random() * quotes.length);
	tweet = quotes[randomNumber];
	quoteField.innerHTML = tweet;
	tweetready = tweet.replace("<br>", " "); //Remove line-break in quote for Twitter use
	$("#twitter-button").attr("href", "http://twitter.com/intent/tweet?text=" + tweetready + "&hashtags=quotes"); //Sends the correct quote to the Twitter-button.
});

/********** Places Twitter-link in the footer **********/
$("#social1").addClass("fa fa-twitter");
$("#social1").text(" Twitter");
$("#social1").css("text-decoration", "none");
$("#social1").attr("href", "https://twitter.com/larsvidar");

//$.getScript('http://platform.twitter.com/widgets.js'); //Loads the Twitter-script from Twitter. Not needed.