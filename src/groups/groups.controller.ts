import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { GroupsService } from './groups.service';

@Controller('groups')
export class GroupsController {
  @Get()
  getGroups(@Query('name') name: "Group 1" | "Group 2") {
    const service = new GroupsService();
    return service.getGroup(name);
  }

  @Get(':id')
  getOneGroup(@Param('id') id: String) {
    return { id };
  }

  @Post()
  createGroup(@Body() createGroupDto: CreateGroupDto) {
    return {
      name: createGroupDto.name,
    };
  }

  @Put(':id')
  updateGroup(@Param('id') id: String, @Body() updateGroupDto: UpdateGroupDto) {
    return {
      id,
      name: updateGroupDto,
    };
  }
  @Delete(':id')
  deleteGroup(@Param('id') id: String) {
    return {};
  }
}

// Get/ninjas -->[]
