import { AsyncRouter } from 'express-async-router';
import ping from '../services/ping';
import date from '../services/date';
import users from './users';

const router = AsyncRouter();

router.get('/ping', ping);
router.get('/date', date);

router.use('/users', users);

export default router;
