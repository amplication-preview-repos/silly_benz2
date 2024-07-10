/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { RepositoryService } from "../repository.service";
import { RepositoryCreateInput } from "./RepositoryCreateInput";
import { Repository } from "./Repository";
import { RepositoryFindManyArgs } from "./RepositoryFindManyArgs";
import { RepositoryWhereUniqueInput } from "./RepositoryWhereUniqueInput";
import { RepositoryUpdateInput } from "./RepositoryUpdateInput";
import { IssueFindManyArgs } from "../../issue/base/IssueFindManyArgs";
import { Issue } from "../../issue/base/Issue";
import { IssueWhereUniqueInput } from "../../issue/base/IssueWhereUniqueInput";

export class RepositoryControllerBase {
  constructor(protected readonly service: RepositoryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Repository })
  async createRepository(
    @common.Body() data: RepositoryCreateInput
  ): Promise<Repository> {
    return await this.service.createRepository({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,
        owner: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Repository] })
  @ApiNestedQuery(RepositoryFindManyArgs)
  async repositories(@common.Req() request: Request): Promise<Repository[]> {
    const args = plainToClass(RepositoryFindManyArgs, request.query);
    return this.service.repositories({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,
        owner: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Repository })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async repository(
    @common.Param() params: RepositoryWhereUniqueInput
  ): Promise<Repository | null> {
    const result = await this.service.repository({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,
        owner: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Repository })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateRepository(
    @common.Param() params: RepositoryWhereUniqueInput,
    @common.Body() data: RepositoryUpdateInput
  ): Promise<Repository | null> {
    try {
      return await this.service.updateRepository({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          description: true,
          owner: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Repository })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteRepository(
    @common.Param() params: RepositoryWhereUniqueInput
  ): Promise<Repository | null> {
    try {
      return await this.service.deleteRepository({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          description: true,
          owner: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/issues")
  @ApiNestedQuery(IssueFindManyArgs)
  async findIssues(
    @common.Req() request: Request,
    @common.Param() params: RepositoryWhereUniqueInput
  ): Promise<Issue[]> {
    const query = plainToClass(IssueFindManyArgs, request.query);
    const results = await this.service.findIssues(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
        description: true,
        status: true,

        repository: {
          select: {
            id: true,
          },
        },

        assignee: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/issues")
  async connectIssues(
    @common.Param() params: RepositoryWhereUniqueInput,
    @common.Body() body: IssueWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      issues: {
        connect: body,
      },
    };
    await this.service.updateRepository({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/issues")
  async updateIssues(
    @common.Param() params: RepositoryWhereUniqueInput,
    @common.Body() body: IssueWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      issues: {
        set: body,
      },
    };
    await this.service.updateRepository({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/issues")
  async disconnectIssues(
    @common.Param() params: RepositoryWhereUniqueInput,
    @common.Body() body: IssueWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      issues: {
        disconnect: body,
      },
    };
    await this.service.updateRepository({
      where: params,
      data,
      select: { id: true },
    });
  }
}
