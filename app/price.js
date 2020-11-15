function Price() {
    document.getElementById("main__content").innerHTML = "<h2>Oferta</h2><div class=list><ul><li>Instalacje systemów operacyjnych oraz sterowników<li>Montaż podzespołów komputerowych<li>Serwisowanie, naprawa komputera<li>aktualizowanie Biosu<li>Konfiguracja sieci domowej<li>Serwisowanie smartfonów<li>Zarabianie gniazd internetowych<li>Zarabianie patch paneli oraz keystone<li>Wymiana przycisków i analogów w padach<li>Konfiguracja obrazu w TV do korzystania codziennego<li>Instalacja Monitoringu</ul></div> <br><br>";
    document.title = "Oferta";

    const oferta = document.getElementById("oferta");
    const kontakt = document.getElementById("contact");
    const omnie = document.getElementById("omnie");

    kontakt.style.color = "white";
    kontakt.style.borderBottom = "2px solid transparent"

    oferta.style.color = "gold";
    oferta.style.borderBottom = "2px solid red"

    omnie.style.color = "white";
    omnie.style.borderBottom = "2px solid transparent"


}