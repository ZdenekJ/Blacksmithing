<template>
  <div class="input_field">
    <button
        type="button"
        class="button button--decrement"
        @mousedown="start(decrement10)"
        @touchstart="$event.preventDefault(); start(decrement10)"
        @touchend="$event.preventDefault(); stop($event)"
        :disabled="disabled || numericValue <= min"
    >
      - {{ step * 10 }}
    </button>
    <button
        type="button"
        class="button button--decrement"
        @mousedown="start(decrement)"
        @touchstart="$event.preventDefault(); start(decrement)"
        @touchend="$event.preventDefault(); stop($event)"
        :disabled="disabled || numericValue <= min"
    >
      - {{ step }}
    </button>
    <div class="input_field__input_wrap">
      <input
          class="input_field__input input_field__input--numeric"
          :name="name"
          ref="input"
          type="number"
          :value="numericValue"
          :max="max"
          :min="min"
          :style="{'textAlign': this.align}"
          @input="inputHandler($event.target.value)"
          @change="onChange"
          @blur="onBlur"
          @focus="onFocus"
          :autofocus="autofocus"
          :disabled="disabled"
          :readonly="readonly"
      >
      <span>mm</span>
    </div>
    <button
        type="button"
        class="button button--increment"
        @mousedown="start(increment)"
        @touchstart="$event.preventDefault(); start(increment)"
        @touchend="$event.preventDefault(); stop($event)"
        :disabled="disabled || numericValue >= max"
    >
      + {{ step }}
    </button>
    <button
        type="button"
        class="button button--increment"
        @mousedown="start(increment10)"
        @touchstart="$event.preventDefault(); start(increment10)"
        @touchend="$event.preventDefault(); stop($event)"
        :disabled="disabled || numericValue >= max"
    >
      + {{ step * 10 }}
    </button>
  </div>
