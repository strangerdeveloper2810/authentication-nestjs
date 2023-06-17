import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto/';

@Controller('auth')
export class AuthController {
  // Auth service is automatically created when initializing the controller
  constructor(private authService: AuthService) {}
  //Some request from client
  @Post('register') //register a new user
  // regiser(@Req() request: Request) {
  //   // Now controller call "service"
  //   console.log(request.body);
  //   return this.authService.register();
  // }
  register(@Body() body: AuthDTO) {
    //body 'type must be a "Data Transfer object" - DTO

    console.log(body);
    return this.authService.register();
  }
  //POST: .../auth/login
  @Post('login')
  login() {
    return this.authService.login();
  }
}
