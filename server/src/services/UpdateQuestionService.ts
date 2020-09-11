import AppError from '../errors/AppError';
import Chat from '../schemas/Chat';
import ChatRepository from '../repositories/ChatRepository';

interface IRequest {
  old_question: string;
  question: string;
  answer?: string;
}

class UpdateQuestionService {
  public async execute({
    old_question,
    answer,
    question,
  }: IRequest): Promise<Chat> {
    const chatRepository = new ChatRepository();

    const hasQuestion = await chatRepository.findByQuestion(old_question);

    if (!hasQuestion) {
      throw new AppError('Old question not found');
    }

    if (answer) {
      hasQuestion.answer = answer;
    }

    hasQuestion.question = question;

    const updatedQuestion = await chatRepository.save(hasQuestion);

    return updatedQuestion;
  }
}

export default UpdateQuestionService;
