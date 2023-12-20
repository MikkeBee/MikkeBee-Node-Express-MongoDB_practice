module.exports = (fn) => {
  return (req, res, next) => {
    // fn(req, res, next).catch((err) => next(err));
    //the code below allows us to get rid of the catch blocks
    fn(req, res, next).catch(next);
  };
};
