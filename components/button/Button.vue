<template>
  <button :class="classObject" @click="handleClick" :disabled="disabled">
    <span v-if="label">{{ label }}</span>
    <slot v-else></slot>
  </button>
</template>

<script>
import { computed } from 'vue'
export default {
  name: "Button",
  props: {
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "primary",
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  setup(props, { emit }) {
    const handleClick = () => {
      emit("click");
    };

    const classObject = computed(() => {
      return {
        button: true,
        [`button__${props.type}`]: true,
        [`button__${props.size}`]: true,
        "button__rounded": props.rounded,
        "button__disabled": props.disabled,
      };
    });

    return {
      handleClick,
      classObject
    };
  },
};
</script>

<style lang="scss" scoped>
.button {
  border: none;
  font-size: 16px;
  font-weight: 600;
  padding: 8px 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 6px;

  &___primary {
    color: #ffffff;
    background: #2073e1;
  }

  &__success {
    color: #ffffff;
    background: #34bc19;
  }

  &__info {
    color: #ffffff;
    background: #8d939a;
  }


  &__danger {
    color: #ffffff;
    background: #e01717;
  }

  &__warning {
    color: #ffffff;
    background: #f0a32f;
  }


  &__disabled {
    color: #ffffff;
    background: #8d939a;
    // cursor: not-allowed;
    // pointer-events: none;
  }

  &__rounded {
    border-radius: 20px;
  }
}
</style>