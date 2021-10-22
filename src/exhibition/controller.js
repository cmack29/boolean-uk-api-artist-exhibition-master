const { address } = require("../utils/database")
const prisma = require("../utils/database")

const addExhibition = async (req, res) => {
    try{
        const newExhibition = await prisma.exhibition.create({
            data: {
                name: req.body.name,
                date: req.body.date,
                address: {
                    create: {
                        street: req.body.address.street,
                        city: req.body.address.city,
                        postcode: req.body.address.postcode
                    },
                },
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