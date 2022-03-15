import { getCustomRepository } from 'typeorm';
import {BlackListRepositories} from '../repositories/BlackListRepositories'
import { validateCpf, removeMask } from '../utils/UtilsCpf'

export class BlackListServices {
    async insert(
        cpf: string
    )
    {
        const blackListRepositories = getCustomRepository(BlackListRepositories)
        cpf = removeMask(cpf)
        if(cpf.length != 11) throw new Error ('formato invalido')
        let validCpf = validateCpf(cpf)
        if(!validCpf) throw new Error ('cpf invalido')

        const cpfAlreadyExists = await blackListRepositories.findOne({cpf})

        if(cpfAlreadyExists) throw new Error ('cpf already exists in blacklist')
        
        const newCpf = blackListRepositories.create({cpf})
        await blackListRepositories.save(newCpf)
        return newCpf
    }

    async delete(
        cpf: string
    )
    {
        cpf = removeMask(cpf)
        const blackListRepositories = getCustomRepository(BlackListRepositories)
        if(!cpf || cpf.length != 11) throw new Error ('cpf invalido')

        const cpfAlreadyExists = await blackListRepositories.findOne({cpf})

        if(!cpfAlreadyExists) throw new Error ('cpf not exists in blacklist')
        const deletedCpf = await blackListRepositories.delete({cpf})
        return deletedCpf 
    }

    async find(
        cpf: string
    )
    {
        cpf = removeMask(cpf)
        const blackListRepositories = getCustomRepository(BlackListRepositories)
        if(!cpf || cpf.length != 11) throw new Error ('cpf invalido')

        const cpfAlreadyExists = await blackListRepositories.findOne({cpf})
        return cpfAlreadyExists ? 'BLOCK' : 'FREE' 
    }
}