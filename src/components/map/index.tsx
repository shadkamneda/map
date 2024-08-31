import React, { useState , useEffect} from "react";
import Modal from "./modal";
import {Map} from './Map';
import SearchBox from "./searchBox";
import useGetCityInformation from "./services";

const ChooseLocation: React.FC = () => {
    const [showChatBox, setShowChatBox] = useState<boolean>(false);
    const [fulScreenMap,setFullScreenMap] = useState<boolean>(false);
    const [showSearchBox,setShowSearchBox] = useState<boolean>(false);
    const [searchedCityName,setSearchedCityName] = useState<string | null>(null)

    function fullscreen () { setFullScreenMap(true)}

    function fullscreenExit () { setFullScreenMap(false)}

    function search (name:string ) {
        setSearchedCityName(name);
        setShowSearchBox(false)
    }

    const  {data,invalidate}= useGetCityInformation (searchedCityName);
    // console.log(data?.value[0]?.geom?.coordinates,'asdajs')

    const cityInformation = data?.value[1]?.geom?.coordinates;

    console.log(cityInformation)
    
    useEffect(() => {
        if (searchedCityName) {
          invalidate();
        }
      }, [searchedCityName, invalidate]);
    
    //   useEffect(() => {
    //     if (selectedCategoryItems) {
    //       setProducts(selectedCategoryItems);
    //     }
    //   }, [selectedCategoryItems]);


    // console.log(searchedCityName);

    // const queryClient = useQueryClient()

    // const {data,} = useQuery ({
    //     queryKey:['map'],
    //     queryFn : async () => {
    //         const res = await axios.get(
    //              `https://map.ir/search/v2/autocomplete?text=${searchedCityName}`,
    //             {
    //               headers: {
    //                "x-api-key":
    //                "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImEwOGFkMDVhMzI2ZTcyZDlkMDUzNjJmY2NkYmZkMmY4MzFiMTNkMDM3ODY0NDMxYTA3YmMzMGUyOWI1YTk5NmJmOGM0MzMyOGZkMGIzNDg1In0.eyJhdWQiOiIyMDcyMyIsImp0aSI6ImEwOGFkMDVhMzI2ZTcyZDlkMDUzNjJmY2NkYmZkMmY4MzFiMTNkMDM3ODY0NDMxYTA3YmMzMGUyOWI1YTk5NmJmOGM0MzMyOGZkMGIzNDg1IiwiaWF0IjoxNjczOTM4ODQ1LCJuYmYiOjE2NzM5Mzg4NDUsImV4cCI6MTY3NjQ0NDQ0NSwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.FekMTze6YFADG0oRzgiSpPLGXeM1NJJdjWEIZV64q8qe5pfk1I3yfXeiRfDUni_B_DvN0bDmKu3vEKxM6bjf8EDY17KuiqO3HAZY7sleGq1OswwfnyB6sGodo6x6nR59tfBMucCwHow7-wY9ISbhBiqe8K1Hwa4w5mZqQ72YUTKuWS4kgnYKZh2R1hz6k9dISno4JN9jW_0VIq6H43sx24Mi0HGW_PP0_UthU6APTG5Xf_d5DDy5r7eViyhjOMkAtHOoaFRUUc0-r4mBzcyFCSahQJdpbNHRhqMy7v1Jkq-s4PuYSYw9U3O-Qpbt7RubO12LZFevqJWXkaiY3Xy2nA",
    //               },
    //             },);

    //         console.log(res?.data);
    //         return res?.data
            
    //     },
    // })

    // console.log(data)

    return (
        <>
        {
            fulScreenMap ? <Map  searchIcon={false}  showAndHideSearchBox={()=>setShowSearchBox(true)} iconName="fullscreen_exit" mapSizeHandler={fullscreenExit} styles='w-screen h-screen  relative shadow-lg rounded-lg' /> : 
            <div className="bg-gray-50 w-screen h-screen flex flex-row justify-between items-start p-[2.5%] relative" >
            <Map cityInformation={cityInformation} searchIcon={true} showAndHideSearchBox={()=>setShowSearchBox(true)} iconName="fullscreen" mapSizeHandler={fullscreen} styles='w-[45%] h-[400px]  relative shadow-lg rounded-lg' />
            <div className="w-[50%] h-[400px] flex flex-col justify-between items-end ">
                <div className="w-[95%] h-[100px] bg-green-100 rounded-lg shadow-lg border-green-150 border-[1px] border-solid "></div>
                <div className="w-[95%] h-[100px] bg-green-100 rounded-lg shadow-lg border-green-150 border-[1px] border-solid "></div>
                <div className="w-[95%] h-[100px] bg-green-100 rounded-lg shadow-lg border-green-150 border-[1px] border-solid "></div>
            </div>
            <span className="absolute left-0 bottom-0 m-[2rem] w-[100px] h-[100px] bg-green-500 cursor-pointer rounded-full shadow-lg " onClick={()=>setShowChatBox(true)}></span>
            {
                showChatBox ? <Modal closeModal={()=>setShowChatBox(false)} ><div> chat box</div></Modal> : null
            }
            {
                showSearchBox ? <Modal closeModal={()=>setShowSearchBox(false)} ><SearchBox searchCity={search}  /></Modal> : null
            }
        </div>
        } 
        </>
    )
}

export default ChooseLocation;