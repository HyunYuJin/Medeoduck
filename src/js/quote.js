const quotes = [
    '👩🏻‍💻 Working: Beep boop boop',
    '🥧 Baking: My hobby',
    '📖 Reading: Understanding the network',
    '🎵 Listening: Hip Hop',
    '📺 Watching: Black Panther',
    '🧳 Healing: To go on a trip'
];

const quoteSpan = document.getElementById("quote");
if (quoteSpan) {
    quoteSpan.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
};