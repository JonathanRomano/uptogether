export default async function handler(req, res) {
	const { MongoClient } = require('mongodb')

    const mongo_user = process.env.MONGO_DB_USER
    const mongo_password = process.env.MONGO_DB_PASSWORD
    
    const mongo_uri = `mongodb+srv://${mongo_user}:${mongo_password}@cluster0.szi09.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

    const client = new MongoClient(mongo_uri, {useNewUrlParser: true})

	const mensage = {
		name: req.body.name,
		email: req.body.email,
		mensage: req.body.mensage
	}

	await client.connect()
	await client.db("Cluster0").collection("teste").insertOne(mensage)

	res.status(200).json({})


}