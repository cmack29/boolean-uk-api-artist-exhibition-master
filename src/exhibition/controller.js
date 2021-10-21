const prisma = require("../utils/database")

const addExhibition = async (req, res) => {
    try{
        const newExhibition = await prisma.exhibition.create({
            data: {
                ...req.body.exhibition
            },
            address: {
                create: [{
                    ...req.body.address
                }]
            },
            include: {
                address: true
            }
        })
        res.json({ data: newExhibition })
        console.log(newExhibition)
    }
    catch(error) {
        console.log(error)
        res.status(500).json({ error })
    }
}

module.exports = { addExhibition }