import * as React from 'react';

import Alert from '@/components/Alert';
import Alert2 from '@/components/Alert2';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

export default function CeskeBudejovice() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo templateTitle='České Budějovice 2021' />

      <main className='font-argent'>
        <section>
          <div className='container h-screen text-center'>
            <h1 className='mb-24 text-4xl font-semibold'>
              Město, kde by chtěl žít každý
            </h1>
            <span className='mb-8 text-2xl'>
              Nadcházející víkend strávíme v Českých Budějovicích. Někteří z nás
              poprvé, jiní se tu usadili natrvalo. Přinášíme informace k pobytu
              i tipy pro volný čas. Pryč se odtud nikomu chtít nebude.
            </span>
            <div className='text-gray font-brandon mt-12 font-normal'>
              <span>Daniela Tůmová (Stručková), Stanislav Kliment</span>
              <span className='block'>Kód: Marek Lovčí</span>
            </div>
          </div>

          <div className='h-screen'>
            <NextImage
              src='/images/ceske-budejovice-2021/01-namesti.jpg'
              className='relative mb-4 w-full'
              alt='Náměstí České Budějovice'
              layout='responsive'
              width={1920}
              height={1200}
            />
            <div className='container text-right'>
              <span className='font-brandon text-xs font-light'>
                FOTO kasakphoto/Shutterstock
              </span>
            </div>
          </div>
        </section>

        <section className='container text-lg'>
          <span>
            Naším domovem se stane naprosté centrum jihočeské metropole —
            náměstí Přemysla Otakara II., druhé největší čtvercové náměstí v
            Česku. Všechno tu máme po ruce a obejdeme se bez autobusu. Bydlet
            budeme ve čtyřhvězdičkovém Grandhotelu Zvon (budova ze 17. století
            vpravo na snímku). Jedno je tak jisté: lepší ubytování jsme ještě
            neměli.
          </span>

          <Alert />

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

          <span>
            Protože je náš pobyt částečně také pracovní, zkoušky budou probíhat
            dopoledne (od 9 do 12 hodin) i odpoledne (od 14 do 16 hodin) v
            moderně zrekonstruovaném koncertním sále{' '}
            <b>českobudějovické konzervatoře</b>
            (Kanovnická 391/22). Pěšky je to z hotelu pouhých 200 metrů.
            Kanovnická ulice vybíhá z toho rohu náměstí, kde stojí Černá věž s
            přilehlým kostelem sv. Mikuláše. Nemůžete minout.
          </span>

          <Alert2 />

          <div className='mb-16 space-y-3'>
            <h2 className='mb-8 text-2xl font-normal'>
              Kde se najíst, kam na pivo
            </h2>
            <span>
              Kdo nebyl v <b>Masných krámech</b> (Krajinská 31/9), nebyl v
              Budějcích! Klasická restaurace pro turisty v historických
              kulisách. Na čepu je samozřejmě Budvar. Vyzkoušet tu můžete
              kvasnicový ležák Kroužek, který běžně v obchodě neseženete.
            </span>
            <span>
              Příjemné posezení s výhledem na slepé rameno řeky Malše nabízí
              rodinný hotel s restaurací <b>Klika</b>
              (Hroznová 487/25). Určitě nevynechte pravou jihočeskou kulajdu se
              zastřeným vejcem. Ochutnat tu můžete pivo z Prachatic.
            </span>
            <span>
              Pokud by se mezi námi našel skalní fanoušek Budweiser Budvaru,
              čeká na něj <b>Budvarka</b> (Karla IV. 8—10), značková restaurace
              nejznámější místní firmy nabízející skutečně stylový interiér.
            </span>
            <span>
              Za doporučení rozhodně stojí restaurace s vlastním minipivovarem{' '}
              <b>Krajinská 27</b>. Na výběr máte z několika druhů piv, od
              slabších až po hodně silná. Elegantní možnost, jak se vyhnout
              Budvaru a zkusit něco nového. Pivo si můžete odnést i s sebou v
              lahvích, třeba jako dárek domů.
            </span>
            <span>
              Kdo chce zapůsobit na svůj protějšek, pozve ho do restaurace{' '}
              <b>U Solné brány</b> (Radniční 138). Patří k tomu nejlepšímu na
              místní gastronomické scéně. Noblesní prostředí, vytříbená kuchyně.
              Při placení romantika rázem vezme za své, ale každý špás holt něco
              stojí.
            </span>
            <span>
              Za větší exotikou zajděte do restaurace <b>Gateway of India</b>{' '}
              (Piaristická 22/8). Trefíte sem bezpečně. Vůně karí se táhne celou
              ulicí.
            </span>
            <span>
              Jestli máte jen malý hlad, zkuste <b>Soupculture</b> (Karla IV.
              92). Polévku tu dostane do kelímku, který nakonec taky sníte.
            </span>
            <span>
              Když už jste přijeli, chtělo by to ochutnat místní specialitu.{' '}
              <b>Vypečený okno</b> (Hroznová 10) vám nabídne pravý zelňák, tedy
              jihočeskou „pizzu“ s kysaným zelím.
            </span>
            <span>
              Kdo by měl chuť na burger a plzeňskou dvanáctku, otevře{' '}
              <b>Modrý dveře</b> (Biskupská 129/1).
            </span>
            <span>
              Jestli raději sázíte na ověřené značky, v centru města najdete i{' '}
              <b>Potrefenou husu</b> či <b>McDonald&#39;s</b>.
            </span>
          </div>

          <div className='mb-16 space-y-3'>
            <h2 className='mb-8 text-2xl font-normal'>
              Na zmrzlinu do Zmrz.li
            </h2>
            <span>
              Seženete tu vanilkovou i čokoládovou, vedle nich však také třeba
              čaj masala, černé pivo či mátovou s pepřem. Majitelka si všechny
              vyrábí sama. Přijďte do <b>Zmrz.li</b> (Hradební 14) a nechte se
              překvapit denní nabídkou.
            </span>
            <span>
              K návštěvě zve velmi oblíbené <b>Café Datel</b> (Piaristická
              22/8). Stylový podnik s širokou nabídkou dezertů. Najít volný stůl
              často bývá problém.
            </span>
            <span>
              Lákavé posezení přímo na hladině Malše nabízí <b>Kavárna Vlnna</b>{' '}
              (Sokolský ostrov 462/1). Je zároveň nástupním místem k vyhlídkové
              plavbě lodí. Půjčí vám tu také šlapadla.
            </span>
          </div>

          <div className='mb-16 space-y-3'>
            <h2 className='mb-8 text-2xl font-normal'>Co s načatým večerem</h2>
            <span>
              Jestli chcete proniknout mezi místní studenty, vydejte se za
              písničkou do hudebního klubu <b>Paradox</b>
              (Krajinská 33/5). Klasická diskotéka se vším, co k ní patří.{' '}
              <b>Vstup od 18 let.</b> Za rozbitý obličej či nečekané početí si
              každý ručí sám.
            </span>
            <span>
              O poznání klidnější prostředí nabízí poetický bar{' '}
              <b>Žlutá ponorka</b> (Česká 141/66). Ochutnáte tu vyladěné drinky
              nevšedních kombinací podávané v originálním nádobí. Rozhodně stojí
              za návštěvu!
            </span>
            <span>
              Když už chce jít i barmanka z nonstopu spát, zbývá fastfood{' '}
              <b>Hladový vokno</b> (Kněžská 373/10). Otevřeno má do jedné ráno.
              Je to poslední možnost, kde se v centru města najíst. Slušný poměr
              cena/výkon, ale to už v tuhle hodinu stejně nebudete vnímat.
            </span>
          </div>

          <div className='mb-16 space-y-3'>
            <h2 className='mb-8 text-2xl font-normal'>Kam za nákupy</h2>
            <span>
              Řadu obchodů najdete přímo na náměstí a v přilehlých ulicích. Kdo
              by potřeboval nakoupit potraviny, v Obchodní galerii Dvořák
              (rovněž na náměstí) najde <b>Normu</b>.
            </span>
            <span>
              Když stojíte před konzervatoří, směrem za mostem se tyčí budova
              České národní banky, která značí, že jste dorazili před{' '}
              <b>Lannovu třídu</b>, nákupní zónu místních. Dovede vás až k
              hlavnímu nádraží, v jehož těsném sousedství najdete menší{' '}
              <b>obchodní centrum Mercury</b>. Více obchodů a služeb nabízí{' '}
              <b>IGY centrum</b>, to už je ale z centra o něco dál. Dojet sem
              můžete MHD.
            </span>
          </div>

          <div className='mb-16 space-y-3'>
            <h2 className='mb-8 text-2xl font-normal'>Tipy pro volné chvíle</h2>
            <span>
              Do odjezdu doplníme. Těšit se můžete na sobotní společnou
              prohlídku Budějovického Budvaru.
            </span>
          </div>
        </section>
      </main>
    </Layout>
  );
}
