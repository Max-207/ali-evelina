let html = `
<div class="main">
    <img class="img-mond" src="img/mond.jpg">
    <div class="main-txt">
        <span>
            jndsfnsfnerjaisofnvso
        </span>
        <button onclick="sendHTML()" class="btn-weiter">
            Weiter
        </button>
    </div>
</div>
`;

function sendCode() {
    let code = document.getElementsByName("code")[0].value
    if(code === "5236") {
        document.body.innerHTML = html
    }
}


function sendHTML() {
    document.body.innerHTML = `    <div class="main">
    <img class="img-mond" src="img/page-1.jpg">
    <div class="main-txt">
        <span>
            jndsfnsfnerjaisofnvso
        </span>
        <button class="btn-weiter" onclick="further()">
            Weiter
        </button>
    </div>
</div>`;
}

function further() {
    document.body.innerHTML = `
    <div class="main">
    <span>
        Schmerz ist nichts im vergleich zu dem, wie es sich anfühlt aufzuhören obwohl man weitermachen will.
    </span>
    <img class="img-mond" src="img/kind.jpg">
    <div class="main-txt">
        <span>
        Dieses Lächeln war mein licht und der Grund warum es mir niemals zu Schade war mir mühe zu geben. 
        Wenn ich einen schlechten tag hatte, hab ich es mir immer angeschaut und mir ging es besser.
        Niemals könnte ich dich einfach so aufgeben. 
        Nachgeben kam für mich nie in frage.
        </span>
        <button class="btn-weiter" onclick="further()">
            Weiter
        </button>
    </div>
</div>`;
}