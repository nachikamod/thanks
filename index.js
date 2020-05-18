function play() {
    document.getElementById("play-music").style.display = "block";
    document.getElementById("fade-out-title").className = "animate-title";
    setTimeout(() => {
        quoteSlide();    
    }, 2000);
    
}

function quoteSlide() {
    document.getElementById("quote-js").style.display = "block";
    document.getElementById("quote-js").className = "animate-quote";
    setTimeout(() => {
        howWeSlide();
    }, 4000);
}

function howWeSlide() {
    document.getElementById("whenWe").style.display = "block";
    document.getElementById("whenWe").className = "animate-when-we";
    setTimeout(() => {
        howWeAfterMessageSlide();
    }, 6000);
}

function howWeAfterMessageSlide() {
    document.getElementById("aft-msg").style.display = "block";
    document.getElementById("aft-msg").className = "animate-when-we";
    setTimeout(() => {
        newJourneys();
    }, 5000);
}

function newJourneys() {
    document.getElementById("bgnn").style.display = "block";
    document.getElementById("bgnn").className = "animate-when-we";
    setTimeout(() => {
        newMemories();
    }, 5000);
}

function newMemories() {
    document.getElementById("mem").style.display = "block";
    document.getElementById("mem").className = "animate-when-we";
    setTimeout(() => {
        newStory();
    }, 5000);
}

function newStory() {
    document.getElementById("str").style.display = "block";
    document.getElementById("str").className = "animate-when-we";
    setTimeout(() => {
        down();
    }, 5000);
}

function down() {
    document.getElementById("dwn").style.display = "block";
    document.getElementById("dwn").className = "animate-when-we";
    setTimeout(() => {
        alwaysWithMe();
    }, 5000);
}

function alwaysWithMe() {
    document.getElementById("wthMe").style.display = "block";
    document.getElementById("wthMe").className = "animate-when-we";
}

