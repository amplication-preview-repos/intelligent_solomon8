import { Group } from "../group/Group";

export type Image = {
  createdAt: Date;
  group?: Group | null;
  id: string;
  updatedAt: Date;
  uploadedBy: string | null;
  url: string | null;
};
