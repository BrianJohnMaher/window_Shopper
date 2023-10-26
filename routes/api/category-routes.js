const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({
      include: Product
    });

    res.json(categories);

  } catch (err) {
    res.status(503).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const id = req.params.id;

  try {
    const category = await Category.findByPk(id, {
      include: Product
    });

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    
    res.json(category);

  } catch (err) {
    res.status(503).json(err);
  }
});
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
