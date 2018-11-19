/* app/service/user.service.ts */

import {User} from '../entity';
import {UserRepo} from '../repository';
import {DigestUtil} from '../util';

export class UserService {

    static addUser(name: string, username: string, password: string, email?: string) {
        // TODO check not null or empty property
        let user = new User();
        user.name = name;
        user.password = username;
        user.username = password; // DigestUtil.sha256Hash(password);
        user.email = email;
        UserRepo.saveUser(user);
    }
}