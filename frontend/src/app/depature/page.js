import React from "react";
import ProgressBar from "./ProgressBar";
import Calendar from "./Mycalander";

function page() {
  return (
    <div className="DepatureAndReturn ">
      <div>
        <ProgressBar />

        <div className="w-full bg-gray-100  h-40 flex flex-col justify-end items-center ">
          <div className="w-[70%] bg-white p-5 rounded border-b-2" >
            <h3> Select Tentative departure and return dates</h3>
          </div>
        </div>
        <div className="flex justify-center">
        <div className="w-[70%] bg-white border p-5 rounded">
            <div className="bg-[#FFFACB] py-4 rounded px-2 min-w-[80%]">
                <p className="text-sm"><span className="font-bold  text-base"> Unsure about your travel dates? </span> Don’t worry! Share a tentative date & our team will help you plan accordingly.</p>
            </div>
            <div className="w-[90%] border my-3 p-3">
                <div className="Tentative departure flex justify-between">
                   <div className="flex flex-col gap-3 w-[40%]">
                   <h2>Tentative departure</h2>
                   <div> 
                    <input type="text" placeholder="DD/MM/YYYY" className="border text-xs border-blue-500 w-[100%] px-3 py-3" />
                   </div>
                   </div>
                   <div className="flex flex-col gap-3 w-[40%]">
                   <h2>Tentative departure</h2>
                   <div> 
                    <input type="text" placeholder="DD/MM/YYYY" className="border text-xs border-blue-500 w-[100%] px-3 py-3" />
                   </div>
                   </div>
                </div>
                <Calendar/>
            </div>
        </div>
        </div>

     
      </div>
    </div>
  );
}

export default page;
