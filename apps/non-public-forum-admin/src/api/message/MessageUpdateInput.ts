import { ForumWhereUniqueInput } from "../forum/ForumWhereUniqueInput";

export type MessageUpdateInput = {
  content?: string | null;
  author?: string | null;
  forum?: ForumWhereUniqueInput | null;
};
