import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';

let env = process.env['ENV'];

if (env === 'production') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
