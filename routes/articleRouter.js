import {Router} from 'express'
import { getArticles } from '../controllers/articlesController.js';

const articleRouter = Router();

articleRouter.get('/', getArticles);

export default articleRouter;