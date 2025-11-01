import { connectDB } from "@/util/database";

export default async function Home() {
  const db = (await connectDB).db("forum_2025");
  let result = await db.collection('post').find().toArray();
  return (
    <div>
      안녕
    </div>
  );
}
