import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";

export type ImageUpdateInput = {
  group?: GroupWhereUniqueInput | null;
  uploadedBy?: string | null;
  url?: string | null;
};
