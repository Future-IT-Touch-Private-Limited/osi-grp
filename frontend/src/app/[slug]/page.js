// app/singleproperties/[slug]/page.tsx

import React from 'react';
// import SlugComponent from './comp/Comp';
import axios from 'axios';

import { Realpage } from './realpage';
import { rooturl } from '../components/Store/Rooturl';
import Swal from 'sweetalert2';




export default function Page({ params: { slug } }) {
    return (
        <div>
            <Realpage slug={slug} />
        </div>
    );
}
