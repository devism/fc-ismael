import React from 'react';
import Hero from "../components/Hero";
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json())



export default function Home() {

    const { data, error } = useSWR('/api/cms', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>


    return (
        <div className="stars p-4  mx-auto w-screen font-sans ">

            <h1 className=" text-green-400 text-center text-4xl font-space mb-4 md:text-5xl md:text-left md:pl-12 lg:text-center">
                {data.header}
            </h1>

            <div className="md:grid md:grid-cols-2 md:items-center">
                <img className="flex p-5 w-4/5 sm:1/4 mx-auto md:row-span-2 " src={data.src}/>
            
                <p className="text-white mb-5 text-base text-center sm:text-xl  sm:max-w-sm sm:mx-auto  md:max-w-none md:text-left md:text-2xl lg:text-4xl lg:pr-3">{data.content}</p>

                <div>
                    <button className="text-gray-900 mx-auto flex bg-green-400 p-3 rounded-md text-2xl md:inline lg:text-4xl lg:p-5">{data.cta}</button>
                </div>    
            </div>    

           
        </div>
    )
}