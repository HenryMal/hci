import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface Topic {
  id: number;
  name: string;
  icon: IconProp;
  categories: string[];
}