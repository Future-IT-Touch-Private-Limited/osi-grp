// app/singleproperties/[slug]/page.tsx

import React from 'react';
// import SlugComponent from './comp/Comp';
import axios from 'axios';

import { Realpage } from './realpage';
import { rooturl } from '../components/Store/Rooturl';
import Swal from 'sweetalert2';
export async function generateStaticParams() 
{
    try {
        const response = await axios.get(`${rooturl}/country`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

      
        const data = response.data;

     

        if (Array.isArray(data)) {

            return data.map((item) => {
              console.log(item.slug)
                return {
                    slug: item.slug, 
                };
            });
        } else {
            console.error('Expected an array of data but got:', data);
            return [];
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

export default function Page({ params: { slug } }) {
    return (
        <div>
            <Realpage slug={slug} />
        </div>
    );
}
