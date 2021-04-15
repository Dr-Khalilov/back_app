module.exports = async (req, res, next) => {
  try {
    const {
      query: { limit, offset },
    } = req;
    req.pagination = {
      limit: limit > 50 || limit <= 0 ? limit : 5,
      offset: offset <= 0 ? 0 : offset,
    };
    next();
  } catch (err) {
    next(err);
  }
};
