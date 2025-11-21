# VirtualSelect 的一些实践

## 简介
你看不到的，都藏在了细枝末节里。

## 场景描述
我们简单的假设用户有姓名、部门两个信息字段，其中部门数据来自于系统的部门列表，这数据量将会非常的大，如果直接渲染到页面上，将会导致页面的卡顿甚至内存卡爆。接下来，看我们是如何解决这一问题的。 

### 方案实践
---
<script setup lang="ts">
  import BaseDemo from './base.vue';
</script>

<ClientOnly>
<BaseDemo></BaseDemo>
</ClientOnly>