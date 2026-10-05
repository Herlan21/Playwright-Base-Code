# Playwright E2E starter

Starter end-to-end test untuk menguji halaman web menggunakan Playwright dan TypeScript.

## Persiapan

1. Pastikan aplikasi yang akan diuji sedang berjalan.
2. Pasang dependency dan browser Chromium:

   ```bash
   npm install
   npx playwright install chromium
   ```

## Menjalankan test

Default URL aplikasi adalah `http://127.0.0.1:3000`:

```bash
npm test
```

Untuk URL lain, atur `BASE_URL` saat menjalankan test:

```bash
BASE_URL=https://staging.example.com npm test
```

Mode headed, UI, dan membuka report:

```bash
npm run test:headed
npm run test:ui
npm run report
```

## Struktur

- `playwright.config.ts`: konfigurasi test, browser, URL dasar, dan artefak saat gagal.
- `tests/homepage.spec.ts`: smoke test untuk memastikan homepage merespons sukses dan memiliki judul.

Tambahkan skenario berikutnya di folder `tests/`. Utamakan locator yang stabil dan mudah diakses, misalnya `getByRole()` atau `getByLabel()`, daripada selector CSS yang rapuh.
