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

import { editorService } from '@tmagic/editor';
import { FormConfig } from '@tmagic/form';
const CONFIG: FormConfig = [
  {
    text: '文本',
    name: 'text',
  },
  {
    text: '禁用文本',
    name: 'disabledText',
  },
  {
    type: 'switch',
    name: 'isLink',
    text: '跳转页面',
  },
  {
    type: 'select',
    text: '页面类型',
    name: 'pageType',
    placeholder: '请选择页面类型',
    display: (_vm, { model }) => model.isLink,
    options: [
      { text: '小程序页面', value: 'mini' },
      { text: '编辑器页面', value: 'editor' },
      { text: '外链', value: 'webview' },
    ],
    onChange: (_vm, value, { model, config, ...rest }) => {
      model.text = value;
    },
  },
  {
    text: '跳转地址',
    name: 'url',
    placeholder: '请输入页面地址',
    tooltip: '',
    display: (_vm, { model }) => model.pageType === 'mini',
  },
  {
    type: 'select',
    text: '页面选择',
    name: 'pageId',
    placeholder: '请选择页面地址',
    tooltip: '',
    display: (_vm, { model }) => model.pageType === 'editor',
    options: () => {
      // const dsl = window.magicEditorConfig as DSL;
      const root = editorService.get('root');
      const pages = root?.items.map((item) => {
        return {
          text: item.name,
          value: item.id,
        };
      });
      return pages || [];
    },
    rules: [
      {
        message: '请选择页面地址',
        required: true,
      },
    ],
  },
  {
    text: '外链',
    name: 'url',
    placeholder: '请输入正确的网页地址',
    tooltip: '',
    display: (_vm, { model }) => model.pageType === 'webview',
    rules: [
      {
        message: '请输入正确的网页地址',
        required: true,
        validator(options, data) {
          const { url } = data.model;

          const reg = /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/;
          if (reg.test(url)) {
            options.callback();
          } else {
            options.callback(new Error('输入的网址错误'));
          }
        },
      },
    ],
  },
];

export default CONFIG;
