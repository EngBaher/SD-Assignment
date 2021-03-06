import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatDialogModule],
  exports: [ReactiveFormsModule, FormsModule, MatDialogModule],
})
export class SharedModule {}
