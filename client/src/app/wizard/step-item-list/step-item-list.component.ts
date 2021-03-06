import { WizardService } from "./../wizard.service";
import { Component, OnInit, Input } from "@angular/core";
import { IStep } from "src/app/shared/models/wizard";
import { MatDialogConfig, MatDialog } from "@angular/material/dialog";
import { StepItemComponent } from "../step-item/step-item.component";

@Component({
  selector: "app-step-item-list",
  templateUrl: "./step-item-list.component.html",
  styleUrls: ["./step-item-list.component.css"],
})
export class StepItemListComponent implements OnInit {
  @Input() step: IStep;
  constructor(
    private wizardService: WizardService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {}

  removeStepItem(item) {
    this.wizardService.removeStepItem(this.step, item);
  }

  edit(item) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      step: this.step,
      item: item,
    };

    this.dialog.open(StepItemComponent, dialogConfig);
  }
}
