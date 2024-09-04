/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Group } from "./Group";
import { GroupCountArgs } from "./GroupCountArgs";
import { GroupFindManyArgs } from "./GroupFindManyArgs";
import { GroupFindUniqueArgs } from "./GroupFindUniqueArgs";
import { CreateGroupArgs } from "./CreateGroupArgs";
import { UpdateGroupArgs } from "./UpdateGroupArgs";
import { DeleteGroupArgs } from "./DeleteGroupArgs";
import { ImageFindManyArgs } from "../../image/base/ImageFindManyArgs";
import { Image } from "../../image/base/Image";
import { GroupService } from "../group.service";
@graphql.Resolver(() => Group)
export class GroupResolverBase {
  constructor(protected readonly service: GroupService) {}

  async _groupsMeta(
    @graphql.Args() args: GroupCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Group])
  async groups(@graphql.Args() args: GroupFindManyArgs): Promise<Group[]> {
    return this.service.groups(args);
  }

  @graphql.Query(() => Group, { nullable: true })
  async group(
    @graphql.Args() args: GroupFindUniqueArgs
  ): Promise<Group | null> {
    const result = await this.service.group(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Group)
  async createGroup(@graphql.Args() args: CreateGroupArgs): Promise<Group> {
    return await this.service.createGroup({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Group)
  async updateGroup(
    @graphql.Args() args: UpdateGroupArgs
  ): Promise<Group | null> {
    try {
      return await this.service.updateGroup({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Group)
  async deleteGroup(
    @graphql.Args() args: DeleteGroupArgs
  ): Promise<Group | null> {
    try {
      return await this.service.deleteGroup(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Image], { name: "images" })
  async findImages(
    @graphql.Parent() parent: Group,
    @graphql.Args() args: ImageFindManyArgs
  ): Promise<Image[]> {
    const results = await this.service.findImages(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
