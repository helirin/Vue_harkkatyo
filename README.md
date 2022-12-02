# Vue harjoitustyö
Tämä on Sovelluskehitys-kurssin harjoitustyö, jonka olen tehnyt Vue-ohjelmointikehystä käyttäen. 
Sovellus käyttää Helsingin Sanomien avointa rajapintaa (API), johon on kerätty dataa Suomen koronavirus-tartunnoista.
https://github.com/HS-Datadesk/koronavirus-avoindata.
Data on JSON-muodossa ja sitä päivitettiin joka päivä alkuvuonna 2020. 
Huom! Datan päivitys on päättynyt 31.3.2020. 

Vue-sovellus hakee datan API: sta ja tallentaa sen taulukoihin.  
Sovellus laskee tartuntojen määrän ja tallentaa ne sairaanhoitopiireittäin. 
Sovellus laskee myös tartuntojen kokonaismäärän ja kuluvan päivän tartunnat.
Tiedot listataan html-sivulle taulukoihin ja listaan. 
Data on muuttunut alkuvaiheen jälkeen siten, että tartuntalähdettä ei enää kirjata. 
En kuitenkaan poistanut saraketta, koska alkuvaiheen riveissä on dataa. 
Sairaanhoitopiirien kirjaaminen muuttui 18.3. siten, että kaikkien tartuntojen sairaanhoitopiirejä ei ilmoiteta. 
Nämä löytyvät kohdasta ”Muu”. 

Sovelluksen toimintaa voi tarkastella osoitteessa https://helirin.github.io/Vue_harkkatyo/

Wikissä on kerrottu sovelluksen tekemiseen liittyvistä vaiheista.

Huom. Sovellus on tehty vuonna 2020, kun koronavirus oli juuri saapunut Suomeen.
API on edelleen vuonna olemassa vuonna 2022, vaikka dataa ei ole lisätty.
