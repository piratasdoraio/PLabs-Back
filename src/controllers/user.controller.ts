import { UserService } from "src/services/user.service";

export class UserController {

    constructor(private readonly userService: UserService) {}
    
}