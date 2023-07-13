import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { GroupsService } from './groups.service';
import { BeltGuard } from 'src/belt/belt.guard';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupService: GroupsService) {}

  @Get()
  getGroups(@Query('name') name: 'Group 1' | 'Group 2') {
    // const service = new GroupsService();
    return this.groupService.getGroup(name);
  }

  @Get(':id')
  getOneGroup(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.groupService.getroup(id);
    } catch (err) {
      throw new NotFoundException();
    }
  }

  @Post()
  @UseGuards(BeltGuard)
  createGroup(@Body(new ValidationPipe()) createGroupDto: CreateGroupDto) {
    return this.groupService.createGroup(createGroupDto);
  }

  @Put(':id')
  updateGroup(@Param('id') id: String, @Body() updateGroupDto: UpdateGroupDto) {
    return this.groupService.updateGroup(+id, updateGroupDto);
  }
  @Delete(':id')
  deleteGroup(@Param('id') id: String) {
    return this.groupService.removeGroup(+id);
  }
}
