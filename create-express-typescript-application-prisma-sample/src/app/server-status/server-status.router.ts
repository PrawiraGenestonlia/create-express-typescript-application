import { Controller, Get, Route, Tags } from 'tsoa';
import { getRoutes } from './server.status.service';

@Tags('Server Status')
@Route('/api/server-status')
export class ServerStatusController extends Controller {

  @Get('/')
  public async getServerStatus(): Promise<{ status: string, serverTime: string }> {
    return {
      "status": "server is running",
      "serverTime": new Date().toISOString()
    }
  }

  @Get('/routes')
  public async getServerRoutes(): Promise<any> {
    return getRoutes()
  }

}