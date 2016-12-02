const router = require('express').Router;

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


function CheckFillUp(body) {
  if (!body.price) return false;
  if (!body.gallons) return false;
  if (!body.mileage) return false;
  return true;
}
