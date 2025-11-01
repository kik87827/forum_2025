import { connectDB } from "@/util/database";

export default async function List() {
  const db = (await connectDB).db("forum_2025");
  let result = await db.collection('post').find().toArray();
  return (
    <>
      <div className="list-bg">
        {
          result.map((item) => {
            return (
              <div className="list-item" key={item._id}>
                <h4>{item.title}</h4>
                <p>{item.content}</p>
                <p>{item.date}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}