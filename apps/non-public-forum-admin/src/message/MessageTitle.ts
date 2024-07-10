import { Message as TMessage } from "../api/message/Message";

export const MESSAGE_TITLE_FIELD = "author";

export const MessageTitle = (record: TMessage): string => {
  return record.author?.toString() || String(record.id);
};
