/// <reference types="react-scripts" />

declare const Tiffany: {
    info: () => never,
    logAsAdmin: () => string,
    language: 'en' | 'ru',
    ErrorLog: (text: string) => void,
    log: (text: any) => void,
};