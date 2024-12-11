import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ImageListRelationFilter } from "../image/ImageListRelationFilter";

export type GroupWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  images?: ImageListRelationFilter;
  name?: StringNullableFilter;
};
