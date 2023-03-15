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
    name: 'select',
    placeholder: '请选择页面类型',
    display: (_vm, { model }) => model.isLink,
    options: [
      { text: '外页面', value: 'out' },
      { text: '编辑器内页面', value: 'in' },
    ],
    onChange: (_vm, value, { model, config, ...rest }) => {
      model.text = value;
    },
  },
  {
    text: '跳转地址',
    name: 'route',
    placeholder: '请输入页面地址',
    tooltip: '',
    display: (_vm, { model }) => model.isLink,
  },
];

export default CONFIG;
