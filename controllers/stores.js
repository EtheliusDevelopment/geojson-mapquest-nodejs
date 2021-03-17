const Store = require ('../models/Store')

// @des Get all stores
// route GET /api/v1/stores
// @ access Public

exports.getStores = async (req, res, next) => {
    try {
        const stores  = await Store.find();


        return res.status(200).json({
            success : true,
            count: stores.length,
            data: stores
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error : 'Server Error'})
    }
};

// @des Create a store
// route POST /api/v1/stores
// @ access Public

exports.addStores = async (req, res, next) => {
    try {
        console.log(req.body);
        const store = await Store.create(req.body);

        return res.status(200).json({
            success : true,
            data: store
        })

    } catch (error) {
        console.error(error);
        if (error.code === 11000) {
            return res.status(400).json({ error : 'This Store already exists'})
        };
        res.status(500).json({ error : 'Server Error'})
    }
};

