import React from 'react'
import { convertDateFormat } from '../helpers/utility';

export default function RightNewsComponent({item}) {
  return (
    <div className="col-span-12 mt-6 md:col-span-4" >
      <a href="#">
        <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
          {item?.title}
        </h3>
      </a>
      <p className="text-base text-[#292219]">{item?.description}</p>
      <p className="mt-5 text-base text-[#94908C]">
        {convertDateFormat(item?.publishedAt)}
      </p>
    </div>
  );
}
