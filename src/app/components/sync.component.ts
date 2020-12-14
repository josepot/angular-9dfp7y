import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ValueService } from "../value.service";

@Component({
  selector: "my-sync",
  template: `
    {{ value }}
  `,
  styles: []
})
export class SyncComponent implements OnInit, OnDestroy {
  value: number;
  sub: Subscription;
  constructor(private valueService: ValueService) {}

  ngOnInit(): void {
    this.sub = this.valueService.getSyncValue().subscribe(v => {
      this.value = v;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
