const router = require('express').Router();

router.route('/fuel')
  .post((req, res, next) => {
    if (CheckFillUp(req.body)) {
      const fillup = req.body;
      fillup.time = Date.now();
      res.status(201).json(fillup);
    } else {
      res.status(400).json({});
    }
    next();
  });

router.route('/fuel/:id')
  .get((req, res, next) => {
    res.json({
      id: 1,
      price: 2.00,
      gallons: 8.43,
      mileage: 72200
    });
    next();
  });


function CheckFillUp(body) {
  if (!body.price) return false;
  if (!body.gallons) return false;
  if (!body.mileage) return false;
  return true;
}

module.exports = router;
