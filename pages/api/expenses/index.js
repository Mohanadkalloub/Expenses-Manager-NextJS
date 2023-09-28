import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method == "GET" || req.method == "POST") {
    const client = await MongoClient.connect(
      "mongodb://127.0.0.1:27017/expenses-nextjs"
    );
    const db = client.db("expenses-nextjs");
    const collection = db.collection("Expenses");
    if (req.method == "GET") {
      const result = await collection.find().toArray();
      await client.close();
      res.status(200).json({ status: true, data: result });
    } else {
      const result = await collection.insertOne(req.body);
      await client.close();
      res.status(200).json({
        status: true,
        message: "save successflly",
        data: { ...req.body },
      });
    }
  } else {
    res.status(405).json({ status: false, message: "Method not allowed" });
  }
}
