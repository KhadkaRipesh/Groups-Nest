import { MinLength } from 'class-validator';

export class CreateGroupDto {
  @MinLength(3)
  name: string;
}
