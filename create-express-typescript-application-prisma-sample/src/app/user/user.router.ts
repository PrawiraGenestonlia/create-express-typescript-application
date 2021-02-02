import { Body, Controller, Delete, Get, Post, Put, Query, Route, Tags } from 'tsoa';
import { getAllUser, createUser, updateUser, deleteUser } from './user.service';
import { User } from '@prisma/client';

@Tags('User Permission')
@Route('/api/user-permission')
export class UserPermissionController extends Controller {

  @Get('/get-all/')
  public async getAllUser(): Promise<(User & { role: { role: string }[] })[]> {
    return getAllUser()
  }

  @Post('/create/')
  public async createUser(@Body() body: { email: string, roles: { role: string }[] }): Promise<User> {
    return createUser({ email: body.email, roles: body.roles });
  }

  @Put('/update/{id}/')
  public async updateUser(@Query('id') id: string, @Body() body: { email: string, roles: { role: string }[] }): Promise<User> {
    return updateUser({ id: Number(id), email: body.email, roles: body.roles });
  }

  @Delete('/delete/{id}/')
  public async deleteUser(@Query('id') id: string): Promise<User> {
    return deleteUser({ id: Number(id) });
  }

}

