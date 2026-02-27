# ZephyrForm 表单

## 简介
你的人生，无需校验。

## 基本用法
<script setup lang="ts">
  import demo from './demo.vue'
  import demo2 from './demo2.vue'
  import demo3 from './demo3.vue'
  import demo4 from './demo4.vue'
  import demo5 from './demo5.vue'
  import PropsTableVue from './propsTable.vue'
  import ExposesTableVue from './exposeTable.vue'
  
</script>

<demo></demo>

```vue
<script lang="ts" setup>
import { ElInput } from 'element-plus'
import { ZephyrForm } from '@zephyr_zz/zephyr-ui'
import { markRaw } from 'vue';

const formItems = [
  {
    prop: 'username',
    label: '用户名（blur触发）',
    is: markRaw(ElInput),
    attr: {
      placeholder: '失焦时校验',
      rules: [
        { min: 3, message: '至少3个字符（attr级 blur）', trigger: 'blur' }
      ]
    }
  },
  // 密码
  {
    prop: 'password',
    label: '密码（change触发）',
    is: markRaw(ElInput),
    attr: {
      placeholder: '失焦时校验',
      type:'password',
      rules: [
        { min: 3, message: '至少3个字符（attr级 change）', trigger: 'change' }
      ]
    }
  },
]

</script>

<template>
  <ZephyrForm :formItems="formItems"></ZephyrForm>
</template>

```

## 表单联动

<demo2></demo2>

```vue
<script lang="ts" setup>
import { ElInput,ElSwitch } from 'element-plus'
import { ZephyrForm } from '@zephyr_zz/zephyr-ui'
import { markRaw } from 'vue';

const formItems = [
  {
    prop: 'username',
    label: '用户名',
    is: markRaw(ElInput),
    attr: {
      placeholder: '请输入用户名',
      rules: [
        { required: true, message: '请输入用户名', trigger: 'blur' }
      ]
    }
  },
  // 是否感兴趣：是-继续填写联系方式，否-不填写联系方式
  {
    prop: '',
    label: '是否感兴趣',
    children:[
      {
        prop: 'isInterest',
        is: markRaw(ElSwitch),
        attr: {
          placeholder: '请输入是否感兴趣',
          rules: [
            { required: true, message: '请输入是否感兴趣', trigger: 'blur' }
          ]
        }
      },
      {
        prop: 'contact',
        label: '联系方式',
        is: markRaw(ElInput),
        attr: (formData)=>{
          return {
          placeholder: '请输入联系方式',
          hidden: !formData.isInterest,
          rules: [
            { required: true, message: '请输入联系方式', trigger: 'blur' }
          ]
          }
        }
      }
    ]
  }
]

</script>

<template>
  <ZephyrForm :formItems="formItems"></ZephyrForm>
</template>

```

## 组合表单

<demo3></demo3>

```vue
<script lang="ts" setup>
import { ElInput } from 'element-plus'
import { Radio } from 'ant-design-vue'
import { ZephyrForm } from '@zephyr_zz/zephyr-ui'
import { markRaw } from 'vue';

const formItems = [
  {
    prop: '',
    label: '评分方式',
    children: [
      {
        prop: 'scoringMethod',
        is: markRaw(Radio.Group),
        attr: (formData) => {
          return {
            value:formData.scoringMethod,
            'onUpdate:value': (val: string) => {
              formData.scoringMethod = val
            },
            placeholder: '请选择',
            options: [
              {
                label: '综合评估法',
                value: '1'
              },
              {
                label: '经评审的最低价法',
                value: '2'
              },
              {
                label: '无',
                value: '3'
              }
            ],
            rules: [
              { required: true, message: '请输入是否感兴趣', trigger: 'blur' }
            ],
          }
        }
      },
      {
        prop: 'remark',
        label: '说明',
        is: markRaw(ElInput),
        attr: (formData) => {
          return {
            placeholder: '请输入',
            hidden: formData.scoringMethod !== '3',
            rules: [
              { required: true, message: '请输入', trigger: 'blur' }
            ]
          }
        }
      }
    ]
  }
]

</script>

<template>
  <ZephyrForm :formItems="formItems"></ZephyrForm>
</template>

```

## 自定义组件

<demo4></demo4>

```vue
<script lang="ts" setup>
import UseSelectUser from './UseSelectUser.vue';

import { ZephyrForm } from '@zephyr_zz/zephyr-ui'
import { markRaw } from 'vue';

const formItems = [
{
    prop: 'username',
    label: '企业人员',
    is: markRaw(UseSelectUser),
    attr: {
      placeholder: '请选择用户',
      rules: [
        { required: true, message: '请选择用户', trigger: 'blur' }
      ]
    }
  },
]

</script>

<template>
  <ZephyrForm :formItems="formItems"></ZephyrForm>
</template>

```

## 表单虚拟化

<demo5></demo5>

```vue
<script lang="ts" setup>

... 其他代码

</script>

<template>
  <div :style="{ height: '500px' }">
    <ZephyrForm :virtual="true" :formItems="formItems"></ZephyrForm>
  </div>
</template>

... 其他代码

```

## ZephyrForm API

### ZephyrForm Props
---

<PropsTableVue></PropsTableVue>

### ZephyrForm Exposes
---

<ExposesTableVue></ExposesTableVue>