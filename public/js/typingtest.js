const wordList = [
    "the", "name", "of", "very", "to", "through", "and", "just", "a",
    "form", "in", "much", "is", "great", "it", "think", "you", "say",
    "that", "help", "he", "low", "was", "line", "for", "before", "on",
    "turn", "are", "cause", "with", "same", "as", "mean", "I", "differ",
    "his", "move", "they", "right", "be", "boy", "at", "old", "one",
    "too", "have", "does", "this", "tell", "from", "sentence", "or",
    "set", "had", "three", "by", "want", "hot", "air", "but", "well",
    "some", "also", "what", "play", "there", "small", "we", "end", "can",
    "put", "out", "home", "other", "read", "were", "hand", "all", "port",
    "your", "large", "when", "spell", "up", "add", "use", "even", "word",
    "land", "how", "here", "said", "must", "an", "big", "each", "high",
    "she", "such", "which", "follow", "do", "act", "their", "why", "time",
    "ask", "if", "men", "will", "change", "way", "went", "about", "light",
    "many", "kind", "then", "off", "them", "need", "would", "house",
    "write", "picture", "like", "try", "so", "us", "these", "again",
    "her", "animal", "long", "point", "make", "mother", "thing", "world",
    "see", "near", "him", "build", "two", "self", "has", "earth", "look",
    "father", "more", "head", "day", "stand", "could", "own", "go",
    "page", "come", "should", "did", "country", "my", "found", "sound",
    "answer", "no", "school", "most", "grow", "number", "study", "who",
    "still", "over", "learn", "know", "plant", "water", "cover", "than",
    "food", "call", "sun", "first", "four", "people", "thought", "may",
    "let", "down", "keep", "side", "eye", "been", "never", "now", "last",
    "find", "door", "any", "between", "new", "city", "work", "tree",
    "part", "cross", "take", "since", "get", "hard", "place", "start",
    "made", "might", "live", "story", "where", "saw", "after", "far",
    "back", "sea", "little", "draw", "only", "left", "round", "late",
    "man", "run", "year", "don't", "came", "while", "show", "press",
    "every", "close", "good", "night", "me", "real", "give", "life",
    "our", "few", "under", "stop", "open", "ten", "seem", "simple",
    "together", "several", "next", "vowel", "white", "toward", "children",
    "war", "begin", "lay", "got", "against", "walk", "pattern", "example",
    "slow", "ease", "center", "paper", "love", "often", "person",
    "always", "money", "music", "serve", "those", "appear", "both",
    "road", "mark", "map", "book", "science", "letter", "rule", "until",
    "govern", "mile", "pull", "river", "cold", "car", "notice", "feet",
    "voice", "care", "fall", "second", "power", "group", "town", "carry",
    "fine", "took", "certain", "rain", "fly", "eat", "unit", "room",
    "lead", "friend", "cry", "began", "dark", "idea", "machine", "fish",
    "note", "mountain", "wait", "north", "plan", "once", "figure", "base",
    "star", "hear", "box", "horse", "noun", "cut", "field", "sure",
    "rest", "watch", "correct", "color", "able", "face", "pound", "wood",
    "done", "main", "beauty", "enough", "drive", "plain", "stood", "girl",
    "contain", "usual", "front", "young", "teach", "ready", "week",
    "above", "final", "ever", "gave", "red", "green", "list", "oh",
    "though", "quick", "feel", "develop", "talk", "sleep", "bird", "warm",
    "soon", "free", "body", "minute", "dog", "strong", "family",
    "special", "direct", "mind", "pose", "behind", "leave", "clear",
    "song", "tail", "measure", "produce", "state", "fact", "product",
    "street", "black", "inch", "short", "lot", "numeral", "nothing",
    "class", "course", "wind", "stay", "question", "wheel", "happen",
    "full", "complete", "force", "ship", "blue", "area", "object", "half",
    "decide", "rock", "surface", "order", "deep", "fire", "moon", "south",
    "island", "problem", "foot", "piece", "yet", "told", "busy", "knew",
    "test", "pass", "record", "farm", "boat", "top", "common", "whole",
    "gold", "king", "possible", "size", "plane", "heard", "age", "best",
    "dry", "hour", "wonder", "better", "laugh", "true", "thousand",
    "during", "ago", "hundred", "ran", "am", "check", "remember", "game",
    "step", "shape", "early", "yes", "hold", "hot", "west", "miss",
    "ground", "brought", "interest", "heat", "reach", "snow", "fast",
    "bed", "five", "bring", "sing", "sit", "listen", "perhaps", "six",
    "fill", "table", "east", "travel", "weight", "less", "language",
    "morning", "among"
];

