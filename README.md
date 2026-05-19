# collab.funnywear.pl - Landing Page

Landing page do pozyskiwania osób zainteresowanych współpracą barterową z marką FunnyWear.

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Strona dostępna pod `http://localhost:5173`.

## Build produkcyjny

```bash
npm run build
```

Pliki gotowe do hostowania znajdziesz w katalogu `dist/`.

## Wklejenie formularza

Otwórz plik `src/components/FormSection.jsx` i znajdź:

```jsx
{/* ============================================ */}
{/* TUTAJ WKLEJ EMBED FORMULARZA (Tally/GHL/etc) */}
{/* ============================================ */}
<div id="form-embed" ...>
  [ Miejsce na embed formularza ]
</div>
```

Zastąp całego `<div id="form-embed">` kodem embed od Tally / GoHighLevel / Typeform. Przykład dla Tally:

```jsx
<div id="form-embed">
  <iframe
    data-tally-src="https://tally.so/embed/TWOJ_FORMULARZ"
    width="100%"
    height="500"
    frameBorder="0"
  />
</div>
```

## Logo

Wrzuć plik logo jako `public/logo.png`. Zostanie automatycznie wyświetlony w nagłówku.  
Jeśli plik nie istnieje, nagłówek pokaże tylko napis "FunnyWear" (graceful fallback).

## Deploy na hosting (FTP)

1. Uruchom `npm run build`
2. Wgraj całą zawartość katalogu `dist/` na serwer przez FTP (np. FileZilla)
3. Upewnij się, że subdomena `collab.funnywear.pl` wskazuje na ten katalog

Strona jest statycznym SPA - działa na każdym hostingu bez PHP/Node.js.
