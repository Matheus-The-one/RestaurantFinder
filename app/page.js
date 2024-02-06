"use client"

import CategoryList from "@/components/Home/CategoryList";
import RangeSelect from "@/components/Home/RangeSelect";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session, isFetching } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isFetching && !session?.user) {
      router.push('/Login');
    }
  }, [isFetching, session, router]);


  
  return (
   
     

     <><div className="grid
     
     grid-col-1
     md:grid-cols-4
      h-screen">

      <div className=" p-5 ml-8">
        <CategoryList />
        <RangeSelect />

      </div>
      <div className=" col-span-3">
        second

      </div>




     </div>
     </>



  )
}
