window.addEventListener("load", async() => {
    let res = await fetch("https://official-joke-api.appspot.com/random_joke");
    let data = await res.json();
    let p1 = document.querySelector("#setup");
    let p2 = document.querySelector("#punchline");
    p1.innerHTML = data.setup;
    p2.innerHTML = data.punchline;
});