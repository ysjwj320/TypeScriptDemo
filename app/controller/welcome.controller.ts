/* app/controllers/welcome.controller.ts */

// Import only what we need from express
import { Router, Request, Response } from 'express';
import {User} from '../entity'
import {UserService} from '../service'

// Assign router to the express.Router() instance
const router: Router = Router();

// The / here corresponds to the route that the WelcomeController
// is mounted on in the server.ts file.
// In this case it's /welcome
router.get('/', (req: Request, res: Response) => {
    // Reply with a hello world when no name param is provided
    res.send('Hello, World!');
});

router.get('/:name', (req: Request, res: Response) => {
    // Extract the name from the request parameters
    let { name } = req.params;
    let password = '32323232';
    let username = 'ysjwj320';
    let email = 'ysjwj320@163.com';
    UserService.addUser(name, username, password, email);

    // Greet the given name
    res.send(`Hello, ${name}`);
});

router.post('/:name', (req: Request, res: Response) => {
    // Extract the name from the request parameters
    let { name } = req.params;

});

// Export the express.Router() instance to be used by server.ts
export const WelcomeController: Router = router;