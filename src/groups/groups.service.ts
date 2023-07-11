import { Injectable } from '@nestjs/common';

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
}
