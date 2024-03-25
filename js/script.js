const quote = document.querySelector("#quote-text");
const author = document.querySelector("#author-name");
const quoteBtn = document.querySelector("button");
const volume = document.querySelector("#volume");
const copy = document.querySelector("#copy");
const whatsapp = document.querySelector("#whatsapp");

function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading...";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        quote.innerText = result.content;
        author.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    });
}

function speechOfText(){
    let utterance = new SpeechSynthesisUtterance(`${quote.innerText} by ${author.innerText}`);
    speechSynthesis.speak(utterance);
}

function copyText(){
    navigator.clipboard.writeText(quote.innerText);
}

function whatsappForward(){
    const whatsappUrl = `whatsapp://send?text=${quote.innerText} by ${author.innerText}`;
    window.location.href = whatsappUrl;
}

quoteBtn.addEventListener("click",randomQuote);
volume.addEventListener("click",speechOfText);
copy.addEventListener("click",copyText);
whatsapp.addEventListener("click",whatsappForward);