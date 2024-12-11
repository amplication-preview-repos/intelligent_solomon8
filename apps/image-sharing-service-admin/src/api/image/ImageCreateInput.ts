import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";

export type ImageCreateInput = {
  group?: GroupWhereUniqueInput | null;
  uploadedBy?: string | null;
  url?: string | null;
};
