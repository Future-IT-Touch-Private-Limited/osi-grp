import React from "react";
import AllApplication from "./AllApplication";
function AllAplicationMap() {
  return (
    <>
      <div className="AllAplicationParent">
        <AllApplication /> <AllApplication />
        <div className="flex justify-center">
          <button className=" my-3 border-b-4 border-zinc-1000 text-gray-500 ">
            Load more
          </button>
        </div>
        <div className="Submitt Apllicationss">
          <div className="border bg-white ">
            <div className="YourDraftApplication border-b-2 p-3 ">
              <h4 className="text-light ">Submitted applications (0)</h4>
            </div>

            <div className="py-5">
               <h2 className="text-center"> No Application</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllAplicationMap;
