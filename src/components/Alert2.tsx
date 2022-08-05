import * as React from 'react';

const Alert2 = () => {
  return (
    <div
      className='bg-red-light border-t-6 border-red font-brandon mt-16 mb-16 px-4 py-4 font-normal sm:px-8 sm:py-8 md:px-16 md:py-16'
      role='alert'
    >
      <span>
        Upozorňujeme na{' '}
        <b>
          povinnost pohybovat se v prostorách konzervatoře a hotelu se zakrytými
          dýchacími cestami
        </b>
        . Roušku či respirátor je možné odložit až po vstupu na pokoj či po
        usazení ke stolu v hotelové restauraci. Buďte prosím ohleduplní k
        ostatním hostům a řiďte se pokyny personálu. Děkujeme.
      </span>
    </div>
  );
};

export default Alert2;
