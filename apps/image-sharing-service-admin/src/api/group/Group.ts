import { Image } from "../image/Image";

export type Group = {
  createdAt: Date;
  description: string | null;
  id: string;
  images?: Array<Image>;
  name: string | null;
  updatedAt: Date;
};
