import { getMongoRepository, MongoRepository } from 'typeorm';
import Chat from '../schemas/Chat';
import ICreateChatQuestionDTO from '../dtos/ICreateChatQuestionDTO';

class ChatRepository {
  private ormRepository: MongoRepository<Chat>;

  constructor() {
    this.ormRepository = getMongoRepository(Chat);
  }

  public async create({
    question,
    answer,
  }: ICreateChatQuestionDTO): Promise<Chat> {
    const chatQuestion = this.ormRepository.create({
      question,
      answer,
    });

    await this.ormRepository.save(chatQuestion);

    return chatQuestion;
  }

  public async findByQuestion(question: string): Promise<Chat | undefined> {
    return this.ormRepository.findOne({
      where: {
        question,
      },
    });
  }

  public async deleteQuestion(question: string): Promise<void> {
    await this.ormRepository.deleteOne({ question });
  }

  public async save(data: Chat): Promise<Chat> {
    return this.ormRepository.save(data);
  }
}

export default ChatRepository;
