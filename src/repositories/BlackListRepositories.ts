import { EntityRepository, Repository } from 'typeorm';
import { BlackList } from '../entities/BlackList';

@EntityRepository(BlackList)
export class BlackListRepositories extends Repository<BlackList> {

}