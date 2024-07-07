<script setup lang="ts">
import { PropType } from 'vue';
import { classNames } from '@/ts/classNames';
import { RouteLocationRaw } from 'vue-router';
import BaseTooltip from '@/components/base/BaseTooltip.vue';

defineProps({
  id: {
    type: [String, Number],
    required: true,
  },
  editUrl: {
    type: Object as PropType<RouteLocationRaw>,
    default: null,
  },
  viewUrl: {
    type: Object as PropType<RouteLocationRaw>,
    default: null,
  },
  showDelete: {
    type: Boolean,
    default: false,
  },
});

const cn = classNames('actions-cell');

const emit = defineEmits(['delete']);
const deleteCallback = (id: number | string) => {
  emit('delete', id);
};

</script>

<template>
  <div :class="cn()">
    <q-btn
      v-if="editUrl"
      flat
      dense
      :class="cn('icon')"
      icon="edit_square"
      :to="editUrl"
    >
      <base-tooltip>Редактировать</base-tooltip>
    </q-btn>
    <q-btn
      v-if="viewUrl"
      flat
      dense
      :class="cn('icon')"
      icon="visibility"
      :to="viewUrl"
    >
      <base-tooltip>Просмотреть</base-tooltip>
    </q-btn>
    <q-btn
      v-if="showDelete"
      flat
      dense
      icon="delete"
      :class="cn('delete-icon')"
      @click="deleteCallback(id)"
    >
      <base-tooltip>Удалить</base-tooltip>
    </q-btn>
  </div>
</template>

<style scoped lang="scss">
.actions-cell {
  white-space: nowrap;
  text-align: center;

  &__icon {
    &:hover {
      background-color: var(--q-accent);
      color: var(--q-primary);
    }

    &:focus,
    &:active {
      background-color: var(--q-primary);
      color: #fff;
    }
  }

  &__delete-icon {
    color: var(--q-negative);

    &:hover {
      background-color: var(--q-negative);
      color: #fff;
    }

    &:focus,
    &:active {
      background-color: var(--q-negative-dark);
      color: #fff;
    }
  }
}
</style>
