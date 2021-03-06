export interface IStep {
  id: number;
  creationDate: string;
  stepItems: IStepItem[];
}

export interface IStepItem {
  id: number;
  titel: string;
  description: string;
  creationDate: string;
}
