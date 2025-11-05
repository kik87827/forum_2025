import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail({ params }) {
  const db = (await connectDB).db("forum_2025");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(params.id) });
  return (
    <>
      <h4>상세페이지</h4>
      <h5>{result.title}</h5>
      <p>{result.content}</p>
    </>
  );
}
