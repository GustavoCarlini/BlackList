import { Router } from 'express';
import {BlackListControllers} from './controllers/BlackListControllers'
import {HealthControllers} from './controllers/HealthControllers'
import {requestMiddleware} from './middleware/CountMiddleware'


export const router = Router();

const blackListControllers = new BlackListControllers()
const healthControllers = new HealthControllers()



router.post('/blackList', requestMiddleware, blackListControllers.insert);

router.delete('/blackList/:cpf', requestMiddleware ,blackListControllers.delete);

router.get('/blackList/:cpf', requestMiddleware , blackListControllers.find);

router.get('/health', requestMiddleware ,healthControllers.getStatus);