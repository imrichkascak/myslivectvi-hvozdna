# Myslivecký spolek Vrchovina Hvozdná

Ukázkový web spolku ve Hvozdné (Next.js, Tailwind CSS). Slouží jako podklad před schůzkou s vedením — obsah a kontakty se ještě upřesní.

## Stránky

- `/` úvod
- `/o-nas` o spolku a výboru
- `/honitba` honitba, bezpečnost v den honu a jak revír během roku funguje
- `/aktuality` zprávy
- `/kontakt` formulář, sídlo a mapa
- `/kickoff` interní podklad ke schůzce (noindex)

## Vývoj

```bash
npm install
npm run dev
```

Otevřete [http://localhost:3000](http://localhost:3000).

Kontaktní formulář odesílá e-mail přes [Resend](https://resend.com). V `.env.local` (a na Vercelu) nastavte:

```
CONTACT_EMAIL=adresa-vyboru@example.com
RESEND_API_KEY=re_...
CONTACT_FROM_EMAIL=MS Vrchovina Hvozdná <onboarding@resend.dev>
```

`CONTACT_FROM_EMAIL` je volitelné. Dokud není ověřená vlastní doména, Resend doručí zprávy jen na e-mail účtu, ze kterého klíč pochází.

## Zdroje údajů

Veřejný rejstřík (IČO 48472964, sídlo Myslivecká 38, Hvozdná). Osobní adresy členů výboru na webu nejsou.

## Licence fotografií

Les a zvěř: Unsplash. Logo a foto vybavení: MS Vrchovina Hvozdná.
