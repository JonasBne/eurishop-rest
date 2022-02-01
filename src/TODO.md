## TO-DO's

### Nieuwe branch v2

- [ ] basket api gebruiken --> producten wegschrijven en bij page refresh (winkelmandje mag niet leeg zijn na refresh)
  Tip: iedere keer dat je een product toevoegt aan de basket, stuur je dat door naar de server (een post request). 
  Tip: je houdt de basket niet meer bij in een state, maar fetch de data iedere keer van de server. Op termijn is een mogelijke verbetering om nog met React Query te werken om te cachen. 
- [ ] als er een product wordt verwijderd in de tabel, moet het winkelmandje ook geüpdatet worden


Plan van aanpak:

src > api
- [x] basketApi.ts aanmaken
    - [x] interface BasketDTO (id: number, productId: number, quantity: number)
    - [x] basketMapper --> .filter inbouwen die productId('s) gaat matchen op Id's van api/products om zo de gekochte producten eruit te filteren? De mapper geeft een Cart terug.
    - [x] const {loading, error, data: Basket} = useGetBasket() 

src > hooks

- [x] useUpdate hook uitbreiden met patch --> const {loading, error, data, post, put, patch, remove} = useUpdate();
- [x] post aanpassen zodat er een productId kan worden meegegeven

src > views > Home.tsx

- [x] data fetching via useGetBasket() om basket te tonen i.p.v. lokale state 
- [x] onBuy -->  post(quantity, productId)
- [x] onUpdate --> patch(quantity, productId)
- [x] onClear --> remove(key)

- [ ] Werken met 1 basket en key is altijd xyz? Zo ja, dan key vast meegeven in url en niet als optionele parameter


### Nieuwe branch v3

- [ ] useFetch, useUpdate ombouwen naar React Query (= useQuery, useMutation)