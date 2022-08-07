import * as React from 'react';

import Agenda from '@/components/agenda/Agenda';
import RedAlert from '@/components/alerts/RedAlert';
import Jumbotron from '@/components/Jumbotron';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

export default function Article() {
  return (
    <Layout>
      <Seo templateTitle='Liberec 2022' />

      <main>
        <Jumbotron
          title='Město pod Ještědem'
          perex='Po loňském soustředění v jihočeské metropoli se letos vydáme opačným směrem. &#013;Do&nbsp;Jizerských hor. Do Liberce.'
          author='Stanislav Kliment'
          imagePath='/images/liberec-2022/01-liberec.jpg'
          imageSource='Radek TEOPE Drbohlav/liberecvminulostiasoucasnosti.cz'
        />

        <Agenda />

        <section className='container text-lg'>
          <span>
            Naším domovem se stane naprosté centrum jihočeské metropole —
            náměstí Přemysla Otakara II., druhé největší čtvercové náměstí v
            Česku. Všechno tu máme po ruce a obejdeme se bez autobusu. Bydlet
            budeme ve čtyřhvězdičkovém Grandhotelu Zvon (budova ze 17. století
            vpravo na snímku). Jedno je tak jisté: lepší ubytování jsme ještě
            neměli.
          </span>

          <RedAlert
            alertTitle='Důležité upozornění'
            alertBody={
              <>
                <span>
                  Při příjezdu do hotelu <b>je třeba prokázat bezinfekčnost</b>{' '}
                  jedním z uvedených způsobů:
                </span>
                <ul className='mb-9 list-inside list-disc'>
                  <li>před nejméně 14 dny ukončeným očkováním;</li>
                  <li>
                    negativním testem, kdy od odběru uplynulo nejvýše 72 hodin
                    (antigenní test) nebo 7 dní (PCR test);
                  </li>
                  <li>
                    potvrzením o prodělaném onemocnění covid-19 před nejvýše 180
                    dny.
                  </li>
                </ul>
                <span>
                  Počítejte prosím s tím, že kdo nesplňuje žádnou z uvedených
                  podmínek nebo ji nebude schopen <b>věrohodně doložit</b>,
                  hotel ho odmítne ubytovat a pobyt tím pro něj končí. Myslete
                  na to prosím a ušetřeme si zbytečné nepříjemnosti.
                </span>
              </>
            }
          />

          <div className='space-y-6'>
            <span>
              Náš pobyt je s polopenzí. Vzhledem k pozdnímu pátečnímu příjezdu
              však začínáme až sobotní snídaní. Páteční večeři je ale možné
              vyřešit i celkem nízkorozpočtově, například zalitím polévky či
              nudlí. Všichni, kdo s námi zůstanou po celý pobyt, na pokoji
              najdou menší kuchyňský kout se základním nádobím. Rychlovarnou
              konvici pak mají úplně všechny pokoje.
            </span>
            <span>
              Snídaně se podávají od 7 hodin (samozřejmě můžete přijít i
              později, ale od devíti zkoušíme).
            </span>
            <span>
              Večeře jsme rezervovali na 19. hodinu v hotelové restauraci.
              Nemáme společné jídlo. Vybírat můžete z jídelního lístku, na co
              máte chuť. (Počítejte ale s delším čekáním vzhledem k velikosti
              naší skupiny.) Orchestr vás zve na jedno hlavní jídlo a jeden
              nápoj (pivo nebo nealko).{' '}
              <b>Prosíme vás o dodržení limitu cca 300 korun.</b> Pití vyjde na
              50, takže na jídlo zbývá dalších 250 korun. Bez problému si tu za
              tuhle cenu vyberete.{' '}
              <b>Veškerá další útrata už jde na váš vlastní účet.</b> Žízeň tu
              hasí Pilsner Urquell z tanku nebo černý Kozel. Pro nezletilé velký
              výběr nealkoholických nápojů.
            </span>
            <span>
              Restaurace kombinuje českou a vídeňskou kuchyni. Vybírat můžete už
              teď,{' '}
              <a
                className='underline'
                href='https://zvon-cb.cz/wp-content/uploads/2021/04/Jidelni_listek_NET.pdf'
                target='_blank'
                rel='noreferrer'
              >
                nabídka je opravdu lákavá [PDF]
              </a>
              .
            </span>
            <span>
              Ve vaší režii tedy zůstává pouze páteční večeře, sobotní, pondělní
              (a případně úterní) oběd. Využít můžete některý z gastronomických
              tipů níže. Nedělní oběd plánujeme společný.
            </span>
          </div>

          <div className='mt-16'>
            <h2 className='mb-8 text-2xl font-normal'>Kde zaparkovat</h2>
            <span>
              Všichni, kdo dorazí vlastním autem, mají možnost odstavit ho na
              nedalekém Senovážném náměstí (250 metrů od hotelu). V době od
              pátku 20.00 hodin do pondělí 8.00 hodin zcela zdarma. V jiný čas
              přijde hodina parkování na 20 korun.
            </span>
          </div>

          <div className='mt-16 mb-16'>
            <NextImage
              src='/images/ceske-budejovice-2021/02-sal.jpg'
              className='mb-4 w-full'
              alt='Sál konzervatoře České Budějovice'
              layout='responsive'
              width={1920}
              height={1080}
            />
            <div className='container text-right'>
              <span className='font-brandon text-xs font-light'>
                FOTO Konzervatoř České Budějovice
              </span>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
