Elementen:

header -> grote header op landingspagina, daar dan menu onder. Op achterliggende pagina's: klein logo met daaronder 'meescrollend' menu (zie hierna).

nav -> gebruik maken van headroom.js (alleen in beeld als je terugscrollt). Maar hoe werkt dat in responsive layouts?
    -> Kopjes in nav: over ons, ouders, media, FAQ, Contact

Footer ->

OPZOEKEN: wat staat er in een goede footer?

- herhaling menu (?)
- links naar pagina's die niet in hoofdmenu staan: aanmelden, contact(?), downloads (formulieren en zo)
- andere informatie: 
  - kleine lettertjes;
  - copyright;
  - 
- aanmelden/aanmeldprocedure

--

FAQ-page

main div:

-> Indelen in categorieen

<dl class="faq">
  <dt>Vraag</dt>
  <dd>Antwoord</dd>
  <dt>Vraag</dt>
  <dd>Antwoord</dd>
</dl>


sidebar div:

-> blokje met categorieen dat meescrollt
-> blokje daaronder met nummer Marlies (als soort helpdesk)

--

Contact-page

Twee kolommen, die even groot zijn:

links: Contactgegevens (adres, telefoonnummer(s), email, facebook, twitter) (Vraag: antwoorden we ook op vragen via Facebook en Twitter? Zo nee, willen we dat wel? Want anders hoeven ze hier niet bij.)

Rechts: Google Maps met de locatie


--

Over ons-pagina

Een kolom: soort storytelling hier dat je vanzelf naar beneden blijft scrollen. Volgorde: 
- inleidende tekst met linkjes op dezelfde pagina
- over de Kasteeltuin
- team (met foto's; welke info per teamlid? Suggestie: naam, leeftijd, jaren werkervaring, werkdagen in welke groep)
- in en om de Kasteeltuin (foto's)
- horizontale groepen/ dagelijkse gang van zaken
- stichting de jonge bea
- praktische info


    $('.gallery').each(function(i, el) {
        $(el).justifiedGallery({
            rowHeight : 160,
            lastRow : 'nojustify',
            margins : 1,
            rel: 'gal' + i,
        }).on('jg.complete', function() {
            if (i == 1) $('.gallery a').swipebox( {
              hideCloseButtonOnMobile : false,
		      hideBarsDelay : 3000
            } ); 
        });
    });


--

Ouders-pagina

Eenvoudig houden; larderen met vrolijke plaatjes van Yvonne


--

Pers-pagina

Twee kolommen met links en rechts de nieuwsberichten (van links naar rechts, twee per rij). Info per artikel: soort medium, datum, korte synopsis. 

--

Beelden Yvonne

Bijv volle bakfiets bij oprichting, 
daarna kasteel met laarsjes.
Bij warme maaltijd: weekmenu.
Bij spelen en groeien: kind in zand, baby, schorsman.
Bij contact: kantoorlogo en facebook-appel.

--

Dingen voor vanavond:

Afspraken maken over:
- selecteren van foto's
- kleurenpalet: rood en groen van logo; nog een kleur erbij! (colour wheel)

Ter discussie:
- wat komt er in de footer?
- icoontjes door Yvonne?

Website: 


--

To do:

- galleries op wie zijn wij
- buttons voorbereiden
- meescrollend menu op wie zijn wij zoals Tympanus
- alle text styling
- pagina Ouders