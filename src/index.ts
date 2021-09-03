import "./styles.css";
import { switchMap } from "rxjs/operators";
import { fromFetch } from "rxjs/fetch";

const episodes$ = fromFetch("https://rickandmortyapi.com/api/episode/").pipe(
  switchMap(response => response.json())
);

episodes$.subscribe(console.log);
