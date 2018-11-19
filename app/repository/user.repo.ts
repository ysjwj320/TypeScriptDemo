/* app/repository/user.repo.ts */

import {User} from '../entity/User';
import {Repository} from '../config';

export class UserRepo {

    static saveUser(user: User) {
        
        Repository.connection.then(async connection => {
            let postRepository = connection.getRepository(User);
            postRepository
                .save(user)
                .then(post => console.log('user has been saved: ', user))
                .catch(error => console.log('Cannot save. Error: ', error));
        
        }, error => console.log('Cannot connect: ', error));
    }


    static getUser() {
        let result = [];
        Repository.connection.then(async connection => {
        
            let postRepository =  connection.getRepository(User);
        
            postRepository.findByIds([1])
                .then(users => console.log('user has been saved: ', users.length))
                .catch(error => console.log('Cannot select user. Error: ', error));
        
        }, error => console.log('Cannot connect: ', error));
    }

}