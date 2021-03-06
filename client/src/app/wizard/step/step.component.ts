import { StepItemComponent } from "./../step-item/step-item.component";
import { WizardService } from "./../wizard.service";
import { Component, OnInit } from "@angular/core";
import { IStep } from "src/app/shared/models/wizard";
import { Observable } from "rxjs";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

@Component({
  selector: "app-step",
  templateUrl: "./step.component.html",
  styleUrls: ["./step.component.css"],
})
export class StepComponent implements OnInit {
  currentStep = 0;
  steps$: Observable<IStep[]>;

  constructor(
    private wizardService: WizardService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.steps$ = this.wizardService.steps$;
  }

  getWizard() {
    this.wizardService.getWizard();
  }
  addStep() {
    this.wizardService.addStep();
  }

  removeStep(step) {
    this.wizardService.removeStep(step);
  }

  newItem(step) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "300px";
    dialogConfig.data = {
      step: step,
    };

    this.dialog.open(StepItemComponent, dialogConfig);
  }

  next(i) {
    this.currentStep = this.currentStep + 1;
    //alert(this.currentStep);
    if (this.currentStep > 2) {
    }
  }
  back(i) {
    this.currentStep = this.currentStep - 1;
    //alert(this.currentStep);
  }
}
