import { ImageUpdateManyWithoutGroupsInput } from "./ImageUpdateManyWithoutGroupsInput";

export type GroupUpdateInput = {
  description?: string | null;
  images?: ImageUpdateManyWithoutGroupsInput;
  name?: string | null;
};
