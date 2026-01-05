import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { definePreset } from '@primeng/themes';

import { routes } from './app.routes';

// 1. Create a custom preset that overrides the "primary" semantic
const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      // Map 'primary' to the 'indigo' palette (50-950), original Aura uses 'emerald primitive token'
      50: '{indigo.50}',
      100: '{indigo.100}',
      200: '{indigo.200}',
      300: '{indigo.300}',
      400: '{indigo.400}',
      500: '{indigo.500}',
      600: '{indigo.600}',
      700: '{indigo.700}',
      800: '{indigo.800}',
      900: '{indigo.900}',
      950: '{indigo.950}'
    }
  }
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
    providePrimeNG({
      theme: {

        // Use the custom preset (Aura + MyPreset)
        preset: MyPreset,

        options: {

          // Critical for Tailwind v4: Insert 'primeng' layer correctly
          cssLayer: {
            name: 'primeng',
            order: 'theme, base, primeng, components, utilities'
          },

          // This tells PrimeNG: "Never look for dark mode"
          darkModeSelector: false,
        }
      }
    })
  ]
};
