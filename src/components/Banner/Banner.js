import React,{useState,useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Fruitsimg from '../../assest/fruits-banner.jpg'
import dairyimg from '../../assest/dairy-banner.jpg'
import seafoodimg from '../../assest/seafood-banner.jpg'


export default function Banner({title}) {
    const[categorytitle,setCategoryTitle]=useState(title)
    const[bannerimg,setBannerImg]=useState(null)
    


    useEffect(()=>{
        if(categorytitle==='fruitsandveggies'){
            setCategoryTitle('Fruits & Veggies')
            setBannerImg(Fruitsimg)
            
        }
        else if( categorytitle==='dairyandeggs'){
            setCategoryTitle('Dairy & Eggs')
            setBannerImg(dairyimg)
        }
        else if(categorytitle==='meatandseafood'){
            setCategoryTitle('Meat & Seafood')
            setBannerImg(seafoodimg)
        }
        else{
            setBannerImg(Fruitsimg)
        }

    },[categorytitle])
    return (
        <>
            <Navbar />
            <div className='bg-zinc-400 h-[300px] flex justify-center items-center bg-center bg-cover relative  ' style={{ backgroundImage: `url(${bannerimg})` }}>
                <div className='bg-white text-2xl font-bold p-5 rounded-xl  text-zinc-800 z-10'>
                    <h2>{categorytitle}</h2>
                </div>
                <div className='bg-black/30 inset-0 absolute'></div>
            </div>
        </>

    )
}
