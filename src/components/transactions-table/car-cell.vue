<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Car } from '@/components/transactions-table/types';
import { classNames } from '@/ts/classNames';

export default defineComponent({
  name: 'CarCell',
  props: {
    car: {
      type: Object as PropType<Car>,
      required: true,
    },
  },
  setup() {
    return { cn: classNames('car-cell') };
  },
});
</script>

<template>
  <div :class="cn()">
    <div
      v-if="car.vin"
      :class="cn('nowrap')"
    >
      <span :class="cn('text-gray')">VIN</span>
      {{ car.vin }}
    </div>
    <div v-if="car.id">
      <span :class="cn('text-gray')">ID </span>
      <span>{{ car.id }}</span>
    </div>
    <div v-if="car.model">
      {{ car.model }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.car-cell {
  &__nowrap {
    white-space: nowrap;
  }

  &__text-gray {
    color: var(--q-dark-page);
  }
}
</style>
