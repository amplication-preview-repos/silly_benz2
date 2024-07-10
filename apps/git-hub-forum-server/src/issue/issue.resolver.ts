import * as graphql from "@nestjs/graphql";
import { IssueResolverBase } from "./base/issue.resolver.base";
import { Issue } from "./base/Issue";
import { IssueService } from "./issue.service";

@graphql.Resolver(() => Issue)
export class IssueResolver extends IssueResolverBase {
  constructor(protected readonly service: IssueService) {
    super(service);
  }
}
