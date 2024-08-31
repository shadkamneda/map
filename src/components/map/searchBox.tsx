import React from 'react';
import { Formik } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
    cityName : Yup.string().required(" نام شهر را وارد کنید")
})

interface searchBoxProps {
    searchCity : (name:string) => void
}

const SearchBox:React.FC<searchBoxProps> = ({ searchCity}) => {

    return (
        <Formik
        initialValues={{
            cityName : '',
        }}

        onSubmit={(values) => {
            // console.log(values);
        }}

        validationSchema={schema}
        
        >
            {
                ({values, errors,handleBlur,handleChange, handleSubmit})=>(
                    <form   onSubmit={handleSubmit}>
                        <div className='flex flex-col justify-center items-center w-full h-full'>
                            <div className='flex flex-row-reverse justify-center items-center  w-ful '>
                                <label htmlFor='cityName'>نام شهر</label>
                                <input onChange={
                                    handleChange
                                }  
                                className='border-[1px] border-solid border-gray-300 rounded-lg m-2 p-1 shadow-xl text-end outline-none ' value={values.cityName} onBlur={handleBlur} id="cityName" name="cityName" type="text" />
                                {errors && <div className='text-red-600 text-[13px] '> {errors.cityName}</div>}
                            </div>
                           <button onClick={() => searchCity(values.cityName)}  className='bg-green-600 p-2 m-2 w-[94%] text-white rounded-lg' type='button' >جستجو</button>
                        </div>

                    </form>
                )
            }
        </Formik>
    )
}

export default SearchBox;