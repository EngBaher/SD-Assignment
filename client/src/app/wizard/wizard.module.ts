import { StepItemComponent } from "./step-item/step-item.component";
import { StepComponent } from "./step/step.component";
import { SharedModule } from "../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModalModule } from "ngx-bootstrap/modal";
import { StepItemListComponent } from "./step-item-list/step-item-list.component";

@NgModule({
  declarations: [StepComponent, StepItemComponent, StepItemListComponent],
  imports: [CommonModule, SharedModule, ModalModule],
  entryComponents: [StepItemComponent],
  exports: [StepComponent],
})
export class WizardModule {}
