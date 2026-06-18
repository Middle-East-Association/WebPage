# SEO — Auditoría y estado · The Middle East Association

> Auditoría multi-agente (6 dimensiones, verificación adversarial contra el HTML renderizado en `.output/public`). 53 hallazgos, 52 confirmados. Fecha base: **2026-06-18**. Dominio canónico confirmado: **`https://the-mea.com`** (apex, sin www).

---

## Estado de implementación (2026-06-18)

### ✅ Hecho (verificado en el HTML generado)

| Área | Cambio | Archivos |
|------|--------|----------|
| Dominio | Canónico fijado a apex `https://the-mea.com` (alimenta canonical, og:url, sitemap, robots, JSON-LD `@id`) | `nuxt.config.ts`, `.env.example` |
| Metadatos sociales | Composable `usePageSeo` que setea `og:title/description` + `twitter:title/description` en las 7 páginas (antes solo la home) | `composables/usePageSeo.ts`, todas las `pages/*.vue` |
| Metadatos globales | `og:locale=en_GB`, `twitter:site=@_theMEA`, `og:image` width/height/type/alt (1200×630) | `app.vue` |
| Organization JSON-LD | + `address` (London/GB), `foundingLocation`, `contactPoint` (general + membership), `areaServed` (UK + MENA), `knowsAbout`, `slogan`, `image` | `app.vue`, `data/site.ts` |
| Person JSON-LD | Nuevo `@graph` de 9 personas (`jobTitle`, `worksFor` por `@id`, image) | `pages/team.vue` |
| Event JSON-LD | Eliminada la `addressLocality` fabricada; ahora con `location`, `eventAttendanceMode`, `image`, `organizer` (`@id`), `description` → elegible para rich results. Default de venue = London (verificar por evento) | `pages/events.vue`, `data/events.ts` |
| Contenido / H1 | Home con `<title>` y H1 topical ("UK–Middle East trade, business & policy since 1961") | `pages/index.vue` |
| Enlazado interno | `/contact` con intro + ubicación + enlaces; `/sponsorship` con CTA; footer con navegación a las 7 rutas; jerarquía de encabezados en `/events` (h1→h2→h3) | `pages/contact.vue`, `pages/sponsorship.vue`, `components/AppFooter.vue`, `pages/events.vue` |
| Performance (LCP) | Hero responsive `srcset` + `preload`: móvil 492 KB → **77 KB**, laptop → 156 KB, desktop → 296 KB | `pages/index.vue`, `public/images/hero-middle-east*.webp` |
| Otros | `error.vue` (404 con noindex); alt text del equipo con rol | `error.vue`, `pages/team.vue` |

### ⏳ Pendiente (requiere datos del cliente)

1. **Venues reales por evento** y precios (Gala/Roadshow). Hoy todos usan London por defecto — corregir multi-ciudad (UK Roadshow). Campos listos: `venue`/`city`/`endDate`/`isOnline` en `data/events.ts`.
2. **Perfiles oficiales para `sameAs`**: Companies House, Wikipedia/Wikidata, Crunchbase, Instagram, YouTube (solo los que controle la org). Opcional: LinkedIn por miembro del equipo (`Person.sameAs`).
3. **Página `/about`** con la historia de 1961 (E-E-A-T). Necesita copy histórico.
4. **`@nuxt/image`** para el resto de galerías responsive (el hero ya se resolvió a mano).
5. **Alt text específico** de galerías (12 past events, 3 home, 3 membership, 6 YPG): evento + año + ciudad.

> No se publica teléfono ni dirección postal: la NAP es solo ciudad (London, UK) por diseño.

### 🌐 Acciones OFF-SITE (no están en el código — las ejecuta el cliente)

1. **301 desde el dominio Wix antiguo → URLs nuevas** (máxima prioridad: preserva 30+ años de autoridad). El cliente controla el Wix y lo gestiona.
2. **www→apex 301 en Vercel** + confirmar `NUXT_SITE_URL=https://the-mea.com`.
3. **Google Search Console + Bing Webmaster**: verificar dominio, enviar `/sitemap.xml`, "Change of Address".
4. **Google Business Profile / knowledge panel** con NAP consistente.
5. **Migración de backlinks** de mayor valor.

---

## 1. Veredicto general

La base SEO es **fuerte y está bien construida**: SSR con prerender completo de las 7 rutas, `sitemap.xml` y `robots.txt` correctos y consistentes con canonical/og:url, JSON-LD (Organization + WebSite en todas las páginas, Event en `/events`). No hay defectos técnicos graves ni fugas de enlaces externos al sitemap. Lo que queda son **mejoras de cobertura** y **acciones fuera del código** — sobre todo confirmar el dominio (hecho) y los 301 desde el sitio Wix antiguo, que es lo que protege décadas de autoridad de marca.

## 2. Lo que ya estaba bien (no tocar)

