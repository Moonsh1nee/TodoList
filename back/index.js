import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { UserController, TaskController, ListController } from './controllers/index.js';
import { checkAuth, handleValidationErrors } from './utils/index.js';
import {
  registerValidation,
  loginValidation,
  taskCreateValidation,
  listCreateValidation,
} from './validations.js';

const app = express();
const port = 4005;

app.use(cors());
app.use(express.json());

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect('mongodb://localhost:27017/todoList');
  console.log('DB connected!');
}

app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login);
app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);

app.get('/lists', checkAuth, ListController.getAllLists);
app.get('/lists/:id', checkAuth, ListController.getOneList);
app.post(
  '/lists',
  checkAuth,
  listCreateValidation,
  handleValidationErrors,
  ListController.createList,
);
app.delete('/lists/:id', checkAuth, ListController.removeList);
app.patch(
  '/lists/:id',
  checkAuth,
  listCreateValidation,
  handleValidationErrors,
  ListController.updateList,
);

app.post(
  '/tasks',
  checkAuth,
  taskCreateValidation,
  handleValidationErrors,
  TaskController.createTask,
);
app.get('/tasks', checkAuth, TaskController.getAll);
app.get('/tasks/:id', checkAuth, TaskController.getOne);
app.delete('/tasks/:id', checkAuth, TaskController.remove);
app.patch(
  '/tasks/:id',
  checkAuth,
  taskCreateValidation,
  handleValidationErrors,
  TaskController.update,
);

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`App running on port ${port}.`);
});
