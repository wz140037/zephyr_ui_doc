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