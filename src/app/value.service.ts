import { Injectable } from "@angular/core";
import { interval, Observable, of, timer } from "rxjs";
import { shareReplay } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class ValueService {
  private cachedSyncValue$: Observable<number> = of(42).pipe(shareReplay(1));
  private cachedAsyncSingleValue$: Observable<number> = timer(1000).pipe(
    shareReplay(1)
  );
  private cachedAsyncContinuousValue$: Observable<number> = interval(1000).pipe(
    shareReplay(1)
  );

  getSyncValue(): Observable<number> {
    return this.cachedSyncValue$;
  }
  getAsyncSingleValue(): Observable<number> {
    return this.cachedAsyncSingleValue$;
  }
  getAsyncContinuousValue(): Observable<number> {
    return this.cachedAsyncContinuousValue$;
  }
}
