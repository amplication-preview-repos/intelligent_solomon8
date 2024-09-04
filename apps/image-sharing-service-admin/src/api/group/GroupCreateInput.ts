import { ImageCreateNestedManyWithoutGroupsInput } from "./ImageCreateNestedManyWithoutGroupsInput";

export type GroupCreateInput = {
  description?: string | null;
  images?: ImageCreateNestedManyWithoutGroupsInput;
  name?: string | null;
};
