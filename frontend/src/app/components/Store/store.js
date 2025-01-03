"use client"

import { configureStore } from "@reduxjs/toolkit"
import countryslices from "./Slices/countryslices"
import singleCountryvisa from "./Slices/singlecountryvisa"
import singlecountry from "./Slices/singlecountryslice"
import testimonial from "./Slices/testimonialslice"
import allBlog from "./Slices/allBlogslice"

export const store=configureStore({
    reducer:{countryslices,singleCountryvisa,singlecountry,testimonial,allBlog},
   
})

