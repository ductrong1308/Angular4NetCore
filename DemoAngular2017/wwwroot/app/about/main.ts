import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AboutModule } from './about.module';

platformBrowserDynamic().bootstrapModule(AboutModule)
    .then(() => console.log('About app bootstraped'))
    .catch((err) => console.error(err));
