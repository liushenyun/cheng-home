<template>
    <div class="Picker-s-outer" @click="cancel">
        <div class="picker-inner" @click.stop="">
          <div class="picker-btns">
            <span @click="cancel">取消</span>
            <span @click="sure">确定</span>
          </div>
          <div class="picker-wrap">
            <mt-picker valueKey='name' :slots="pickerSolt" @change="onNumberChange" :visible-item-count="3"></mt-picker>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'LinkageTime',
  props: {
    pickerSolt: {
      type: Array,
      default() {
        return [{
              flex: 1,
              defaultIndex: 0,
              values: [],
              className: 'slot1'
        }];
      }
    }
  },
  data() {
    return {
      sureData: []
    };
  },
  methods: {
    cancel() {
      this.$emit('picker-cance', false)
    },
    sure() {
      this.$emit('picker-sure', this.sureData)
    },
    onNumberChange(picker, values) {
      this.sureData = values
    }
  }
};
</script>

<style lang="scss" scoped>
.Picker-s-outer {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.3);
    .picker-inner {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: auto;
      overflow: hidden;
      background: #FFF;
    }
    .picker-btns {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 46px;
      font-size: 14px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      span {
        padding: 0 15px;
      }
    }
}
</style>
