import { useEffect, useState } from "react"

export const useIsMounted = () => {

    const [isMounted, setisMounted] = useState<boolean>(false)

    useEffect(() => {
        setisMounted(true)
    })

    return {
        isMounted
    }
}
