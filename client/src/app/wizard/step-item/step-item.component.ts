import { WizardService } from "./../wizard.service";
import { IStep, IStepItem } from "./../../shared/models/wizard";
import { Component, OnInit, Input, Inject } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-step-item",
  templateUrl: "./step-item.component.html",
  styleUrls: ["./step-item.component.css"],
})
export class StepItemComponent implements OnInit {
  step: IStep;
  item: IStepItem;

  stepItemForm: FormGroup;

  constructor(
    private wizardService: WizardService,
    private dialogRef: MatDialogRef<StepItemComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.step = data.step;
    this.item = data.item;
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.stepItemForm = new FormGroup({
      titel: new FormControl(this.item?.titel, [
        Validators.required,
        Validators.maxLength(100),
      ]),
      description: new FormControl(this.item?.description),
    });
  }

  save() {
    if (this.stepItemForm.valid) {
      this.item = Object.assign({}, this.item, this.stepItemForm.value);
      console.log(this.step);
      console.log(this.item);
      this.wizardService.addoOrUpdateStepItem(this.step, this.item);
      this.dialogRef.close();
    }
  }
  close() {
    this.dialogRef.close();
  }
}
