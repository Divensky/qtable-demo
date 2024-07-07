<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseTooltip',
});
</script>

<template>
  <q-tooltip class="base-tooltip">
    <slot></slot>
  </q-tooltip>
</template>

<style lang="scss">
.base-tooltip {
  padding: 12px;
  color: var(--q-dark);
  font-size: 16px;
  text-align: center;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 20px 0 #00000014;

  @media (max-width: 1450px) {
    padding: 8px 12px;
    font-size: 14px;
  }
}
</style>
