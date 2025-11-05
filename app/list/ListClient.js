"use client";

import { useRouter } from "next/navigation";

export default function ListClient({ dataResult }) {
  const router = useRouter();
  return (
    <div
      className="list-item"
      key={dataResult._id.toString()}
      onClick={() => router.push(`/detail/${dataResult._id.toString()}`)}
    >
      <h4>{dataResult.title}</h4>
      <p>{dataResult.content}</p>
      <p>{dataResult.date}</p>
    </div>
  );
}
