const quotes=[
    {
        qt:"The way to get started is to quit talking and begin doing.",
        src:"Walt Disney"},
    {
        qt:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking.",
        src:"Steve Jobs"},
    {
        qt:"If life were predictable it would cease to be life, and be without flavor.",
        src:"Eleanor Roosevelt"},
    {
        qt:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        src:"Oprah Winfrey"},
    {
        qt:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        src:"James Cameron"},
    {
        qt:"Life is what happens when you're busy making other plans.",
        src:"John Lennon"},
    {
        qt:"Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        src:"Mother Teresa"},
    {
        qt:"When you reach the end of your rope, tie a knot in it and hang on.",
        src:"Franklin D. Roosevelt"},
    {
        qt:"Always remember that you are absolutely unique. Just like everyone else.",
        src:"Margaret Mead"},
    {
        qt:"Don't judge each day by the harvest you reap but by the seeds that you plant.",
        src:"Robert Louis Stevenson"},
    {
        qt:"The future belongs to those who believe in the beauty of their dreams.",
        src:"Eleanor Roosevelt"},
    {
        qt:"Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        src:"Benjamin Franklin"},
    {
        qt:"The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
        src:"Helen Keller"}, 
    {
        qt:"It is during our darkest moments that we must focus to see the light.",
        src:"Aristotle"}, 
    {
        qt:"Whoever is happy will make others happy too.",
        src:"Anne Frank"}, 
    {
        qt:"Do not go where the path may lead, go instead where there is no path and leave a trail.",
        src:"Ralph Waldo Emerson"}
]
function generaterandomquote() {
    var randomnumber=Math.floor(Math.random() * (quotes.length));
    var randomquote=quotes[randomnumber];
    document.getElementById("quote_container").innerHTML=randomquote.qt;
    document.getElementById("source_container").innerHTML=randomquote.src;
}
