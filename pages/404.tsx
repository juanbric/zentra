import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NotFound() {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 4000)
    }, [])
    
  return <h1>Página no encontrada. Redirigiéndose a inicio.</h1>;
}