//DATA
let wordData = {
    seconds: 60,
    correct: 0,
    incorrect: 0,
    total: 0,
    typed: 0
};

//WORD COLORS
let colorCurrentWord =" #dddddd";
let colorCorrectWord = "#93C572";
let colorIncorrectWord = "#e50000";

// Knuth-Fisher-Yates Shuffle
shuffle = (array) => {
    let m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

addWords = () => {
    let wordContainer = $('.wordcontainer');
    wordContainer.html(''); //Clear words
    let words = shuffle(wordList);
    let fulltext = `<span> ${words[0]}</span>`
    for (let i = 1; i < 250; i++){
        fulltext += `<span> ${words[i]}</span>`
        wordContainer.html(fulltext)
    }
    //Mark first word as current word
    $('.wordcontainer').children(":first").addClass("current-word");
}

checkWord = (word) => {
    let wordLength = word.val().length;
    
    let current = $('.current-word');
    let substring = current.html().trim().substring(0, wordLength);
    substring = substring.trim();
    console.log(word.val())
    console.log(substring)
    if (word.val().trim() != substring){
        current.addClass("incorrect-word-bg");
        return false;
    }
    else{
        current.removeClass("incorrect-word-bg");
        return true;
    }
}

submitWord = (word) => {
    console.log('Submitted Word');
    let current = $('.current-word');
    if (checkWord(word)){
        current.removeClass("current-word");
        current.addClass("correct-word-c");
        wordData.correct++;
    }
    else{
        current.removeClass("current-word incorrect-word-bg");
        current.addClass("incorrect-word-c");
        wordData.incorrect++;
    }
    current.next().addClass("current-word");
}


clearLine = () => {
    let wordContainer = $('.wordcontainer');
    let current = $('.current-word');
    let previous = current.prev();
    let children = $('.correct-word-c, .incorrect-word-c').length;
    if (current.offset().top > previous.offset().top) {
        $('.correct-word-c, .incorrect-word-c').remove();
    }
}

timer  = (seconds) => {
    let time = seconds;
    let oneMinute = $('.timer > span').html()
    if (oneMinute == "1:00"){
        let typingTimer = setInterval(() => {
            if (time <= 0 ){
                clearInterval(typingTimer);
            }
            else{
                time--;
                let timePad = (time < 10) ? ("0" + time) : time;
                $('.timer > span').html(`0:${timePad}`);
            }
        }, 1000);
    }
    else if (oneMinute == "0:00") {return false;}
    return true;
}

calculateWPM = (data) => {
    const min = data.seconds/60;
    const wpm = Math.ceil((data.typed / 5) - (data.incorrect) / min);
    const accuracy = Math.ceil((data.correct / data.total) * 100);
    if (wpm < 0){
        wpm = 0;
    }   
    const results = 
    `<ul id="results">
    <li>WPM: <span class="wpm-value">${wpm}</span></li>
    <li>Accuracy: <span class="wpm-value">${accuracy}%</span></li>
    <li id="results-stats">
    Total Words: <span>${data.total}</span> |
    Correct Words: <span>${data.correct}</span> |
    Incorrect Words: <span>${data.incorrect}</span> |
    Characters Typed: <span>${data.typed}</span>
    </li>
    </ul>`;
    $('.wordcontainer').html(results);

}

// Char:        Key Code:
    // <space>      32
    // <backspace>  8
    // <shift>      16
    // [A-Z]        65-90
    // [' "]        222

runType = (key) => {
    console.log('running');
    let keyCode = key.keyCode;
    console.log(keyCode)
    let word = $('.typebox');

    if (word.val().match(/^\s/g)){
        word.val("");
    }
    else{
        if (timer(wordData.seconds)){
            checkWord(word);
            if (keyCode == 32){
                submitWord(word);
                clearLine();
                word.val("");
            }
            wordData.typed++;
        }  
        else{
            calculateWPM(wordData);
        }
   
    }
  



}

addWords();