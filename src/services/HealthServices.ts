import { getCustomRepository } from 'typeorm';
import {BlackListRepositories} from '../repositories/BlackListRepositories'
import {FormatTime} from '../utils/FormatTime'
import {readStats} from '../middleware/CountMiddleware'

export class HealthServices{
    async getStatus(){
        const blackListRepositories = getCustomRepository(BlackListRepositories)
        const totalCpf = await blackListRepositories.count()

        const upTime = FormatTime(process.uptime())
        const totalRequests = readStats()
        return {totalCpf, upTime, totalRequests}
        

    }
}