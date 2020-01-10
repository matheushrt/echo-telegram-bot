import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.send('All set!');
});

export default router;
