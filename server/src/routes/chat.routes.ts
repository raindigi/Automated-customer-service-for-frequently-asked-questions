import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import ShowQuestionService from '../services/ShowQuestionService ';
import DeleteQuestionService from '../services/DeleteQuestionService';
import UpdateQuestionService from '../services/UpdateQuestionService';
import CreateQuestionService from '../services/CreateQuestionService';

const chatRoutes = Router();

const createQuestionService = new CreateQuestionService();
const showQuestionService = new ShowQuestionService();
const deleteQuestionService = new DeleteQuestionService();
const updateQuestionService = new UpdateQuestionService();

chatRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      question: Joi.string().required(),
      answer: Joi.string().required(),
    },
  }),
  async (request, response) => {
    const { question, answer } = request.body;

    const chatQuestion = await createQuestionService.execute({
      question,
      answer,
    });

    return response.json(chatQuestion);
  },
);

chatRoutes.delete(
  '/',
  celebrate({
    [Segments.BODY]: {
      question: Joi.string().required(),
    },
  }),
  async (request, response) => {
    const { question } = request.body;

    await deleteQuestionService.execute({ question });

    return response.status(204).json();
  },
);

chatRoutes.put(
  '/',
  celebrate({
    [Segments.BODY]: {
      question: Joi.string().required(),
      old_question: Joi.string().required(),
      answer: Joi.string(),
    },
  }),
  async (request, response) => {
    const { answer, question, old_question } = request.body;

    const updatedQuestion = await updateQuestionService.execute({
      old_question,
      answer,
      question,
    });

    return response.json(updatedQuestion);
  },
);
chatRoutes.post(
  '/ask',
  celebrate({
    [Segments.BODY]: {
      question: Joi.string().required(),
    },
  }),
  async (request, response) => {
    const { question } = request.body;

    const answer = await showQuestionService.execute({ question });

    return response.json(answer);
  },
);

export default chatRoutes;
