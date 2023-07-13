import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';

@Injectable()
export class GroupsService {
  private groups = [
    { id: 1, name: 'Group 1' },
    { id: 2, name: 'Group 2' },
  ];

  getGroup(name?: 'Group 1' | 'Group 2') {
    if (name) {
      return this.groups.filter((group) => group.name === name);
    }
    return this.groups;
  }

  getroup(id: number) {
    const group = this.groups.find((group) => group.id === id);
    if (!group) {
      throw new Error('Group not found');
    }
    return group;
  }

  createGroup(createGroupDto: CreateGroupDto) {
    const newGroup = {
      ...createGroupDto,
      id: Date.now(),
    };
    this.groups.push(newGroup);
    return newGroup;
  }

  updateGroup(id: number, updateGroupDto: UpdateGroupDto) {
    this.groups = this.groups.map((group) => {
      if (group.id === id) {
        return { ...group, ...updateGroupDto };
      }
      return group;
    });
    return this.getroup(id);
  }

  removeGroup(id: number) {
    const toRemove = this.getroup(id);
    this.groups = this.groups.filter((group) => {
      group.id !== id;
      return toRemove;
    });
  }
}
