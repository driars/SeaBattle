export enum ElementStatus {
  Empty,
  Clicked,
}

export type ElementValue = {
  type: ElementStatus;
  ship?: string;
};
