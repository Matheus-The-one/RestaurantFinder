"use client"

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
   
     





      <> <div>


    <button onClick={()=>signOut(

    )}>signOut</button>
    
    
    
    
    
    
    
    
    
    
    
    </div></>
  );
}
