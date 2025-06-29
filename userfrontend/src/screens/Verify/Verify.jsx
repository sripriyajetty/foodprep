import {useContext} from 'react'
import {useSearchParams} from 'react-router-dom'
import './Verify.css'
import {StoreContext} from '../../context/StoreContext'
import Loader from '../../components/Loader/Loader'

const Verify = () => {
    const [searchParams,setSearchParams] = useSearchParams()

    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")

    console.log(success,orderId)
    const{url} = useContext(StoreContext)
  return (
    <Loader/>
  )
}

export default Verify