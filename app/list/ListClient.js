"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ListClient({ dataResult }) {
  const router = useRouter();
  let pathName = usePathname();
  let searchParams = useSearchParams();
  return (
    <div
      className="list-item"
      key={dataResult._id.toString()}
      onClick={() => router.push(`/detail/${dataResult._id.toString()}`)}
      prefetch={true}
    >
      <h4>{dataResult.title}</h4>
      <p>{dataResult.content}</p>
      <p>{dataResult.date}</p>

      <p>pathName : {pathName}</p>
      <p>searchParams : {searchParams}</p>

    </div>
  );
}
