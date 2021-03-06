import { marbles } from "rxjs-marbles/jest";
import { map } from "rxjs/operators";

describe("marble tests", () => {
  it(
    "should support marble tests",
    marbles(m => {
      const source = m.hot("--^-a-b-c-|");
      const subs = "^-------!";
      const expected = "--b-c-d-|";

      const destination = source.pipe(
        map(value => String.fromCharCode(value.charCodeAt(0) + 1))
      );
      m.expect(destination).toBeObservable(expected);
      m.expect(source).toHaveSubscriptions(subs);
    })
  );
  it(
    "should multiply each value by 10",
    marbles(m => {
      const source$ = m.cold("-a-b-c|", { a: 1, b: 2, c: 3 });
      const expected$ = m.cold("-a-b-c|", { a: 10, b: 20, c: 30 });

      const result$ = source$.pipe(map(x => x * 10));

      m.expect(result$).toBeObservable(expected$);
    })
  );
});
