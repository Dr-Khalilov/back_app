const todoRouter = require('express').Router({ mergeParams: true });
const TodoController = require('../controllers/todo.controller');
const paginate = require('../middlewares/paginate');

todoRouter
  .route('/')
  .post(TodoController.createTask)
  .get(paginate, TodoController.getAllTasks);

todoRouter
  .route('/:id')
  .patch(TodoController.updateTask)
  .delete(TodoController.deleteTask);

module.exports = todoRouter;
