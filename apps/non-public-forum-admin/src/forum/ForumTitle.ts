import { Forum as TForum } from "../api/forum/Forum";

export const FORUM_TITLE_FIELD = "title";

export const ForumTitle = (record: TForum): string => {
  return record.title?.toString() || String(record.id);
};
