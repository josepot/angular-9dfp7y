import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SyncComponent } from "./components/sync.component";
import { AsyncSingleComponent } from "./components/async-single.component";
import { AsyncContinuousComponent } from "./components/async-continuous.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    SyncComponent,
    AsyncSingleComponent,
    AsyncContinuousComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
