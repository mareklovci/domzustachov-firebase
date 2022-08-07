import * as React from 'react';

import clsxm from '@/lib/clsxm';

type DayItemProps = {
  title?: string;
  comment?: string;
  timePlace?: JSX.Element | JSX.Element[];
};

export default function DayItem(props: DayItemProps) {
  return (
    <div className={clsxm('mb-8 flex min-h-[5rem] flex-col justify-end')}>
      {props.comment && (
        <span
          className={clsxm('block font-brandon text-base font-light italic')}
        >
          {props.comment}
        </span>
      )}

      {props.timePlace && props.timePlace}

      {props.title && (
        <span
          className={clsxm('block font-brandon text-xl font-bold uppercase')}
        >
          {props.title}
        </span>
      )}
    </div>
  );
}
