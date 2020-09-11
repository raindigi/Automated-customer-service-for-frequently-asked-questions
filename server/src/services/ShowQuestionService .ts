import Chat from '../schemas/Chat';

import AppError from '../errors/AppError';
import ChatRepository from '../repositories/ChatRepository';

interface IRequest {
  question: string;
}

class ShowQuestionService {
  public async execute({ question }: IRequest): Promise<Chat> {
    const chatRepository = new ChatRepository();

    if (question === '') {
      throw new AppError('Question must be filled!');
    }

    const answerQuestion = await chatRepository.findByQuestion(question);

    if (!answerQuestion) {
      throw new AppError('Question not found!');
    }

    return answerQuestion;
  }
}

export default ShowQuestionService;
