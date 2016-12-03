const mongoose = require('mongoose');
const router = require('express').Router();

const Fillup = mongoose.model('Fillup');

router.route('/fuel')
  .get((req, res) => {
    Fillup.find((err, fillups) => {
      /* istanbul ignore if */
      if (err) {
        res.status(500).json({
          msg: 'Error retreiving fillups, Please try again'
        });
      } else {
        res.json(fillups);
      }
    });
  })
  .post((req, res) => {
    if (CheckFillUp(req.body)) {
      var fillup = new Fillup(req.body);

      fillup.save((err) => {
        /* istanbul ignore if */
        if (err) {
          res.status(500).json({
            msg: 'An error occurred while saving your fillup, please try again'
          });
        } else {
          res.status(201).json(fillup);
        }
      })
    } else {
      res.status(400).json({});
    }
  });

router.route('/fuel/:id')
  .get((req, res, next) => {
    Fillup.findById(req.params.id, (err, fillup) => {
      if (err) {
        res.status(500).json({
          msg: 'An error has occurred, Please try again.'
        });
      } else {
        res.json(fillup);
      }
      next();
    });
  });


function CheckFillUp(body) {
  if (!body.price) return false;
  if (!body.gallons) return false;
  if (!body.mileage) return false;
  return true;
}

module.exports = router;
