import AppError from '../errors/AppError';
import ChatRepository from '../repositories/ChatRepository';

interface IRequest {
  question: string;
}

class DeleteQuestionService {
  public async execute({ question }: IRequest): Promise<void> {
    const chatRepository = new ChatRepository();

    const hasQuestion = await chatRepository.findByQuestion(question);

    if (!hasQuestion) {
      throw new AppError('Question not found');
    }

    await chatRepository.deleteQuestion(question);
  }
}

export default DeleteQuestionService;
