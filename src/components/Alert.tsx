import * as React from 'react';

const Alert = () => {
  return (
    <div
      className='bg-red-light border-t-6 border-red font-brandon mt-16 mb-16 px-4 py-4 font-normal sm:px-8 sm:py-8 md:px-16 md:py-16'
      role='alert'
    >
      <span className='text-red mb-9 block text-2xl font-black uppercase'>
        Důležité upozornění
      </span>
      <span>
        Při příjezdu do hotelu <b>je třeba prokázat bezinfekčnost</b> jedním z
        uvedených způsobů:
      </span>
      <ul className='mb-9 list-inside list-disc'>
        <li>před nejméně 14 dny ukončeným očkováním;</li>
        <li>
          negativním testem, kdy od odběru uplynulo nejvýše 72 hodin (antigenní
          test) nebo 7 dní (PCR test);
        </li>
        <li>
          potvrzením o prodělaném onemocnění covid-19 před nejvýše 180 dny.
        </li>
      </ul>
      <span>
        Počítejte prosím s tím, že kdo nesplňuje žádnou z uvedených podmínek
        nebo ji nebude schopen
        <b>věrohodně doložit</b>, hotel ho odmítne ubytovat a pobyt tím pro něj
        končí. Myslete na to prosím a ušetřeme si zbytečné nepříjemnosti.
      </span>
    </div>
  );
};

export default Alert;
