import { Project } from "../project/Project";
import { Message } from "../message/Message";

export type Forum = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  title: string | null;
  project?: Project | null;
  messages?: Array<Message>;
};
