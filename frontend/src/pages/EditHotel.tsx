import { useMutation, useQuery } from "react-query"
import { useNavigate, useParams } from "react-router-dom"
import * as apiClient from '../api-client'
import ManageHotelForm from "../form/ManageHotelForm/ManageHotelForm"
import { useAppContext } from "../contexts/AppContext"

const EditHotel =()=>{

    const { hotelId} =useParams()
   
    const { data: hotel } = useQuery(
        "fetchMyHotelById",
        () => apiClient.fetchMyHotelById(hotelId || ""),
        {
          enabled: !!hotelId,
        }
      );
       
      const {showToast} = useAppContext()
      const navigate = useNavigate()
      const {mutate,isLoading }=useMutation(apiClient.updateMyHotelId,{
          
        onSuccess:()=>{
          showToast({message:"Hotel Saved!",type:"SUCCESS"});

          navigate('/my-hotels');

     },
     onError:()=>{
          showToast({message:"Error  Hotel",type:"ERROR"})
     }


      })

      const handleSave = (hotelFormData:FormData)=>{
        mutate(hotelFormData)
      }

  return <ManageHotelForm hotel={hotel} onSave={handleSave} isLoading={isLoading}/>
}

export default EditHotel