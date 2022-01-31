## TO-DO's

### Main branch v1 

- [x] cleanup entitities, dto
- [x] unit test schrijven voor de totaalberekening van de basket en in een aparte functie steken
- [x] useUpdate 2
- [x] Sortable table fix 
- [ ] paging for table and fetch --> paging inbouwen in useFetch hook 
- [ ] look for additional unit tests that may be performed

### Nieuwe branch v2

- [ ] basket api gebruiken --> producten wegschrijven en bij page refresh (winkelmandje mag niet leeg zijn na refresh)
  Tip: iedere keer dat je een product toevoegt aan de basket, stuur je dat door naar de server (een post request). 
  Tip: je houdt de basket niet meer bij in een state, maar fetch de data iedere keer van de server. Op termijn is een mogelijke verbetering om nog met React Query te werken om te cachen. 
- [ ] als er een product wordt verwijderd in de tabel, moet het winkelmandje ook geüpdatet worden

### Nieuwe branch v3

- [ ] useFetch, useUpdate ombouwen naar React Query (= useQuery, useMutation)