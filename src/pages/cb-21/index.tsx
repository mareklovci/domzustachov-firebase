import * as React from 'react';

import RedAlert from '@/components/alerts/RedAlert';
import Jumbotron from '@/components/Jumbotron';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

export default function Article() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo templateTitle='České Budějovice 2021' />

      <main>
        <Jumbotron
          title='Město, kde by chtěl žít každý'
          perex='Nadcházející víkend strávíme v Českých&nbsp;Budějovicích. Někteří z nás poprvé, jiní se tu usadili natrvalo. Přinášíme informace k&nbsp;pobytu i&nbsp;tipy pro volný čas. Pryč se odtud nikomu chtít nebude.'
          author='Daniela Tůmová (Stručková), Stanislav Kliment'
          imagePath='/images/ceske-budejovice-2021/01-namesti.jpg'
          imageCaption='Náměstí České Budějovice'
          imageSource='kasakphoto/Shutterstock'
        />

        <section className='container'>
          <span className='font-brandon text-xl'>
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
          <div className='space-y-6 font-brandon text-xl'>
            <p>
              Náš pobyt je s polopenzí. Vzhledem k pozdnímu pátečnímu příjezdu
              však začínáme až sobotní snídaní. Páteční večeři je ale možné
              vyřešit i celkem nízkorozpočtově, například zalitím polévky či
              nudlí. Všichni, kdo s námi zůstanou po celý pobyt, na pokoji
              najdou menší kuchyňský kout se základním nádobím. Rychlovarnou
              konvici pak mají úplně všechny pokoje.
            </p>
            <p>
              Snídaně se podávají od 7 hodin (samozřejmě můžete přijít i
              později, ale od devíti zkoušíme).
            </p>
            <p>
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
            </p>
            <p>
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
            </p>
            <p>
              Ve vaší režii tedy zůstává pouze páteční večeře, sobotní, pondělní
              (a případně úterní) oběd. Využít můžete některý z gastronomických
              tipů níže. Nedělní oběd plánujeme společný.
            </p>
          </div>
          <div className='mt-16 space-y-3 font-brandon text-xl'>
            <h2 className='mb-8 font-argent text-4xl font-normal'>
              Kde zaparkovat
            </h2>
            <p>
              Všichni, kdo dorazí vlastním autem, mají možnost odstavit ho na
              nedalekém Senovážném náměstí (250 metrů od hotelu). V době od
              pátku 20.00 hodin do pondělí 8.00 hodin zcela zdarma. V jiný čas
              přijde hodina parkování na 20 korun.
            </p>
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
            <div className='text-right'>
              <span className='font-brandon text-base font-light'>
                FOTO Konzervatoř České Budějovice
              </span>
            </div>
          </div>
          <p className='font-brandon text-xl'>
            Protože je náš pobyt částečně také pracovní, zkoušky budou probíhat
            dopoledne (od 9 do 12 hodin) i odpoledne (od 14 do 16 hodin) v
            moderně zrekonstruovaném koncertním sále{' '}
            <b>českobudějovické konzervatoře</b> (Kanovnická 391/22). Pěšky je
            to z hotelu pouhých 200 metrů. Kanovnická ulice vybíhá z toho rohu
            náměstí, kde stojí Černá věž s přilehlým kostelem sv. Mikuláše.
            Nemůžete minout.
          </p>
          <RedAlert
            alertBody={
              <span>
                Upozorňujeme na{' '}
                <b>
                  povinnost pohybovat se v prostorách konzervatoře a hotelu se
                  zakrytými dýchacími cestami
                </b>
                . Roušku či respirátor je možné odložit až po vstupu na pokoj či
                po usazení ke stolu v hotelové restauraci. Buďte prosím
                ohleduplní k ostatním hostům a řiďte se pokyny personálu.
                Děkujeme.
              </span>
            }
          />
          <div className='mb-16 space-y-3 font-brandon text-xl'>
            <h2 className='mb-8 font-argent text-4xl font-normal'>
              Kde se najíst, kam na pivo
            </h2>
            <p>
              Kdo nebyl v <b>Masných krámech</b> (Krajinská 31/9), nebyl v
              Budějcích! Klasická restaurace pro turisty v historických
              kulisách. Na čepu je samozřejmě Budvar. Vyzkoušet tu můžete
              kvasnicový ležák Kroužek, který běžně v obchodě neseženete.
            </p>
            <p>
              Příjemné posezení s výhledem na slepé rameno řeky Malše nabízí
              rodinný hotel s restaurací <b>Klika</b> (Hroznová 487/25). Určitě
              nevynechte pravou jihočeskou kulajdu se zastřeným vejcem. Ochutnat
              tu můžete pivo z Prachatic.
            </p>
            <p>
              Pokud by se mezi námi našel skalní fanoušek Budweiser Budvaru,
              čeká na něj <b>Budvarka</b> (Karla IV. 8—10), značková restaurace
              nejznámější místní firmy nabízející skutečně stylový interiér.
            </p>
            <p>
              Za doporučení rozhodně stojí restaurace s vlastním minipivovarem{' '}
              <b>Krajinská 27</b>. Na výběr máte z několika druhů piv, od
              slabších až po hodně silná. Elegantní možnost, jak se vyhnout
              Budvaru a zkusit něco nového. Pivo si můžete odnést i s sebou v
              lahvích, třeba jako dárek domů.
            </p>
            <p>
              Kdo chce zapůsobit na svůj protějšek, pozve ho do restaurace{' '}
              <b>U Solné brány</b> (Radniční 138). Patří k tomu nejlepšímu na
              místní gastronomické scéně. Noblesní prostředí, vytříbená kuchyně.
              Při placení romantika rázem vezme za své, ale každý špás holt něco
              stojí.
            </p>
            <p>
              Za větší exotikou zajděte do restaurace <b>Gateway of India</b>{' '}
              (Piaristická 22/8). Trefíte sem bezpečně. Vůně karí se táhne celou
              ulicí.
            </p>
            <p>
              Jestli máte jen malý hlad, zkuste <b>Soupculture</b> (Karla IV.
              92). Polévku tu dostane do kelímku, který nakonec taky sníte.
            </p>
            <p>
              Když už jste přijeli, chtělo by to ochutnat místní specialitu.{' '}
              <b>Vypečený okno</b> (Hroznová 10) vám nabídne pravý zelňák, tedy
              jihočeskou „pizzu“ s kysaným zelím.
            </p>
            <p>
              Kdo by měl chuť na burger a plzeňskou dvanáctku, otevře{' '}
              <b>Modrý dveře</b> (Biskupská 129/1).
            </p>
            <p>
              Jestli raději sázíte na ověřené značky, v centru města najdete i{' '}
              <b>Potrefenou husu</b> či <b>McDonald&#39;s</b>.
            </p>
          </div>
          <div className='mb-16 space-y-3 font-brandon text-xl'>
            <h2 className='mb-8 font-argent text-4xl font-normal'>
              Na zmrzlinu do Zmrz.li
            </h2>
            <p>
              Seženete tu vanilkovou i čokoládovou, vedle nich však také třeba
              čaj masala, černé pivo či mátovou s pepřem. Majitelka si všechny
              vyrábí sama. Přijďte do <b>Zmrz.li</b> (Hradební 14) a nechte se
              překvapit denní nabídkou.
            </p>
            <p>
              K návštěvě zve velmi oblíbené <b>Café Datel</b> (Piaristická
              22/8). Stylový podnik s širokou nabídkou dezertů. Najít volný stůl
              často bývá problém.
            </p>
            <p>
              Lákavé posezení přímo na hladině Malše nabízí <b>Kavárna Vlnna</b>{' '}
              (Sokolský ostrov 462/1). Je zároveň nástupním místem k vyhlídkové
              plavbě lodí. Půjčí vám tu také šlapadla.
            </p>
          </div>
          <div className='mb-16 space-y-3 font-brandon text-xl'>
            <h2 className='mb-8 font-argent text-4xl font-normal'>
              Co s načatým večerem
            </h2>
            <p>
              Jestli chcete proniknout mezi místní studenty, vydejte se za
              písničkou do hudebního klubu <b>Paradox</b>
              (Krajinská 33/5). Klasická diskotéka se vším, co k ní patří.{' '}
              <b>Vstup od 18 let.</b> Za rozbitý obličej či nečekané početí si
              každý ručí sám.
            </p>
            <p>
              O poznání klidnější prostředí nabízí poetický bar{' '}
              <b>Žlutá ponorka</b> (Česká 141/66). Ochutnáte tu vyladěné drinky
              nevšedních kombinací podávané v originálním nádobí. Rozhodně stojí
              za návštěvu!
            </p>
            <p>
              Když už chce jít i barmanka z nonstopu spát, zbývá fastfood{' '}
              <b>Hladový vokno</b> (Kněžská 373/10). Otevřeno má do jedné ráno.
              Je to poslední možnost, kde se v centru města najíst. Slušný poměr
              cena/výkon, ale to už v tuhle hodinu stejně nebudete vnímat.
            </p>
          </div>
          <div className='mb-16 space-y-3 font-brandon text-xl'>
            <h2 className='mb-8 font-argent text-4xl font-normal'>
              Kam za nákupy
            </h2>
            <p>
              Řadu obchodů najdete přímo na náměstí a v přilehlých ulicích. Kdo
              by potřeboval nakoupit potraviny, v Obchodní galerii Dvořák
              (rovněž na náměstí) najde <b>Normu</b>.
            </p>
            <p>
              Když stojíte před konzervatoří, směrem za mostem se tyčí budova
              České národní banky, která značí, že jste dorazili před{' '}
              <b>Lannovu třídu</b>, nákupní zónu místních. Dovede vás až k
              hlavnímu nádraží, v jehož těsném sousedství najdete menší{' '}
              <b>obchodní centrum Mercury</b>. Více obchodů a služeb nabízí{' '}
              <b>IGY centrum</b>, to už je ale z centra o něco dál. Dojet sem
              můžete MHD.
            </p>

            <p>
              K nákupům si můžete vyčlenit pondělní odpoledne, to už zkoušet
              nebudeme.
            </p>
          </div>

          <div className='mb-16 space-y-3 font-brandon text-xl'>
            <h2 className='mb-8 font-argent text-4xl font-normal'>
              Tipy pro volné chvíle
            </h2>

            <p>
              V pátek večer se vydejte do místního <b>planetária</b> (Zátkovo
              nábřeží 4). Od 18 do 22 hodin tu probíhá Noc vědců. Máte možnost
              zhlédnout různé projekce na téma Čas. Vstup zdarma.
            </p>
            <p>
              V sobotu se bezprostředně po odpolední zkoušce přesuneme
              trolejbusem k branám národního podniku <b>Budějovický Budvar</b>.
              Tady nás od 17 hodin čeká hodinová komentovaná prohlídka. (Pokud
              se někdo z jakéhokoliv důvodu nechce prohlídky zúčastnit, dejte
              nám to prosím vědět.)
            </p>

            <RedAlert
              alertBody={
                <>
                  <p>
                    Před začátkem prohlídky{' '}
                    <b>je třeba opět prokázat bezinfekčnost</b> jedním z
                    uvedených způsobů (viz výše).
                  </p>
                  <p>
                    <b>Na prohlídku se teple oblečte.</b> V pivovarských
                    sklepích jsou pouhé dva stupně.
                  </p>
                </>
              }
            />

            <NextImage
              src='/images/ceske-budejovice-2021/05-vyhlidkova-plavba.jpg'
              className='mb-4 w-full'
              alt='Piaristické náměstí'
              layout='responsive'
              width={1920}
              height={1080}
            />

            <p>
              Protože jsme ve městě, které leží na soutoku Vltavy a Malše,{' '}
              <b>můžete se přesouvat i lodí</b>. Vedle vyhlídkových plaveb tu
              jezdí i pravidelná linka. Přístaviště najdete u Kavárny Vlnna
              (Sokolský ostrov 462/1). Půjčí vám tu taky šlapadla.
            </p>
            <p>
              Rozhodně nevynechte výstup na <b>Černou věž</b>. Po zdolání 225
              schodů se před vámi otevře výhled na celé město. Můžete sem zajít
              kdykoliv sami. Pokud se ale přidáte k naší organizované prohlídce,
              zaplatíme vstupné za vás. Sejdeme se v neděli v 16.50 hodin před
              hotelem. Úderem páté vystoupáme na věž. Úderem doslova. Výstup na
              věž za odbíjení zvonů je skutečným zážitkem!
            </p>

            <NextImage
              src='/images/ceske-budejovice-2021/06-piaristicke-namesti.jpg'
              className='mb-4 w-full'
              alt='Piaristické náměstí'
              layout='responsive'
              width={1920}
              height={1080}
            />

            <p>
              Zašli jste za roh a město utichlo. Vítejte na{' '}
              <b>Piaristickém náměstí</b>, místě určeném k rozjímání. Nejhezčí
              je to tu po setmění. „Zubatá“ budova ze 16. století před vámi se
              nazývá solnice. Dnes tu najdete stejnojmennou restauraci s
              vlastním pivovarem.
            </p>
            <p>
              Jestli chcete splynout s prostředím, vyhněte se označením Budějky
              či Budějice. Pro místní vždy a jedině <b>Budějce!</b>
            </p>
          </div>
          <div className='mb-16 space-y-3 font-brandon text-xl'>
            <h2 className='mb-8 font-argent text-4xl font-normal'>
              Cestou zpátky
            </h2>
            <p>
              Při úterním odjezdu je třeba pokoje opustit do 11 hodin. Program
              na cestu zpět je ještě otevřený. Můžeme se vydat třeba do Českého
              Krumlova nebo na Hlubokou. Přijít můžete i s vlastními návrhy.
              návrhy.
            </p>
            <p>Jsme na místě. Ať se vám tu líbí. Vítejte v Budějcích!</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
