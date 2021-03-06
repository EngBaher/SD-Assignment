import { Component, OnInit } from "@angular/core";
import { WizardService } from "./wizard/wizard.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  constructor(private wizardService: WizardService) {}

  ngOnInit(): void {
    this.loadWizard();
  }

  loadWizard() {
    this.wizardService.getWizard().subscribe(
      () => {
        console.log("initialised wizard");
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
