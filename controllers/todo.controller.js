const createError = require('http-errors');
const { Todo } = require('../models');

module.exports.createTask = async (req, res, next) => {
  try {
    const { body } = req;
    const task = await Todo.create(body);
    if (!task) {
      return next(createError(400, 'Todo cannot be create'));
    }
    res.status(200).send({ date: task });
  } catch (error) {
    next(error);
  }
};

module.exports.getAllTasks = async (req, res, next) => {
  try {
    const { pagination = {} } = req;
    const tasks = await Todo.findAll({
      ...pagination,
    });
    if (!tasks.length) {
      return next(createError(404, 'Tasks not founded'));
    }
    res.status(200).send({ date: tasks });
  } catch (error) {
    next(error);
  }
};

module.exports.updateTask = async (req, res, next) => {
  try {
    const {
      params: { id },
      body: { isDone },
    } = req;
    const [rowsCount, [updatedTask]] = await Todo.update(isDone, {
      where: { id },
      returning: true,
    });
    if (rowsCount === 0) {
      return next(createError(400, 'Task cannot be updated'));
    }
    res.status(200).send({ date: updatedTask });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteTask = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const rowsCount = await Todo.destroy({ where: { id } });
    if (rowsCount === 0) {
      return next(createError(404, 'Task cannot be deleted'));
    }
    res.status(200).end();
  } catch (error) {
    next(error);
  }
};
