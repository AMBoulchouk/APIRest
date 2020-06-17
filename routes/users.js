import { AsyncRouter } from 'express-async-router';
import { getUsers, getUserById, createUser } from '../services/users';
import { auth } from '../middlewares/auth';

const router = AsyncRouter();

router.get('/', auth, getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);

export default router;
