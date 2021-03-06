import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { IStep, IStepItem } from "../shared/models/wizard";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class WizardService {
  baseUrl = "https://localhost:5001/api/wizard/";
  steps: IStep[] = [];
  private stepsSource = new BehaviorSubject<IStep[]>(null);
  steps$ = this.stepsSource.asObservable();
  private selectedStepSource = new BehaviorSubject<IStep>(null);
  selectedStep$ = this.selectedStepSource.asObservable();

  constructor(private http: HttpClient) {}

  getWizard() {
    return this.http.get(this.baseUrl).pipe(
      map((response: IStep[]) => {
        this.stepsSource.next(response);
        this.steps = response;
      })
    );
  }
  addStep() {
    const wizard = this.getCurrentStepsValue();
    this.http
      .post<IStep>(this.baseUrl + "step", { observe: "response" })
      .subscribe((response) => {
        console.log(response);
        wizard.push(response);
      });
  }

  addoOrUpdateStepItem(step: IStep, item: IStepItem) {
    const wizard = this.getCurrentStepsValue();
    const stepIndex = wizard.findIndex((i) => i.id === step.id);

    //check if item exists
    const index = wizard.findIndex(
      (step) => step.stepItems.findIndex((i) => i.id === item.id) > -1
    );

    if (index === -1) {
      // if not exists then add it
      this.http
        .post<IStepItem>(
          this.baseUrl + "step/" + step.id + "/addStepItem",
          item,
          {
            observe: "response",
          }
        )
        .subscribe((response) => {
          step.stepItems.push(response.body);
          wizard[stepIndex] = step;
        });
    } else {
      // else update it
      this.http
        .post<IStepItem>(
          this.baseUrl + "stepItem/" + item.id + "/update",
          item,
          {
            observe: "response",
          }
        )
        .subscribe((response) => {
          console.log(response.body);
          step.stepItems[index] = response.body;
          wizard[stepIndex] = step;
        });
    }
  }

  removeStep(step: IStep) {
    const wizard = this.getCurrentStepsValue();
    const stepIndex = wizard.findIndex((i) => i.id === step.id);
    if (stepIndex > -1) {
      this.http
        .delete<boolean>(this.baseUrl + "step?id=" + step.id, {
          observe: "response",
        })
        .subscribe(
          (response) => {
            if (response.body) {
              wizard.splice(stepIndex, 1);
            }
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }

  removeStepItem(step: IStep, item: IStepItem) {
    const wizard = this.getCurrentStepsValue();
    const stepIndex = wizard.findIndex((i) => i.id === step.id);
    const itemIndex = step.stepItems.findIndex((i) => i.id === item.id);

    if (itemIndex > -1) {
      this.http
        .delete<boolean>(this.baseUrl + "stepitem?id=" + item.id, {
          observe: "response",
        })
        .subscribe(
          (response) => {
            if (response.body) {
              step.stepItems.splice(itemIndex, 1);
              wizard[stepIndex] = step;
            }
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }

  getCurrentStepsValue() {
    return this.stepsSource.value;
  }
}
