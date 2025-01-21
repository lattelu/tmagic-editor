/*
 * Tencent is pleased to support the open source community by making TMagicEditor available.
 *
 * Copyright (C) 2023 THL A29 Limited, a Tencent company.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import path from 'path';

import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
// @ts-ignore
import externalGlobals from 'rollup-plugin-external-globals';

const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

export default defineConfig(({ mode }) => {
  if (['value', 'config', 'event', 'ds:value', 'ds:config', 'ds:event'].includes(mode)) {
    const capitalToken = mode
      .split(':')
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join('');

    const fileName = mode.replace(':', '-');

    return {
      publicDir: './.tmagic/public',
      build: {
        cssCodeSplit: false,
        sourcemap: true,
        minify: false,
        target: 'esnext',
        outDir: `../../playground/public/entry/vue3/${fileName}`,

        lib: {
          entry: `.tmagic/${fileName}-entry.ts`,
          name: `magicPreset${capitalToken}s`,
          fileName: 'index',
          formats: ['umd'],
        },
      },
    };
  }

  if (['page', 'playground'].includes(mode)) {
    return {
      plugins: [
        vue(),
        vueJsx(),
        externalGlobals({ 'vue-demi': 'VueDemi', vue: 'Vue' }, { exclude: [`./${mode}/index.html`] }),
        legacy({
          targets: ['defaults', 'not IE 11'],
        }),
      ],

      root: `./${mode}/`,

      publicDir: '../public',

      base: `/tmagic-editor/playground/runtime/vue3/${mode}`,

      optimizeDeps: {
        exclude: ['vue-demi'],
      },

      build: {
        emptyOutDir: true,
        sourcemap: true,
        outDir: path.resolve(process.cwd(), `../../playground/public/runtime/vue3/${mode}`),
        rollupOptions: {
          external: ['vue', 'vue-demi'],
          output: {
            // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
            sanitizeFileName(name) {
              const match = DRIVE_LETTER_REGEX.exec(name);
              const driveLetter = match ? match[0] : '';
              return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, '');
            },
          },
        },
      },
    };
  }

  return {};
});
