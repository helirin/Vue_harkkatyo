# Vue harjoitustyö
Tämä on Sovelluskehitys-kurssin harjoitustyö, joka on tehty Vue-ohjelmointikehystä käyttäen. 
Sovellus käyttää Helsingin Sanomien avointa rajapintaa (API), johon on kerätty dataa Suomen koronavirus-tartunnoista.
https://github.com/HS-Datadesk/koronavirus-avoindata.
Data on JSON-muodossa ja sitä päivitetään sitä mukaa kun uusia tietoja tulee.

Vue-sovellus hakee datan API: sta ja tallentaa sen taulukoihin.  
Sovellus laskee tartuntojen määrän ja tallentaa ne sairaanhoitopiireittäin. 
Sovellus laskee myös tartuntojen kokonaismäärän ja kuluvan päivän tartunnat. T
edot listataan html-sivulle taulukoihin ja listaan. 
Data on muuttunut alkuvaiheen jälkeen siten, että tartuntalähdettä ei enää kirjata. 
En kuitenkaan poistanut saraketta, koska alkuvaiheen riveissä on dataa. 
Sairaanhoitopiirien kirjaaminen muuttui harmillisesti 18.3. siten, että kaikkien tartuntojen sairaanhoitopiirejä ei enää ilmoiteta. 
Nämä löytyvät kohdasta ”Muu”.  
Sovelluksen web-osoite: https://dos.seamk.fi/~epedu+k1901135/harkka.html
