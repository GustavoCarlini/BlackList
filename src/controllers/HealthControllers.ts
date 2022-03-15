import {Request, Response} from 'express'
import {HealthServices} from '../services/HealthServices'

export class HealthControllers{
    async getStatus(req: Request, res: Response){
        const healthServices = new HealthServices()
        const status = await healthServices.getStatus()
        return res.json(status)
    }
}