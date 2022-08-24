const difficultyValidation = (req, res, next) => {
    const { difficulty } = req.body.description;
    const arr = ['Fácil', 'Médio', 'Difícil'];
  
    if (!arr.includes(difficulty)) {
      return res.status(400).json(
        { message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'' },
      );
    }
  
    next();
  };

  module.exports = difficultyValidation;