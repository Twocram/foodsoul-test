<template>
  <input
    class="input"
    :value="modelValue"
    :class="{ error, disabled }"
    :type="type"
    :placeholder="placeholder"
    :name="name"
    :disabled="disabled"
    @input="inputHandler"
  />
</template>

<script setup lang="ts">
type Props = {
  type: string;
  placeholder: string;
  name: string;
  error?: string;
  disabled?: boolean
}

defineProps<Props>()

const modelValue = defineModel()

const inputHandler = (event: InputEvent) => {
  modelValue.value = (event.target as HTMLInputElement).value;
}

</script>

<style scoped lang="scss">
.input {
  width: 100%;
  padding: 10px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s, background-color 0.3s, box-shadow 0.3s;
  outline: none;

  &:focus {
    border-color: #66afe9;
    box-shadow: 0 0 8px rgba(102, 175, 233, 0.6);
  }

  &.error {
    border-color: #e74c3c;
    background-color: #fceae8;

    &:focus {
      border-color: #e74c3c;
      box-shadow: 0 0 8px rgba(231, 76, 60, 0.6);
    }
  }

  &.disabled {
    background-color: #f5f5f5;
    border-color: #ddd;
    color: #aaa;
    cursor: not-allowed;

    &:focus {
      border-color: #ddd;
      box-shadow: none;
    }
  }
}
</style>

