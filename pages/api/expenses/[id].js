import { MongoClient, ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == "DELETE") {
    const client = await MongoClient.connect(
      "mongodb://127.0.0.1:27017/expenses-nextjs"
    );
    const db = await client.db("expenses-nextjs");
    const collection = await db.collection("Expenses");
    const result = await collection.deleteOne({
      _id: new ObjectId(req.query.id),
    });
    const deleted = result.deletedCount == 1;
    await client.close();
    res.status(deleted ? 200 : 404).json({
      status: deleted,
      message: deleted ? "Deleted Succssfuly" : "Deleted faild !",
    });
  } else {
    res.status(405).json({ status: false, message: "Method not allowed" });
  }
}
