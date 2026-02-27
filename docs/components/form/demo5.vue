<script lang="ts" setup>
import { ZephyrForm } from '@zephyr_zz/zephyr-ui'
import { Input, InputNumber, Radio, Select, Switch } from 'ant-design-vue';
import { markRaw } from 'vue';

const formItems = createVirtualFormItems()

function createVirtualFormItems(count = 500) {
  const items = [] as any[]

  for (let i = 0; i < count; i++) {
    const typeIndex = i % 5

    const base = {
      label: `字段 ${i}`,
      prop: `field_${i}`,
    }

    // 不同组件类型混合
    switch (typeIndex) {
      case 0:
        items.push({
          ...base,
          is: markRaw(Input),
          attr: {
            placeholder: '请输入内容'
          }
        })
        break

      case 1:
        items.push({
          ...base,
          is: markRaw(InputNumber),
          attr: {
            placeholder: '请输入数字'
          }
        })
        break

      case 2:
        items.push({
          ...base,
          is: markRaw(Select),
          attr: {
            placeholder: '请选择内容',
            options: [
              { label: '是', value: 1 },
              { label: '否', value: 0 }
            ]
          }
        })
        break

      case 3:
        items.push({
          ...base,
          is: markRaw(Radio.Group),
          attr: (formData) => {
            return {
              options: [
                { label: '是', value: 1 },
                { label: '否', value: 0 }
              ],
              value: formData[base.prop],
              'onUpdate:value': (val) => {
                formData[base.prop] = val
              }
            }
          }
        })
        break

      case 4:
        items.push({
          ...base,
          is: markRaw(Switch),
          attr:(formData) =>{
            return {
              checked: formData[base.prop],
              'onUpdate:checked': (val) =>{
                formData[base.prop] = val
              }
            }
          }
        })
        break
    }
  }

  return items
}

</script>

<template>
  <div :style="{ height: '500px' }">
    <ZephyrForm :virtual="true" :formItems="formItems"></ZephyrForm>
  </div>
</template>