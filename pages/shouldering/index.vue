<template>
  <div class="container">
    <h1>Osazení</h1>
    <h3>Varianty osazení</h3>
    <div class="variants">
      <div class="variants__variant variants__variant--s2s"
           @click="setSquareToSquare"
           :class="{ 'variants__variant--selected' : isSquareToSquare }">H
        > H
      </div>
      <div class="variants__variant variants__variant--s2r"
           @click="setSquareToRound"
           :class="{ 'variants__variant--selected' : isSquareToRound }">H
        > K
      </div>
      <div class="variants__variant variants__variant--r2s"
           @click="setRoundToSquare"
           :class="{ 'variants__variant--selected' : isRoundToSquare }">K
        > H
      </div>
      <div class="variants__variant variants__variant--r2r"
           @click="setRoundToRound"
           :class="{ 'variants__variant--selected' : isRoundToRound }">K >
        K
      </div>
    </div>
    <div class="sketch">
      <div class="sketch__original"><span class="desc">{{ materialSizeDesc }}</span></div>
      <div class="sketch__offset"><span class="desc">{{ materialOffsetDesc }}</span></div>
      <div class="sketch__new"><span class="desc desc--length">{{ finalLengthDesc }}</span><span class="desc desc--size">{{ finalSizeDesc }}</span></div>
    </div>
    <div class="inputs">
      <div class="inputs__item">
        <div class="inputs__desc">{{ materialSizeDesc }}</div>
        <InputPlusMinus :min="finalSize" v-model="materialSize"></InputPlusMinus>
      </div>
      <div class="inputs__item">
        <div class="inputs__desc">{{ finalSizeDesc }}</div>
        <InputPlusMinus :min="1" :max="materialSize" v-model="finalSize"></InputPlusMinus>
      </div>
      <div class="inputs__item">
        <div class="inputs__desc">{{ finalLengthDesc }}</div>
        <InputPlusMinus :min="1" v-model="finalLength"></InputPlusMinus>
      </div>
    </div>
    <div class="final">
      {{ materialOffsetDesc }} =
      <span v-if="isSquareToSquare">{{ squareToSquareOffset }}</span>
      <span v-if="isSquareToRound">{{ squareToRoundOffset }}</span>
      <span v-if="isRoundToSquare">{{ roundToSquareOffset }}</span>
      <span v-if="isRoundToRound">{{ roundToRoundOffset }}</span>
      mm
    </div>
  </div>
</template>

<script>
  import InputPlusMinus from "@/components/InputPlusMinus";

  export default {
    name: 'App',
    components: {
      InputPlusMinus
    },
    data() {
      return {
        materialSize: 20,
        finalSize: 10,
        finalLength: 30,
        isSquareToSquare: true,
        isSquareToRound: false,
        isRoundToSquare: false,
        isRoundToRound: false,
        materialSizeDesc: "H",
        materialOffsetDesc: "L",
        finalSizeDesc: "h",
        finalLengthDesc: "l"
      }
    },
    computed: {
      roundToRoundOffset() {
        let num = (this.finalSize * this.finalSize) / (this.materialSize * this.materialSize) * this.finalLength;
        return Math.round((num + Number.EPSILON) * 100) / 100;
      },
      roundToSquareOffset() {
        let num = (this.finalSize * this.finalSize) / (this.materialSize * this.materialSize) * 1.3 * this.finalLength;
        return Math.round((num + Number.EPSILON) * 100) / 100;
      },
      squareToRoundOffset() {
        let num = (this.finalSize * this.finalSize) / (this.materialSize * this.materialSize) * 0.8 * this.finalLength;
        return Math.round((num + Number.EPSILON) * 100) / 100;
      },
      squareToSquareOffset() {
        let num = (this.finalSize * this.finalSize) / (this.materialSize * this.materialSize) * this.finalLength;
        return Math.round((num + Number.EPSILON) * 100) / 100;
      }
    },
    methods: {
      reset() {
        this.isSquareToSquare = false;
        this.isSquareToRound = false;
        this.isRoundToSquare = false;
        this.isRoundToRound = false;
      },
      setSquareToSquare() {
        this.reset();
        this.isSquareToSquare = true;
        this.materialSizeDesc = "H";
        this.finalSizeDesc = "h";
      },
      setSquareToRound() {
        this.reset();
        this.isSquareToRound = true;
        this.materialSizeDesc = "H";
        this.finalSizeDesc = "d";
      },
      setRoundToSquare() {
        this.reset();
        this.isRoundToSquare = true;
        this.materialSizeDesc = "D";
        this.finalSizeDesc = "h";
      },
      setRoundToRound() {
        this.reset();
        this.isRoundToRound = true;
        this.materialSizeDesc = "D";
        this.finalSizeDesc = "d";
      }
    }
  }
</script>

<style lang="scss" scoped>
  h3{
    text-align: center;
  }
  .variants{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .variants__variant{
    position: relative;
    margin: 0 5px;
    width: 60px;
    /*height: 60px;*/
    padding-bottom: 60px;
    font-size: 0;
    border: 1px solid #999;
    border-radius: 10px;

    &::before,
    &::after{
      content: '';
      position: absolute;
      display: block;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      /*box-shadow: 0 0 1px 1px #000;*/
      border: 1px solid #000;
    }

    &::before{
      width: 60%;
      height: 60%;
    }

    &::after{
      width: 30%;
      height: 30%;
    }
  }
  .variants__variant--selected{
    border-color: transparent;
    box-shadow: 0 0 3px 1px #20446d;
  }
  .variants__variant--s2r{

    &::after{
      border-radius: 50%;
    }
  }
  .variants__variant--r2s{

    &::before{
      border-radius: 50%;
    }
  }
  .variants__variant--r2r{

    &::after{
      border-radius: 50%;
    }

    &::before{
      border-radius: 50%;
    }
  }
  .sketch{
    margin: 2rem auto;
    display: flex;
    width: auto;
    justify-content: center;
    align-items: center;

    .desc{
      position: absolute;
      font-size: 1.2rem;
    }
  }
  .sketch__original{
    position: relative;
    margin-left: 2rem;
    width: 7rem;
    height: 3rem;
    border: 2px solid #666;

    .desc{
      left: -1.4rem;
      top: 0.8rem;
    }
  }
  .sketch__offset{
    position: relative;
    width: 2rem;
    height: 3rem;
    border: 2px dashed #999;
    border-left: 0;

    .desc{
      bottom: -1.4rem;
      left: 0.8rem;
    }
  }
  .sketch__new{
    position: relative;
    left: -2rem;
    width: 6rem;
    height: 1rem;
    border: 2px solid #666;
    border-left: 0;

    .desc--length{
      top: -1.4rem;
      right: 2rem;
    }
    .desc--size{
      top: -0.2rem;
      right: -1.2rem;
    }
  }
  .inputs{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  .inputs__item{
    margin: 0 auto;
    padding-right: 2rem;
    display: flex;
  }
  .inputs__item + .inputs__item{
    margin-top: 1.2rem;
  }
  .inputs__desc{
    font-size: 1.8rem;
    line-height: 2rem;
    margin-right: 0.5rem;
    min-width: 1.2rem;
  }
  .final{
    margin: 2rem auto 0;
    text-align: center;
    font-size: 3rem;

    span{
      font-size: 3rem;
    }
  }
</style>
