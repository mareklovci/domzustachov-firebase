import * as React from 'react';

import clsxm from '@/lib/clsxm';

type RedAlertProps = {
  alertTitle?: string;
  alertBody: JSX.Element | JSX.Element[];
};

export default function RedAlert(props: RedAlertProps) {
  return (
    <div
      className={clsxm(
        'mt-16 mb-16 border-t-6 border-red bg-red-light px-4 py-4 font-brandon font-normal sm:px-8 sm:py-8 md:px-16 md:py-16'
      )}
      role='alert'
    >
      {props.alertTitle && (
        <span
          className={clsxm(
            'mb-9 block font-brandon text-[2.5rem] font-black uppercase text-red'
          )}
        >
          {props.alertTitle}
        </span>
      )}

      <div className={clsxm('font-brandon text-xl')}>{props.alertBody}</div>
    </div>
  );
}
