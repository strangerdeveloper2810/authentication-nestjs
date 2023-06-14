import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  // Auth service is automatically created when initializing the controller
  constructor(private authService: AuthService) {}
  //Some request from client
  @Post('register') //register a new user
  regiser() {
    // Now controller call "service"
    return this.authService.register();
  }
  //POST: .../auth/login
  @Post('login')
  login() {
    return this.authService.login();
  }
}
