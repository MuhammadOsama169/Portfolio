import { Dispatch, SetStateAction } from "react"

export type LinkTypes ={
    page:string
    selectedPage:string
    setSelectedPage:Dispatch<SetStateAction<string>>,
    keyName:string
}