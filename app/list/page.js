import { connectDB } from "@/util/database";
import ListClient from "./ListClient";

export default async function List() {
  const db = (await connectDB).db("forum_2025");
  let result = await db.collection("post").find().toArray();
  return (
    <>
      <div className="list-bg">
        {result.map((item) => (
          <ListClient dataResult={item} />
        ))}
      </div>
    </>
  );
}
