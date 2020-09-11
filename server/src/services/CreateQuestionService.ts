import Chat from '../schemas/Chat';
import ICreateChatQuestionDTO from '../dtos/ICreateChatQuestionDTO';

import AppError from '../errors/AppError';
import ChatRepository from '../repositories/ChatRepository';

class CreateQuestionService {
  public async execute({
    question,
    answer,
  }: ICreateChatQuestionDTO): Promise<Chat> {
    const chatRepository = new ChatRepository();

    if (question === '' || answer === '') {
      throw new AppError('Question and Answer must be filled');
    }

    const hasSameQuestion = await chatRepository.findByQuestion(question);

    if (hasSameQuestion) {
      throw new AppError('This question is alredy register');
    }

    const savedQuestion = await chatRepository.create({ question, answer });

    return savedQuestion;
  }
}

export default CreateQuestionService;
