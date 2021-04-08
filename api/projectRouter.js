const router = require('express').Router();
const dataModel = require('./projectModel');

router.get('/', async(req, res, next) => {
    try {
        return await dataModel.getAll()
    } catch (err) {
        next(err);
    }
})

router.get('/:recipe_id', async(req, res, next) => {
    try {
        const id = await dataModel.getRecipeById(req.params)
        if (!id) {
            res.status(404).json({ message: 'id not found' })
        } else {
            res.status(200).json(id)
        }
    } catch (err) {
        next(err)
    }

})

module.exports = router;