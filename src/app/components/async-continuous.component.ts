import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ValueService } from "../value.service";

@Component({
  selector: "my-async-continuous",
  template: `
    {{ value }}
  `,
  styles: []
})
export class AsyncContinuousComponent implements OnInit, OnDestroy {
  value: number;
  sub: Subscription;
  constructor(private valueService: ValueService) {}

  ngOnInit(): void {
    this.sub = this.valueService.getAsyncContinuousValue().subscribe(v => {
      this.value = v;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
