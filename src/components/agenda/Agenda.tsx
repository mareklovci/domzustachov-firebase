import * as React from 'react';

import clsxm from '@/lib/clsxm';

import DayItem from '@/components/agenda/DayItem';

export default function Agenda() {
  return (
    <section className={clsxm('container mb-16')}>
      <h2
        className={clsxm(
          'mb-16 font-brandon text-[2.5rem] font-black uppercase'
        )}
      >
        Rychlý program
      </h2>
      <div
        className={clsxm(
          'flex gap-12 overflow-x-scroll scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-red-light'
        )}
      >
        <div className={clsxm('min-w-[19.375rem] max-w-[19.375rem]')}>
          <div className={clsxm('mb-9')}>
            <h3
              className={clsxm(
                'font-brandon text-[1.75rem] font-medium uppercase'
              )}
            >
              Úterý
            </h3>
            <span className={clsxm('font-brandon text-xl font-light')}>
              23. srpna 2022
            </span>
          </div>

          <DayItem />
          <DayItem />

          <DayItem
            title='Odjezd'
            timePlace={
              <span
                className={clsxm('block font-brandon text-base font-light')}
              >
                14.30 | Tachov
              </span>
            }
          />

          <DayItem
            title='Příjezd'
            timePlace={
              <span
                className={clsxm('block font-brandon text-base font-light')}
              >
                19.30 | Liberec
              </span>
            }
          />

          <DayItem
            title='Večeře'
            timePlace={
              <span
                className={clsxm('block font-brandon text-base font-light')}
              >
                <i>Individuálně</i>
              </span>
            }
          />

          <DayItem title='Volný program' />
        </div>
        <div className={clsxm('min-w-[19.375rem] max-w-[19.375rem]')}>
          <div className={clsxm('mb-9')}>
            <h3
              className={clsxm(
                'font-brandon text-[1.75rem] font-medium uppercase'
              )}
            >
              Středa
            </h3>
            <span className={clsxm('font-brandon text-xl font-light')}>
              24. srpna 2022
            </span>
          </div>

          <DayItem
            title='Snídaně'
            timePlace={
              <span
                className={clsxm('block font-brandon text-base font-light')}
              >
                07.30—08.30 | <i>Pytloun City Boutique Hotel</i>
              </span>
            }
          />

          <DayItem
            title='Zkouška DOM'
            timePlace={
              <span
                className={clsxm('block font-brandon text-base font-light')}
              >
                09.00—12.00 | <i>TUL, Komenského 314/2, P204</i>
              </span>
            }
            comment='» přesun 10 minut'
          />

          <DayItem
            title='Oběd'
            timePlace={
              <span
                className={clsxm('block font-brandon text-base font-light')}
              >
                <i>Individuálně</i>
              </span>
            }
          />

          <DayItem title='Volný program' />

          <DayItem
            title='Večeře'
            timePlace={
              <span
                className={clsxm('block font-brandon text-base font-light')}
              >
                17.30—20.00 | <i>Ristorante La Piazza</i>
              </span>
            }
            comment='» přesun 5 minut'
          />

          <DayItem
            title='Liberecké podzemí'
            timePlace={
              <span
                className={clsxm('block font-brandon text-base font-light')}
              >
                19.00 a 20.00 | <i>Kryt civilní obrany</i>
              </span>
            }
            comment='» přesun 5 minut'
          />
        </div>
        <div className={clsxm('min-w-[19.375rem] max-w-[19.375rem]')}>
          <div className={clsxm('mb-9')}>
            <h3
              className={clsxm(
                'font-brandon text-[1.75rem] font-medium uppercase'
              )}
            >
              Čtvrtek
            </h3>
            <span className={clsxm('font-brandon text-xl font-light')}>
              25. srpna 2022
            </span>
          </div>

          <DayItem
            title='Snídaně'
            timePlace={
              <span
                className={clsxm('block font-brandon text-base font-light')}
              >
                07.30—08.30 | <i>Pytloun City Boutique Hotel</i>
              </span>
            }
          />

          <DayItem
            title='Zkouška DOM'
            timePlace={
              <span
                className={clsxm('block font-brandon text-base font-light')}
              >
                09.00—12.00 | <i>TUL, Komenského 314/2, P204</i>
              </span>
            }
            comment='» přesun 10 minut'
          />
        </div>
        <div className={clsxm('min-w-[19.375rem] max-w-[19.375rem]')}>
          <div className={clsxm('mb-9')}>
            <h3
              className={clsxm(
                'font-brandon text-[1.75rem] font-medium uppercase'
              )}
            >
              Pátek
            </h3>
            <span className={clsxm('font-brandon text-xl font-light')}>
              26. srpna 2022
            </span>
          </div>

          <DayItem
            title='Snídaně'
            timePlace={
              <span
                className={clsxm('block font-brandon text-base font-light')}
              >
                07.30—08.30 | <i>Pytloun City Boutique Hotel</i>
              </span>
            }
          />

          <DayItem
            title='Zkouška DOM'
            timePlace={
              <span
                className={clsxm('block font-brandon text-base font-light')}
              >
                09.00—12.00 | <i>TUL, Komenského 314/2, P204</i>
              </span>
            }
            comment='» přesun 10 minut'
          />
        </div>
        <div className={clsxm('min-w-[19.375rem] max-w-[19.375rem]')}>
          <div className={clsxm('mb-9')}>
            <h3
              className={clsxm(
                'font-brandon text-[1.75rem] font-medium uppercase'
              )}
            >
              Sobota
            </h3>
            <span className={clsxm('font-brandon text-xl font-light')}>
              27. srpna 2022
            </span>
          </div>

          <DayItem
            title='Snídaně'
            timePlace={
              <span
                className={clsxm('block font-brandon text-base font-light')}
              >
                07.30—08.30 | <i>Pytloun City Boutique Hotel</i>
              </span>
            }
          />

          <DayItem
            title='Zkouška DOM'
            timePlace={
              <span
                className={clsxm('block font-brandon text-base font-light')}
              >
                09.00—12.00 | <i>TUL, Komenského 314/2, P204</i>
              </span>
            }
            comment='» přesun 10 minut'
          />
        </div>
        <div className={clsxm('min-w-[19.375rem] max-w-[19.375rem]')}>
          <div className={clsxm('mb-9')}>
            <h3
              className={clsxm(
                'font-brandon text-[1.75rem] font-medium uppercase'
              )}
            >
              Neděle
            </h3>
            <span className={clsxm('font-brandon text-xl font-light')}>
              28. srpna 2022
            </span>
          </div>

          <DayItem
            title='Snídaně'
            timePlace={
              <span
                className={clsxm('block font-brandon text-base font-light')}
              >
                07.30—08.30 | <i>Pytloun City Boutique Hotel</i>
              </span>
            }
          />

          <DayItem
            title='Zkouška DOM'
            timePlace={
              <span
                className={clsxm('block font-brandon text-base font-light')}
              >
                09.00—12.00 | <i>TUL, Komenského 314/2, P204</i>
              </span>
            }
            comment='» přesun 10 minut'
          />
        </div>
      </div>
    </section>
  );
}
