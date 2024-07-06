<template>
  <q-btn
    v-bind="$attrs"
    :class="`base-button q-pa-md base-button_type_${styleBtn}`"
    :padding="padding"
    no-caps
    unelevated
  >
    <div :class="cn('content')">
      <q-icon
        v-if="icon"
        :name="icon"
        :size="sizeIcon"
      />
      <span v-if="label">
        {{ label }}
      </span>
    </div>
  </q-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { classNames } from '@/ts/classNames';

export default defineComponent({
  name: 'BaseButton',
  props: {
    label: {
      type: String,
      default: '',
    },
    padding: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    sizeIcon: {
      type: String,
      default: '',
    },
    styleBtn: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      cn: classNames('base-button'),
    };
  },
});
</script>

<style scoped lang="scss">
.base-button {
  font-family: inherit;
  font-size: 16px;
  font-weight: 400;
  border-radius: 8px;
  line-height: 1.1;
  letter-spacing: 0;
  padding: 18px 24px;

  &_type {
    &_primary {
      background-color: var(--q-primary);
      color: #fff;
    }

    &_secondary {
      background-color: var(--q-accent);
      color: var(--q-primary);
    }

    &_success {
      background-color: var(--q-positive);
      color: #fff;
    }

    &_error {
      background-color: var(--q-negative);
      color: #fff;
    }

    &_delete {
      background-color: rgba($negative, 0.1);
      color: $negative;
    }

    &_clear {
      background-color: transparent;
      color: $dark;
    }
  }

  &__content {
    gap: 8px;
    display: flex;
    align-items: center;
  }

  @media (max-width: 550px) {
    padding: 18px 20px;
  }

  @media (max-width: 385px) {
    padding: 18px;
    font-size: 14px;
  }
}
</style>
