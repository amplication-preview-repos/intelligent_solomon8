import { SortOrder } from "../../util/SortOrder";

export type ImageOrderByInput = {
  createdAt?: SortOrder;
  groupId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  uploadedBy?: SortOrder;
  url?: SortOrder;
};
