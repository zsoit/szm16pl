var isIE = false || !!document.documentMode;

if (isIE == true) {
    var output = '<h2>SzM16 Pomoc IT</h2> <p>Pomoc w naprawie komputera i nie tylko!</p> <p>Nazywam się Szymon Monasterski i na codzień zajmuję się usługami informatycznymi. Potrafię naprawić komputer, smartfon, skonfigurować sieć i urządzenia elektorniczne. Obecnie uczęszczam do III klasy technikum w Miastku, gdzie uczę się zawodu technik informatyk.</p> <h2>Oferta</h2><div class=list><ul><li>Instalacje systemów operacyjnych oraz sterowników<li>Montaż podzespołów komputerowych<li>Serwisowanie, naprawa komputera<li>aktualizowanie Biosu<li>Konfiguracja sieci domowej<li>Serwisowanie smartfonów<li>Zarabianie gniazd internetowych<li>Zarabianie patch paneli oraz keystone<li>Wymiana przycisków i analogów w padach<li>Konfiguracja obrazu w TV do korzystania codziennego<li>Instalacja Monitoringu</ul></div> <br><br> <h2>Kontakt</h2><div class=contact><p class=contact__name>SZM16 POMOC IT</p><a href=tel:+48510962288><p class=contact__phone>+48 510 962 288</p></a><a href=mailto:monasterski.it@gmail.com><p class=contact__mail>monasterski.it@gmail.com</p></a><p>Wycena oraz dodatkowe informacje udzielane indywidualnie.</div>';
    document.body.innerHTML = output;
}