</template>
<script>
  // Source - https://github.com/JayeshLab/vue-numeric-input
  const timeInterval = 100
  export default {
    name: 'InputPlusMinus',
    props: {
      name: String,
      value: Number,
      min: {
        type: Number,
        default: -Infinity
      },
      max: {
        type: Number,
        default: Infinity
      },
      step: {
        type: Number,
        default: 1
      },
      align: {
        type: String,
        default: 'right'
      },
      precision: {
        type: Number,
        validator(val) {
          return val >= 0 && Number.isInteger(val)
        }
      },
      autofocus: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      controls: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        numericValue: null,
        interval: null,
        startTime: null,
        handler: Function
      }
    },
    watch: {
      // Watch for value change
      value: {
        immediate: true,
        // handle the changed value
        handler(val) {
          let newValue = val
          if (newValue)
          {
            newValue = this.toPrecision(newValue, this.precision)
            if (newValue >= this.max)
            {
              newValue = this.max
            }
            if (newValue <= this.min)
            {
              newValue = this.min
            }
            if (newValue !== val)
            {
              this.$emit('input', newValue)
            }
          }
          this.numericValue = newValue
        }
      }
    },
    methods: {
      /**
       * Function convert value to number
       * @param val
       * @returns {number | Number}
       */
      toNumber(val) {
        let num = parseFloat(val)
        if (isNaN(val) || !isFinite(val))
        {
          num = 0
        }
        return num
      },
      /**
       * Function to return fixed decimal precision of input val
       * @param val
       * @param precision
       * @returns {number | Number}
       */
      toPrecision(val, precision) {
        return precision !== undefined ? parseFloat(val.toFixed(precision)) : val
      },
      /**
       * Increment the current numeric value
       */
      increment() {
        if (!this.readonly) this.updateValue(this.toNumber(this.numericValue) + this.step)
      },
      /**
       * Decrement the current numeric value
       */
      decrement() {
        if (!this.readonly) this.updateValue(this.toNumber(this.numericValue) - this.step)
      },
      /**
       * Increment the current numeric value
       */
      increment10() {
        if (!this.readonly) this.updateValue(this.toNumber(this.numericValue) + this.step * 10)
      },
      /**
       * Decrement the current numeric value
       */
      decrement10() {
        if (!this.readonly) this.updateValue(this.toNumber(this.numericValue) - this.step * 10)
      },
      /**
       * Handle value on Input
       */
      inputHandler(val) {
        this.updateValue(this.toNumber(val), val)
      },
      /**
       * Update value on operation performed
       * @param val
       * @param strVal
       */
      updateValue: function (val, strVal = null) {
        const oldVal = this.numericValue
        val = this.toPrecision(val, this.precision)
        if (val >= this.max)
        {
          val = this.max
        }
        if (val <= this.min)
        {
          val = this.min
        }
        if (val === oldVal)
        {
          this.$refs.input.value = strVal && val === this.toNumber(strVal) ? strVal : val
          return
        }
        this.numericValue = val
        this.$emit('input', val)
      },
      /**
       *  Start a repetitive call to increment and decrement method after a timeInterval on mousedown event and will stop on mouseup event on controls
       * @param handler - increment or decrement method
       */
      start(handler) {
        document.addEventListener('mouseup', this.stop)
        this.startTime = new Date()
        this.handler = handler
        clearInterval(this.interval)
        this.interval = setInterval(handler, timeInterval)
      },
      /**
       * clear interval on mouseup event and remove the listener
       * @param evt - event to be removed
       */
      stop(evt) {
        document.removeEventListener(evt.type, this.stop)
        if (new Date() - this.startTime < timeInterval)
        {
          this.handler()
        }
        clearInterval(this.interval)
        this.interval = null
        this.handler = null
        this.startTime = null
        if (this.value !== this.numericValue) this.$emit('change', this.numericValue)
      },
      /**
       * On blur event trigger
       * @param event - blur event on input
       */
      onBlur(event) {
        this.$emit('blur', event)
      },
      /**
       * On focus event trigger on input
       * @param event
       */
      onFocus(event) {
        this.$emit('focus', event)
      },
      /**
       * On change event trigger on input
       */
      onChange() {
        this.$emit('change', this.numericValue)
      },
      /**
       * focus method to set the focus on input
       */
      focus() {
        if (!this.disabled)
        {
          this.$refs.input.focus()
        }
      },
      /**
       * blur to be trigger on input
       */
      blur() {
        this.$refs.input.blur()
      }
    },
    beforeDestroy() {
      clearInterval(this.interval)
      this.interval = null
      this.handler = null
      this.startTime = null
    }
  }
</script>
<style scoped>
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button{
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number]{
    -moz-appearance: textfield;
  }
  button:focus{
    outline: none;
  }
  .input_field{
    position: relative;
    display: inline-flex;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1.3rem;
  }
  .input_field__input_wrap{
    margin: 0 2px;
    padding-right: 0.2rem;
    padding-left: 0.2rem;
    border: 1px solid #ccc;
    border-radius: 2px;
    white-space: nowrap;
  }
  .input_field__input_wrap span{
    display: inline-block;
    box-sizing: border-box;
    font-size: 1.2rem;
    line-height: 1.8rem;
  }
  .input_field__input{
    padding-right: 0.2rem;
    padding-left: 0.2rem;
    box-sizing: border-box;
    font-size: inherit;
    display: inline-block;
    text-align: center;
    line-height: 1.8rem;
    border: 0;
    transition: all 0.1s ease 0s;
    width: 3rem;
  }
  .input_field .button{
    width: auto;
    margin: 0 2px;
    cursor: default;
    text-align: center;
    font-size: 1rem;
    transition: all 0.1s ease 0s;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    white-space: nowrap;
  }
  .input_field .button:hover{
    background: rgba(0, 0, 0, 0.2);
    border-color: #333;
  }
  .input_field .button:active{
    border-color: #333;
  }
  .input_field .button:disabled{
    border-color: #933;
    background: rgba(100, 0, 0, 0.2);
  }
</style>