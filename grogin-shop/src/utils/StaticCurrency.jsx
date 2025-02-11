import { useContext } from "react"
import { CurrencyContext } from "../context/CurrencyContext"

const StaticCurrency = ({usd, azn})=>{
    const [currency]=useContext(CurrencyContext)
    return(
        <>
            {currency==="USD"?usd:azn}
        </>
    )
}

export default StaticCurrency;