- SSR + prerender de las 7 rutas (`nuxt.config.ts`).
- Sitemap correcto: 7 URLs con `autoLastmod`, excluye correctamente todos los enlaces externos.
- robots.txt permite todo y referencia el sitemap.
- Canonical, og:url y `<loc>` del sitemap mutuamente consistentes.
- Cada página: `<title>` único con keywords + meta description única (~150-160 chars).
- JSON-LD Organization + WebSite con `@id` cruzados, alternateName "MEA", foundingDate 1961, logo, email, sameAs.
- Event @graph en `/events`.
- Semántica: un único `<h1>` por página, landmarks ARIA, `<time datetime>`, bios crawlables.
- WebP con width/height (sin CLS), hero `fetchpriority="high"`, resto lazy. Fuentes self-hosted.
- 404 con noindex, hreflang innecesario (monolingüe), `appManifest:false` correcto.

## 3. Hallazgos priorizados

### Crítico
Ninguno en el código. Lo más crítico es off-site: 301 desde el dominio Wix antiguo.

### Alto
1. **Dominio de producción sin confirmar** — `nuxt.config.ts`. ✅ *Resuelto:* apex `https://the-mea.com`.
2. **NAP ausente** — `contact.vue`, `data/site.ts`, `app.vue`. ✅ *Resuelto a nivel ciudad* (London/GB); sin teléfono/calle por no existir públicamente.
3. **Sin imágenes responsive / `@nuxt/image`** — todos los `<img>`. ⏳ *Parcial:* hero resuelto; resto pendiente.
4. **Hero LCP 492 KB sin adaptación** — `index.vue`. ✅ *Resuelto* (srcset + preload, 77 KB en móvil).

### Medio
5. **6 subpáginas sin og:title/description** — ✅ *Resuelto* (`usePageSeo`).
6. **twitter:title/description ausentes** — ✅ *Resuelto*.
7. **Title de home "Home"** — ✅ *Resuelto* (topical).
8. **H1 de home solo marca** — ✅ *Resuelto* (topical + "since 1961").
9. **Copy infra-orientado a queries de alta intención** — ⏳ *Parcial* (home/contact mejorados; queda profundizar con `/about` y subtítulos).
10. **Página de contacto pobre** — ✅ *Resuelto* (intro + ubicación + enlaces).
11. **Páginas sin enlaces contextuales de salida** — ✅ *Resuelto* (contact, sponsorship, footer nav).
12. **Sin Person schema para el equipo** — ✅ *Resuelto*.
13. **Organization sin PostalAddress** — ✅ *Resuelto* (London/GB).
14. **Organization sin telephone/contactPoint** — ✅ *Resuelto* (contactPoint con emails; sin teléfono).
15. **Organization sin areaServed/knowsAbout/slogan/foundingLocation/image** — ✅ *Resuelto*.
16. **Event: PostalAddress fabricada + faltan campos** — ✅ *Resuelto estructuralmente*; ⏳ faltan venues/precios reales.
17. **Sin página /about o de historia** — ⏳ *Pendiente* (necesita copy).
18. **sameAs solo LinkedIn + X** — ⏳ *Pendiente* (necesita lista de perfiles).

### Bajo
19. Sin redirección host www↔apex / http→https → ⏳ *Vercel*.
20. Sin `error.vue` personalizado → ✅ *Resuelto*.
21. `og:locale` nunca seteado → ✅ *Resuelto* (en_GB).
22. og:image sin width/height/type/alt → ✅ *Resuelto*.
23. Sin og:image por página (events/team) → ⏳ opcional.
24. Alt text genérico en team y galerías → ✅ *team resuelto*; ⏳ galerías pendientes.
25. Dimensiones de imágenes del equipo incorrectas → ⏳ pendiente (mejor con `@nuxt/image`).
26. Sin preload de la fuente del H1 → mitigado por `@nuxt/fonts`.
27. Jerarquía de encabezados plana en /events → ✅ *Resuelto*.
28. Footer sin enlaces de navegación → ✅ *Resuelto*.
29. H1 interiores sin contexto topical/marca → ⏳ opcional.
30. Sin BreadcrumbList → bajo valor, opcional.
31. `organizer` del Event no enlaza al `@id` → ✅ *Resuelto*.
32. `@type` genérico Organization → opcional (`['Organization','NGO']` si se confirma estatus legal).
33. Menores: sin FAQPage, sin ItemList/EventSeries, sponsorship sin packages, etc.

**Refutado:** `og:type='website'` global es correcto incluso en `/events` (página de listado).

## 4. Datos que aún se necesitan del cliente

Venues + precios por evento · perfiles oficiales para `sameAs` · copy histórico para `/about` · estatus legal (asociación/NGO/charity) para `@type` · LinkedIn por miembro del equipo (opcional) · qué muestra cada foto de galería · foto en mejor resolución de Nicholas Hopton (378×276, sobre-escalada).

## 5. Plan recomendado

**Las 5 de mayor impacto:** (1) dominio + `NUXT_SITE_URL` + 301 apex↔www; (2) 301 desde el Wix antiguo; (3) Search Console + sitemap; (4) NAP real; (5) metadatos sociales centralizados. → **(1) parcial (falta Vercel), (3)/(4)/(5) listos en código, (2) lo ejecuta el cliente.**

**Después:** `@nuxt/image` + galerías responsive; ampliar `sameAs`; copy topical + `/about`; venues/precios reales de eventos.
