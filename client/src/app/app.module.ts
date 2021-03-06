import { WizardModule } from "./wizard/wizard.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { CoreModule } from "./core/core.module";
import { StepComponent } from "./wizard/step/step.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    WizardModule,
  ],
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
