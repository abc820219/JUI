<template>
  <transition name="dialog-fade">
    <div class="JDialog_wrapper" v-show="visible" @click.self="closeHandler">
      <div class="JDialog" :style="{ width, marginTop: top }">
        <div class="JDialog_header">
          <!-- 具名 -->
          <slot name="title">
            <span class="JDialog_title">
              {{ title }}
            </span>
          </slot>
          <button class="JDialog_headerbtn">
            <i class="one-icon-close" @click="closeHandler">X</i>
          </button>
        </div>
        <div class="JDialog_body">
          <!-- 默認 -->
          <slot> </slot>
        </div>
        <div class="JDialog_footer">
          <!--  v-if="$slots.footer" -->
          <slot name="footer">
            <JButton>取消</JButton>
            <JButton type="primary">確定</JButton>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "JDialog",
  props: {
    title: {
      type: String,
      default: "提示",
    },
    width: {
      type: String,
      default: "50%",
    },
    top: {
      type: String,
      default: "15vh",
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeHandler() {
      this.$emit("update:visible", false);
    },
  },
};
</script>
<style lang="scss" scoped>
// 遇到scoped時可以用深度選擇器來影響組件
.JDialog_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .JDialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    &_header {
      padding: 20px 20px 10px;
      .JDialog_title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .JDialog_headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .Jicon-close {
          color: 909399;
        }
      }
    }
    &_body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .Jbutton:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active {
  animation: fade 0.3s;
}
.dialog-fade-leave-active {
  animation: fade 0.3s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>