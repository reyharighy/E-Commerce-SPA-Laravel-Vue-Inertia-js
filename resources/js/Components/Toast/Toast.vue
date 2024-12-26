<script>
import IconError from "./IconError.vue"
import IconWarning from "./IconWarning.vue"
import IconSuccess from "./IconSuccess.vue";

export default {
  emits: ["hide"],
    data: () => ({
      timeout: null,
    }),
    watch: {
      show() {
        if (this.timeout) {
          clearTimeout(this.timeout)
        }

        this.timeout = setTimeout(() => {
          this.$emit("hide")
        }, 3000)
      },
    },
    props: {
      message: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        default: null,
      },
      show: {
        type: Boolean,
        default: false,
      },
      type: {
        type: String,
        default: "Success",
        validator: function (value) {
          return ["Success", "Warning", "Error"].indexOf(value) !== -1;
        },
      },
      position: {
        type: String,
        default: "bottom-right",
      },
    },
    computed: {
      transitionName() {
        const transitions = {
          "top-left": "ltr",
          "bottom-left": "ltr",
          "top-right": "rtl",
          "bottom-right": "rtl",
        };
        return transitions[this.getPosition];
      },
      toastType() {
        return `toast-${this.getType}`;
      },
      toastIcon() {
        return `Icon${this.getType}`;
      },
      getType() {
        return ["Success", "Warning", "Error"].indexOf(this.type) === -1
          ? "Success"
          : this.type;
      },
      getPosition() {
        return ["bottom-left", "bottom-right", "top-left", "top-right"].indexOf(
          this.position
        ) === -1
          ? "bottom-right"
          : this.position;
      },
      toastClasses() {
        return [this.toastType, this.getPosition];
      },
      toastTitle() {
        return this.title
          ? this.title
          : this.type.charAt(0).toUpperCase() + this.type.slice(1);
      },
    },
    components: {
      IconError,
      IconWarning,
      IconSuccess,
    }
}
</script>

<style scoped>
.toast {
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  box-shadow: 1px 5px 10px -5px rgba(0, 0, 0, 0.2);
  position: relative;
}

.toast::before {
  content: "";
  width: 4px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.toast-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 7px;
}

.toast-Success .toast-icon svg {
  fill: #ecfdf5;
}

.toast-Success {
  background: #ecfdf5;
}

.toast-Success::before,
.toast-Success .toast-icon {
  background: #34d399;
}

.toast-Warning .toast-icon svg {
  fill: #fffbeb;
}

.toast-Warning {
  background: #fffbeb;
}

.toast-Warning::before,
.toast-Warning .toast-icon {
  background: #f59e0b;
}

.toast-Error .toast-icon svg {
  fill: #f3f2f2;
}

.toast-Error {
  background: #fef2f2;
}

.toast-Error::before,
.toast-Error .toast-icon {
  background: #ef4444;
}

.toast-content {
  flex-grow: 1;
  margin: 0 1rem;
}

.toast-title {
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.toast-message {
  font-size: 14px;
  color: #6b7280;
}

.toast-button {
  width: 1.5em;
  height: 1.5em;
  border: none;
  padding: 0;
  color: #9ca3af;
  opacity: 0.7;
  background: transparent;
  cursor: pointer;
  font-size: 1.5em;
}

.toast-button:hover {
  opacity: 1;
}

.bottom-left {
  position: fixed;
  left: 20px;
  bottom: 20px;
}
.top-left {
  position: fixed;
  left: 20px;
  top: 20px;
}
.bottom-right {
  position: fixed;
  right: 20px;
  bottom: 20px;
}
.top-right {
  position: fixed;
  right: 20px;
  top: 20px;
}
.rtl-enter-active,
.rtl-leave-active,
.ltr-enter-active,
.ltr-leave-active {
  transition: all 0.5s ease-in-out;
}
.rtl-enter-from,
.rtl-leave-to {
  transform: translateX(100%);
}
.ltr-enter-from,
.ltr-leave-to {
  transform: translateX(-100%);
}
.rtl-leave-to,
.ltr-leave-to {
  opacity: 0;
}
</style>

<template>
  <transition :name="transitionName">
    <div class="toast flex flex-row w-fit absolute z-50" :class="toastClasses" v-show="show">
      <div class="toast-icon">
        <component :is="toastIcon"></component>
      </div>
      <div class="toast-content">
        <div class="toast-title">{{ toastTitle }}</div>
        <div class="toast-message">{{ message }}</div>
      </div>
      <button class="toast-button" @click="$emit('hide')">&times;</button>
    </div>
  </transition>
</template>