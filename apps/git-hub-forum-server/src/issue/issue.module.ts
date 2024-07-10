import { Module } from "@nestjs/common";
import { IssueModuleBase } from "./base/issue.module.base";
import { IssueService } from "./issue.service";
import { IssueController } from "./issue.controller";
import { IssueResolver } from "./issue.resolver";

@Module({
  imports: [IssueModuleBase],
  controllers: [IssueController],
  providers: [IssueService, IssueResolver],
  exports: [IssueService],
})
export class IssueModule {}
