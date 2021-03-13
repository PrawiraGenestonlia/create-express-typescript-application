import { Body, Controller, Delete, Get, Post, Put, Query, Route, Tags } from 'tsoa';
import { getAllUser, createUser, updateUser, deleteUser } from './user.service';

@Tags('User Permission')
@Route('/api/user-permission')
export class UserPermissionController extends Controller {

  @Get('/get-all/')
  public async getAllUser() {
    return getAllUser()
  }

  @Post('/create/')
  public async createUser(@Body() body: { email: string, roles: string[] }) {
    return createUser({ email: body.email, roles: body.roles });
  }

  @Put('/update/{id}/')
  public async updateUser(@Query('id') id: string, @Body() body: { email: string, roles: string[] }) {
    return updateUser({ id: Number(id), email: body.email, roles: body.roles });
  }

  @Delete('/delete/{id}/')
  public async deleteUser(@Query('id') id: string) {
    return deleteUser({ id: Number(id) });
  }

}

