<template>
  <div>
    <!-- 显示框 -->
    <Input
      v-model:value="displayName"
      readonly
      placeholder="请选择用户"
      @click="openModal"
    />

    <!-- 弹窗 -->
    <Modal
      v-model:open="visible"
      title="选择用户"
      width="800px"
      @ok="handleConfirm"
      @cancel="handleCancel"
    >
      <Table
        row-key="id"
        :columns="columns"
        :data-source="userList"
        :row-selection="rowSelection"
        :pagination="false"
      />
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { Input,Modal, Table} from 'ant-design-vue'
import { ref, watch, computed } from 'vue'

interface User {
  id: number
  name: string
  account: string
}

// ====== props ======
const props = defineProps<{
  modelValue: number | null
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: number | null): void
}>()

// ====== 模拟用户数据（真实项目可改成接口请求） ======
const userList = ref<User[]>([
  { id: 1, name: '张三', account: 'zhangsan' },
  { id: 2, name: '李四', account: 'lisi' },
  { id: 3, name: '王五', account: 'wangwu' }
])

// ====== 表格列 ======
const columns = [
  { title: '姓名', dataIndex: 'name' },
  { title: '账号', dataIndex: 'account' }
]

// ====== 弹窗控制 ======
const visible = ref(false)

const openModal = () => {
  visible.value = true
}

// ====== 单选逻辑 ======
const selectedRowKeys = ref<number[]>([])
const selectedUser = ref<User | null>(null)

const rowSelection = computed(() => ({
  type: 'radio',
  selectedRowKeys: selectedRowKeys.value,
  onChange: (keys: number[], rows: User[]) => {
    selectedRowKeys.value = keys
    selectedUser.value = rows[0]
  }
} as any))

// ====== 回显姓名 ======
const displayName = ref('')

watch(
  () => props.modelValue,
  (val) => {
    if (!val) {
      displayName.value = ''
      return
    }
    const user = userList.value.find(u => u.id === val)
    displayName.value = user?.name || ''
  },
  { immediate: true }
)

// ====== 确认选择 ======
const handleConfirm = () => {
  if (selectedUser.value) {
    emit('update:modelValue', selectedUser.value.id)
    displayName.value = selectedUser.value.name
  }
  visible.value = false
}

const handleCancel = () => {
  visible.value = false
}
</script>