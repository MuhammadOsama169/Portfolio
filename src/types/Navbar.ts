import { Dispatch, SetStateAction } from "react"

export type NavbarTypes = {
    IsTopOfPage:boolean
    selectedPage:string
    setSelectedPage:Dispatch<SetStateAction<string>>
}