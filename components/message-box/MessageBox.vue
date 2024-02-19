<template>
  <div v-show="isVisible" class="message-box full-overlay">
    <div class="message-box__inner">
      <h2 style="margin-bottom:10px">{{ type }}</h2>
      <p v-if="useHtml" v-html="label"></p>
      <p v-else>{{ label }}</p>
      <div style="display:flex; gap:20px; margin-top:30px;">
        <template v-if="type !== 'alert'">
          <Button 
            class="button primary" 
            severity="primary" 
            @click="handleConfirm"
          >
            {{ confirmLabel }}
          </Button>
          <Button 
            class="button"
            severity="info" 
            @click="handleCancel"
            
          >
            {{ cancelLabel }}
          </Button>
        </template>
        <template v-else>
          <Button class="button button-primary" severity="info" @click="handleCancel">{{ confirmLabel }}</Button>
        </template>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from 'vue'
export default {
  props: {
    type: {
      type: String,
      default: 'alert',
      validator: function (value) {
        return ['alert', 'confirm'].includes(value);
      }
    },
    useHtml: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'Are you sure you want to delete this item?<br> This action cannot be undone.'
    },
    confirmLabel: {
      type: String,
      default: '확인'
    },
    cancelLabel: {
      type: String,
      default: '취소'
    },
    onConfirm: {
      type: Function,
      required: true
    },
    onCancel: {
      type: Function,
      required: true
    },
    onDelete: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const isVisible = ref(true)
    const handleConfirm = () => {
      console.log('confirm')
      props.onConfirm()
    }

    const handleCancel = () => {
      isVisible.value = false
    }
    return {
      isVisible,
      handleConfirm,
      handleCancel,
    }
  }
}
</script>

<style lang="scss" scoped>
.message-box {
  background: rgba(1, 0, 0, 0.388);
  background: #f6ebcb80;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &__inner {
    text-align: center;
    min-width: 300px;
    max-width: 600px;
    height: auto;
    background: #fff;
    padding: 40px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    color: #000;

  }

  &__label {
    font-size: 18px;
    color: #000;
    white-space: pre-wrap;
    margin-top: 100px;
  }
}
.button {
  background: none; 
  color:#F3A603; 
  border:1px solid #F3A603; 
  font-weight: 900; 
  padding:10px 30px;

  &.primary {
    background: #F3A603;
    color: #000;
    border:none;
  }
}

.button


h2,
p {
  padding: 0px;
  margin: 0px;
}

.full-overlay {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 100vh;
}
</style>