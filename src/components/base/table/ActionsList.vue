<script setup lang="ts">
import { computed } from 'vue';
import { classNames } from '@/ts/classNames';
import { TableAction } from '@/components/base/table/types';
import BaseTooltip from '@/components/base/BaseTooltip.vue';

const props = defineProps({
  selectedRowCount: {
    type: Number,
    default: 0,
  },
});
const emit = defineEmits(['action']);

const isActive = computed(() => props.selectedRowCount > 0);

type TakeAction = {
  action: TableAction;
  closeDropdown?: boolean;
};
const takeAction = ({ action, closeDropdown = true }: TakeAction) => {
  emit('action', action, closeDropdown);
};

const cn = classNames('actions-list');
</script>

<template>
  <q-list dense :class="cn()">
    <q-item
      v-ripple
      dense
      :clickable="isActive"
      :class="cn('item', { 'active-delete': isActive })"
      @click="takeAction({ action: 'delete' })"
    >
      <base-tooltip v-if="!isActive"
        >Выберите хотя бы одну строчку
      </base-tooltip>
      <q-item-section>Удалить</q-item-section>
      <q-item-section avatar :class="cn('avatar')">
        <q-icon name="delete" />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<style scoped lang="scss">
.actions-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  color: var(--q-dark-page);

  &__item {
    flex-direction: row;
    gap: 4px;
    padding: 2px 8px;
    border-radius: 4px;
    cursor: not-allowed;

    &_active {
      color: var(--q-primary);
      cursor: pointer;
    }

    &_active-delete {
      color: var(--q-negative);
      cursor: pointer;
    }
  }

  &__avatar {
    padding-left: 0;
    min-width: 28px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    border-radius: 8px;
    padding: 12px;
    box-shadow: 0px -20px 20px 0px #00000014;

    &__item {
      flex-direction: row-reverse;
      gap: 8px;
      padding: 15px 18px 15px 8px;
    }
  }
}
</style>
