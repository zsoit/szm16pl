document.querySelector('#price').addEventListener('click', event => {
    Price();
})

document.querySelector('#contact').addEventListener('click', event => {
    Contact();
})

function Price() {
    document.getElementById("main__content").innerHTML = `
    <h2>Oferta</h2>
    <div class=list>
    <ul>
    <li>Instalacje systemów operacyjnych oraz sterowników<li>
    Montaż podzespołów komputerowych<li>Serwisowanie, naprawa komputera<li>aktualizowanie Biosu<li>Konfiguracja sieci domowej<li>Serwisowanie smartfonów<li>Zarabianie gniazd internetowych<li>Zarabianie patch paneli oraz keystone<li>Wymiana przycisków i analogów w padach<li>Konfiguracja obrazu w TV do korzystania codziennego<li>Instalacja Monitoringu</ul></div> <br><br>`;
    document.title = "Oferta";

    const oferta = document.getElementById("oferta");
    const kontakt = document.getElementById("kontakt");
    const omnie = document.getElementById("omnie");

    kontakt.style.color = "white";
    kontakt.style.borderBottom = "2px solid transparent"

    oferta.style.color = "gold";
    oferta.style.borderBottom = "2px solid red"

    omnie.style.color = "white";
    omnie.style.borderBottom = "2px solid transparent"


}

function Contact() {
    document.getElementById("main__content").innerHTML = `<h2>Kontakt</h2><div class=contact><p class=contact__name>SZM16 POMOC IT</p><a href=tel:+48510962288><p class=contact__phone>+48 510 962 288</p></a><a href=mailto:monasterski.it@gmail.com><p class=contact__mail>monasterski.it@gmail.com</p></a><p>Wycena oraz dodatkowe informacje udzielane indywidualnie.</div>`;
    document.title = "Kontakt";

    const oferta = document.getElementById("oferta");
    const kontakt = document.getElementById("kontakt");
    const omnie = document.getElementById("omnie");


    kontakt.style.color = "gold";
    kontakt.style.borderBottom = "2px solid red"

    oferta.style.color = "white";
    oferta.style.borderBottom = "2px solid transparent"

    omnie.style.color = "white";
    omnie.style.borderBottom = "2px solid transparent"
}