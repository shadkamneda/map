import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

function useGetCityInformation (cityName) {
    const queryClient = useQueryClient()
    const {data,refetch} = useQuery({
        queryKey : ['searchCity'] , 
        queryFn : async () => {
            const response = await axios.get(
                `https://map.ir/search/v2/autocomplete?text=${cityName}`,
               {
                 headers: {
                  "x-api-key":
                  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImEwOGFkMDVhMzI2ZTcyZDlkMDUzNjJmY2NkYmZkMmY4MzFiMTNkMDM3ODY0NDMxYTA3YmMzMGUyOWI1YTk5NmJmOGM0MzMyOGZkMGIzNDg1In0.eyJhdWQiOiIyMDcyMyIsImp0aSI6ImEwOGFkMDVhMzI2ZTcyZDlkMDUzNjJmY2NkYmZkMmY4MzFiMTNkMDM3ODY0NDMxYTA3YmMzMGUyOWI1YTk5NmJmOGM0MzMyOGZkMGIzNDg1IiwiaWF0IjoxNjczOTM4ODQ1LCJuYmYiOjE2NzM5Mzg4NDUsImV4cCI6MTY3NjQ0NDQ0NSwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.FekMTze6YFADG0oRzgiSpPLGXeM1NJJdjWEIZV64q8qe5pfk1I3yfXeiRfDUni_B_DvN0bDmKu3vEKxM6bjf8EDY17KuiqO3HAZY7sleGq1OswwfnyB6sGodo6x6nR59tfBMucCwHow7-wY9ISbhBiqe8K1Hwa4w5mZqQ72YUTKuWS4kgnYKZh2R1hz6k9dISno4JN9jW_0VIq6H43sx24Mi0HGW_PP0_UthU6APTG5Xf_d5DDy5r7eViyhjOMkAtHOoaFRUUc0-r4mBzcyFCSahQJdpbNHRhqMy7v1Jkq-s4PuYSYw9U3O-Qpbt7RubO12LZFevqJWXkaiY3Xy2nA",
                 },
               },
           );
            return response?.data
        }
    })
    const invalidate = async ()=>{
        queryClient.invalidateQueries({queryKey : ['searchCity'],exact:true})
        const res = await refetch({exact:true});
        // console.log(res,'res');
        
    }
    

    return {data,invalidate}
}

export default useGetCityInformation;