export async function generateStaticParams() {
    const dats = [
     {
       'name': 'maan'
     }
    ]
 
   return dats
 }
 
 const BlogPage = ({ params }) => {
   const { slug } = params;
 
   return (
     <div className="Blog">
     <div  className="px-5 md:px-15 lg:px-20   py-1 md:py-16 ">
     <div>
         <div className="flex gap-5 flex-col  ">
           <h3 className="text-4xl  text-slate-600 font-bold text-center">
             {slug.split("-").join(" ").toUpperCase()} Visa Blogs
           </h3>
           <h4 className="text-xs font-bold text-[#F06439]">Recent Visa Posts</h4>
         </div>
         <div className="flex gap-5 mt-5">
           <div className="w-[60%] flex flex-col gap-5 border">
             <figure>
               <img className="w-full" src="/img/blogimg1.webp" alt="" />
             </figure>
             <h2 className="text-2xl font-bold">
               Essential Tips for Securing an Australia Tourist Visa from India
             </h2>
             <p className="text-xl">
               Explore the Key Information for Securing an Australia Tourist Visa
               from India. Understand the Application Process, Necessary
               Requirements, and Helpful Travel Tips.
             </p>
           </div>
           <div className="w-[40%] flex flex-col gap-5">
             <div className="flex border gap-3">
               <figure>
                 <img className="h-52 w-[350px]" src="/img/blogimg2.webp" alt="" />
               </figure>
               <div className=" flex flex-col gap-3">
                 <h4 className="font-bold">
                   All About Australia Transit Visa from India
                 </h4>
                 <p>Explore all about Australia transit visa from India</p>
               </div>
             </div>
             <div className="flex border gap-3">
               <figure>
                 <img className="h-52 w-[400px]" src="/img/blogimg3.webp" alt="" />
               </figure>
               <div className=" flex flex-col gap-3">
                 <h4 className="font-bold">
                   What You Must Know About Australia Business
                 </h4>
                 <p>Know what it takes to secure an Australia Business Visa.</p>
               </div>
             </div>
             <div className="flex border gap-3">
               <figure>
                 <img className="h-52 w-[400px]" src="/img/blogimg4.webp" alt="" />
               </figure>
               <div className=" flex flex-col gap-3 items-center">
                 <h4 className="font-bold">
                 Australia Visa Processing Time: Essential Guide for
                 </h4>
                 <p>Explore all about Australia transit visa from India</p>
               </div>
             </div>
          
           </div>
         </div>
       </div>
 
       <div className="Other Posts my-10 flex-flex-col gap-5">
       <h4 className="text-xs font-bold text-[#F06439] my-5">Other Posts</h4>
       <div className="grid grid-cols-4 gap-16">
             <div className="border ">
                 <figure>
                     <img className="w-full" src="/img/blogimg1.webp" alt="" />
                 </figure>
                 <div className="flex py-5  flex-col gap-2">
                 <h4 className="font-bold"> 
                 Essential Tips for Securing an Australia Tourist V...
                 </h4>
                 <p>Explore the Key Information for Securing an Austra...</p>
                 </div>
             </div>
             <div className="border ">
                 <figure>
                     <img className="w-full" src="/img/blogimg2.webp" alt="" />
                 </figure>
                 <div className="flex py-5  flex-col gap-2">
                 <h4 className="font-bold"> 
                 All About Australia Transit Visa from India...                </h4>
                 <p>Explore all about Australia transit visa from Indi....</p>
                 </div>
             </div>
             <div className="border ">
                 <figure>
                     <img className="w-full" src="/img/blogimg3.webp" alt="" />
                 </figure>
                 <div className="flex py-5  flex-col gap-2">
                 <h4 className="font-bold"> 
                 What You Must Know About Australia Business Visas...       </h4>
                 <p>Know what it takes to secure an Australia Business...</p>
                 </div>
             </div>
             <div className="border ">
                 <figure>
                     <img className="w-full" src="/img/blogimg4.webp" alt="" />
                 </figure>
                 <div className="flex py-5  flex-col gap-2">
                 <h4 className="font-bold"> 
                 Essential Tips for Securing an Australia Tourist V...
                 </h4>
                 <p>Explore the Key Information for Securing an Austra...</p>
                 </div>
             </div>
             <div className="border ">
                 <figure>
                     <img className="w-full" src="/img/blogimg1.webp" alt="" />
                 </figure>
                 <div className="flex py-5  flex-col gap-2">
                 <h4 className="font-bold"> 
                 Essential Tips for Securing an Australia Tourist V...
                 </h4>
                 <p>Explore the Key Information for Securing an Austra...</p>
                 </div>
             </div>
             <div className="border ">
                 <figure>
                     <img className="w-full" src="/img/blogimg2.webp" alt="" />
                 </figure>
                 <div className="flex py-5  flex-col gap-2">
                 <h4 className="font-bold"> 
                 All About Australia Transit Visa from India...                </h4>
                 <p>Explore all about Australia transit visa from Indi....</p>
                 </div>
             </div>
             <div className="border ">
                 <figure>
                     <img className="w-full" src="/img/blogimg3.webp" alt="" />
                 </figure>
                 <div className="flex py-5  flex-col gap-2">
                 <h4 className="font-bold"> 
                 What You Must Know About Australia Business Visas...       </h4>
                 <p>Know what it takes to secure an Australia Business...</p>
                 </div>
             </div>
             <div className="border ">
                 <figure>
                     <img className="w-full" src="/img/blogimg4.webp" alt="" />
                 </figure>
                 <div className="flex py-5  flex-col gap-2">
                 <h4 className="font-bold"> 
                 Essential Tips for Securing an Australia Tourist V...
                 </h4>
                 <p>Explore the Key Information for Securing an Austra...</p>
                 </div>
             </div>
       </div>
       </div>
     </div>
     </div>
   );
 };
 
 export default BlogPage;