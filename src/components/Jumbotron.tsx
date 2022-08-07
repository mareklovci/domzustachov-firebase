import * as React from 'react';

import clsxm from '@/lib/clsxm';

import NextImage from '@/components/NextImage';

type JumbotronProps = {
  title: string;
  perex: string;
  author: string;
  imagePath: string;
  imageCaption?: string;
  imageSource: string;
};

export default function RedAlert(props: JumbotronProps) {
  return (
    <section>
      <div className={clsxm('container mb-[5.25rem] pt-[12.5rem] text-center')}>
        <h1 className={clsxm('mb-[7.5rem] font-argent text-8xl font-semibold')}>
          {props.title}
        </h1>
        <span className='mb-24 block font-brandon text-5xl font-light leading-[3.75rem]'>
          {props.perex}
        </span>
        <span className='block font-brandon text-2xl font-medium uppercase text-gray'>
          {props.author}
        </span>
      </div>

      <div>
        <NextImage
          src={props.imagePath}
          className='relative mb-4 w-full'
          alt={props.imageCaption ?? ''}
          layout='responsive'
          width={1920}
          height={1200}
        />
        <div className='container mb-5 text-right'>
          <span className='font-brandon text-base font-light'>
            FOTO {props.imageSource}
          </span>
        </div>
      </div>
    </section>
  );
}
