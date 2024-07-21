<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue';
import { classNames } from '@/ts/classNames';
import { useDialogPluginComponent } from 'quasar';

defineEmits([...useDialogPluginComponent.emits]);

const cn = classNames('confirm-delete');
const { dialogRef, onDialogHide, onDialogOK } = useDialogPluginComponent();
</script>

<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <div :class="cn()">
      <slot>
        <div :class="cn('delete-text')">
          <p>Вы уверены, что хотите удалить выбранное?</p>
          <p>Удаление будет невозможно отменить.</p>
        </div>
      </slot>
      <div :class="cn('delete-buttons')">
        <base-button v-close-popup label="Отменить" style-btn="secondary" />
        <base-button
          v-close-popup
          label="Удалить"
          style-btn="delete"
          @click="onDialogOK"
        />
      </div>
    </div>
  </q-dialog>
</template>

<style scoped lang="scss">
.confirm-delete {
  padding: 32px;

  &__delete-text {
    margin-bottom: 28px;
  }

  &__delete-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  @media (max-width: 600px) {
    &__delete-buttons {
      grid-template-columns: 1fr;
      gap: 8px;
    }
  }
}
</style>
