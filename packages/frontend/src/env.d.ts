interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_FIREBASE_KEY: string;
  readonly VITE_FIREBASE_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
