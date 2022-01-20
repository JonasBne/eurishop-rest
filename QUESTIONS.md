# Questions

## Reusability

### Q1: Hoe kan ik van mijn Form component een herbruikbare component maken?

Ik gebruik het formulier nu om het productdetail weer te geven. Om het formulier vorm te geven geef ik een object genaamd "formData" mee. Ik loop over dit project om per combinatie van key-value een input veld aan te maken.

Enkele struikelblokken:

- Ik vind geen propere manier om te bepalen welke types van inputvelden ik wil genereren in het formulier. Nu staat alles vast gecodeerd op input type = "text", maar dat is eigenlijk niet wenselijk. Vooral voor de property "desc" is dit een probleem, omdat het input veld niet mee schaalt met de inhoud. De meeste productomschrijvingen zijn te lang en passen niet in het input veld. Ik heb met css de breedte van het inputveld wel kunnen stretchen, maar nog steeds zit je voor sommige producten in de problemen en moet je scrollen. Een betere oplossing zou zijn om hier een textarea voor te gebruiken.

- Mijn formulier bevat enkele buttons (actions). Voor het productdetail zijn dat de volgende:
  - Edit (om naar schrijfmodus te gaan en readOnly uit te schakelen op de inputvelden)
  - Cancel (om terug te keren naar de originele state van het product)
  - Save (om een put request te verzenden)

De buttons zijn ook hard gecodeerd, waardoor ik dit formulier niet kan herbruiken bij bijvoorbeeld het aanmaken van nieuwe producten. Ik heb dan bijvoorbeeld geen edit knop nodig, maar enkel een save en cancel. Als alternatieve oplossing was ik aan het denken om een array met objecten mee te geven en daarover te loopen om de buttons te genereren, iets in de trend van:

[{
content: "Edit",
color: "green",
...
}, {
content: "Cancel",
color: "red"
}]

Buttons zou ik dan kunnen maken met buttonArr.map((button) => {
return <Button backgroundColor={button.color}>{button.content}</Button>
});

Maar ik heb ook onClick handlers nodig op de verschillende buttons, dewelke afhankelijk zijn van de content (i.e. edit, save,...) --> Is het een oplossing om dit ook als prop mee te geven aan Form?

Nu heb ik mijn formulier per button een click handler toegevoegd die vervolgens de functie aanroept die via props worden meegegeven.

### Q2: Functie optioneel meegeven als prop

Mijn tabel is in grote mate generiek en herbruikbaar binnen de applicatie. Ik geef nu een "onRedirect" prop mee aan de tabel om een gebruiker te herleiden naar een andere view bij bepaalde acties. Het is echter niet altijd noodzakelijk dat dit gebeurt - soms dient een tabel enkel om informatie te tonen en is er geen specifieke extra actie (zoals doorverwijziging) nodig. Als ik de onRedirect prop optioneel meegeef via onRedirect?: () => void, dan krijg ik een TS error "cannot invoke object which is possibly undefined". Ik begrijp vanwaar deze error komt, maar ik vind geen echte manier om dit op te lossen. Dit is ook een probleem waar ik bij andere componenten tegenaan loop. Wat is de beste manier om hiermee om te gaan?

### Q3: Cancel click handler

In ProductDetail.tsx heb ik vanaf lijn 44-50 een handler toegevoegd die de data opnieuw moet resetten wanneer een gebruiker op "cancel" klikt. Is dit een 'propere' manier?

### Q4: Sortering

In ProductList.tsx heb ik op lijn 34 code toegevoegd om de gesorteerde producten te bepalen, met een undefined check. Is dit een propere manier?

### Q5: Http requests

We gebruiken nu een useFetch hook om nadien te hergebruiken. Is het zinvol om ook een usePut, usePost,... hook te maken?
