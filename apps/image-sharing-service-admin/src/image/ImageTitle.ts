import { Image as TImage } from "../api/image/Image";

export const IMAGE_TITLE_FIELD = "uploadedBy";

export const ImageTitle = (record: TImage): string => {
  return record.uploadedBy?.toString() || String(record.id);
};
