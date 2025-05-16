import React from 'react';
import { Realpage } from './realpage';

export async function generateStaticParams() {
  const res = await fetch('https://jasskaran.in/api/v1/country');
  const data = await res.json();

  return data.map((item) => ({
    slug: item.slug || item.name.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export default function Page({ params: { slug } }) {
  return (
    <div>
      <Realpage slug={slug} />
    </div>
  );
}