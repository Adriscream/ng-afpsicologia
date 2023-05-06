import { combineLatest, debounceTime, distinct, map, Observable } from 'rxjs';

export function getSearchObservable<T>(
  itemsObs: Observable<T[]>,
  searchObs: Observable<string | null>
): Observable<T[]> {
  return combineLatest([itemsObs, searchObs]).pipe(
    distinct(),
    debounceTime(200),
    map(([items, search = '']) => {
      return items.filter(
        (item) =>
          !search ||
          JSON.stringify(item).toLowerCase().includes(search.toLowerCase())
      );
    })
  );
}
