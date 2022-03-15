import {Request, Response} from 'express'
import {BlackListServices} from '../services/BlackListServices'


export class BlackListControllers{ 
    async insert(req: Request, res: Response){
        const blackListServices = new BlackListServices()
        const {cpf} = req.body
        const newCpf = await blackListServices.insert(cpf)

        return res.json(newCpf)
    }

    async delete(req: Request, res: Response){
        const blackListServices = new BlackListServices()
        const {cpf} = req.params
        const deletedCpf = await blackListServices.delete(cpf)

        return res.json("cpf excluido")
    }

    async find(req: Request, res: Response){
        const blackListServices = new BlackListServices()
        const {cpf} = req.params
        const statusCpf = await blackListServices.find(cpf)

        return res.json(statusCpf)
    }
    

}

