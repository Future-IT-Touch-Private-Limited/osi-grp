'use client'

import React,{ useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallBlog } from "../components/Store/Slices/allBlogslice";
import { storageurl } from "../components/Store/Rooturl";




export default function Page() {
  const dispatch =useDispatch();
   const state=useSelector(state=>state.allBlog);
  const [blogdata,setblogdata]=useState();

  useEffect(()=>{dispatch(getallBlog())},[])
  useEffect(()=>{setblogdata(state.data)},[state])
      const num=[Math.floor(Math.random() * (blogdata && blogdata.length)),Math.floor(Math.random() * (blogdata && blogdata.length)),Math.floor(Math.random() * (blogdata && blogdata.length)),Math.floor(Math.random() * (blogdata && blogdata.length))]



  return (
    <div className="Blog">
    <div  className="px-5 md:px-15 lg:px-20   py-1 md:py-16 ">
    <div>
        <div className="flex gap-5 flex-col  ">
          <h3 className="text-4xl  text-slate-600 font-bold text-center">
            All Visa Blogs
          </h3>
          <h4 className="text-xs font-bold text-[#F06439]">Recent Visa Posts</h4>
        </div>
        <div className="flex gap-5 mt-5">
         { blogdata &&  <div className="w-[60%] flex flex-col gap-5 border">
            <figure>
              <img className="w-full" src={`${storageurl}/${blogdata &&blogdata[ num[0]] && blogdata[ num[0]].image}`} alt="" />
            </figure>
          <div className="px-5 flex flex-col gap-3 ">

          <h2 className="text-2xl font-bold">
            {blogdata &&blogdata[ num[0]] && blogdata[ num[0]].heading}
            </h2>
            <p className="text-xl">
             {blogdata &&blogdata[ num[0]] && blogdata[ num[0]].content}
            </p>
          </div>
          </div>}
          <div className="w-[40%] flex flex-col gap-5">
            <div className="flex border gap-3">
              <figure className="w-1/2">
                <img className="h-52 w-full" src={`${storageurl}/${blogdata &&blogdata[ num[1]] && blogdata[ num[1]].image}`} alt="" />
              </figure>
              <div className=" flex flex-col gap-3">
                <h4 className="font-bold">
                {blogdata &&blogdata[ num[1]] && blogdata[ num[1]].heading}
                </h4>
                <p> {blogdata &&blogdata[ num[1]] && blogdata[ num[1]].content}</p>
              </div>
            </div>
            <div className="flex border gap-3">
              <figure className="w-1/2">
                <img className="h-52 w-full" src={`${storageurl}/${blogdata &&blogdata[ num[2]] && blogdata[ num[2]].image}`} alt="" />
              </figure>
              <div className=" flex flex-col gap-3">
                <h4 className="font-bold">
                {blogdata &&blogdata[ num[2]] && blogdata[ num[2]].heading}
                </h4>
                <p> {blogdata &&blogdata[ num[2]] && blogdata[ num[2]].content}.</p>
              </div>
            </div>
            <div className="flex border gap-3">
              <figure className="w-1/2">
                <img className="h-52 w-full" src={`${storageurl}/${blogdata &&blogdata[ num[3]] && blogdata[ num[3]].image}`} alt="" />
              </figure>
              <div className=" flex flex-col gap-3 items-center">
                <h4 className="font-bold">
                {blogdata &&blogdata[ num[3]] && blogdata[ num[3]].heading}
                </h4>
                <p> {blogdata &&blogdata[ num[3]] && blogdata[ num[3]].content}</p>
              </div>
            </div>
         
          </div>
        </div>
      </div>

      <div className="Other Posts my-10 flex-flex-col gap-5">
      <h4 className="text-xs font-bold text-[#F06439] my-5">Other Posts</h4>
      <div className="grid grid-cols-4 gap-16">

        {blogdata && blogdata.map((info,ind)=>{return(
          <div className="border-2 h-[25rem] " key={ind}>
          <figure className="h-4/6">
              <img className="w-full h-full" src={`${storageurl}/${info.image}`} alt="" />
          </figure>
          <div className="flex py-5  px-3 flex-col gap-2 ">
          <h4 className="font-bold"> 
         {info.heading}
          </h4>
          <p className="text-ellipsis w-full text-nowrap overflow-hidden ">{info.content}</p>
          </div>
      </div>
        )}) }
            
      
      </div>
      </div>
    </div>
    </div>
  );
}
