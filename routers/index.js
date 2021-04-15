const { Router } = require('express');
const todoRouter = require('./todo');

const router = Router();

router.use('/tasks', todoRouter);

module.exports = router;
