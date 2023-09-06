export enum ElementStatus {
  Empty,
  Clicked,
  Finished,
}

export type ElementValue = {
  type: ElementStatus;
  ship?: string;
};
