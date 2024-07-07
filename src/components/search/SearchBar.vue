<script setup lang="ts">
import { ref } from 'vue';
import { classNames } from '@/ts/classNames';
import BaseButton from '@/components/base/BaseButton.vue';
import BaseTooltip from '@/components/base/BaseTooltip.vue';

defineProps({
  inputPlaceholder: {
    type: String,
    default: 'Введите запрос',
  },
  hasFilter: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['search', 'toggle-filter']);

const searchQuery = ref('');
const handleSearch = () => {
  emit('search', searchQuery.value);
};
const filterStyle = ref('secondary');
const toggleFilter = () => {
  filterStyle.value =
    filterStyle.value === 'secondary' ? 'primary' : 'secondary';
  emit('toggle-filter');
};

const cn = classNames('search-bar');
</script>

<template>
  <div :class="cn({ filter: hasFilter })">
    <q-input
      v-model.trim="searchQuery"
      :class="cn('search-field')"
      :input-class="cn('input')"
      outlined
      :placeholder="inputPlaceholder"
      @keyup.enter="handleSearch"
      @blur="handleSearch"
    ></q-input>
    <base-button
      :class="cn('search-button')"
      style-btn="clear"
      color="primary"
      flat
      icon="search"
      @click="handleSearch"
    ></base-button>
    <div v-if="hasFilter">
      <base-button
        :class="cn('search-button')"
        :style-btn="filterStyle"
        flat
        icon="filter_list"
        @click="toggleFilter"
      >
      </base-button>
      <base-tooltip>Фильтрация</base-tooltip>
    </div>
  </div>
</template>

<style lang="scss">
.search-bar {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 54px;
  gap: 8px;
  width: clamp(420px, 49%, 632px);
  margin-right: 16px;

  &_filter {
    grid-template-columns: 1fr 54px 54px;
  }

  &__search-field {
    font-size: 16px;

    .q-field__control {
      height: 54px;
      border-radius: 8px;
    }
  }

  &__input {
    color: var(--q-dark);

    &::placeholder {
      color: var(--q-dark-page);
      opacity: 1;
    }
  }

  &__search-button {
    height: 54px;
    width: 54px;
    justify-content: center;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 0 20px;

    &__search-field {
      font-size: 14px;
    }
  }
}
</style>
