import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ImageWhereInput = {
  group?: GroupWhereUniqueInput;
  id?: StringFilter;
  uploadedBy?: StringNullableFilter;
  url?: StringNullableFilter;
};
