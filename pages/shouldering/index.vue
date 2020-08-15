<template>
  <article>
    <h1>Osazení</h1>
    <h3>Varianty osazení</h3>
    <div class="variants">
      <div class="variants__variant variants__variant--s2s"
           @click="setSquareToSquare"
           :class="{ 'variants__variant--selected' : isSquareToSquare }">H
        > H
        <svg id="svg_s2s" viewBox="0 0 100 100"
             xmlns="http://www.w3.org/2000/svg">
          <rect class="outer" height="60" width="60" y="20" x="20"
                fill-opacity="0" stroke-width="2"/>
          <rect class="inner" height="30" width="30" y="35" x="35"
                fill-opacity="0" stroke-width="2"/>
        </svg>
      </div>
      <div class="variants__variant variants__variant--s2r"
           @click="setSquareToRound"
           :class="{ 'variants__variant--selected' : isSquareToRound }">H
        > K
        <svg id="svg_s2r" viewBox="0 0 100 100"
             xmlns="http://www.w3.org/2000/svg">
          <rect class="outer" height="60" width="60" y="20" x="20"
                fill-opacity="0" stroke-width="2"/>
          <ellipse stroke-width="2" cx="50" cy="50"
                   class="inner" rx="15" ry="15" fill-opacity="0"/>
        </svg>
      </div>
      <div class="variants__variant variants__variant--r2s"
           @click="setRoundToSquare"
           :class="{ 'variants__variant--selected' : isRoundToSquare }">K
        > H
        <svg id="svg_r2s" viewBox="0 0 100 100"
             xmlns="http://www.w3.org/2000/svg">
          <ellipse stroke-width="2" cx="50" cy="50"
                   class="outer" rx="30" ry="30" fill-opacity="0"/>
          <rect class="inner" height="30" width="30" y="35" x="35"
                fill-opacity="0" stroke-width="2"/>
        </svg>
      </div>
      <div class="variants__variant variants__variant--r2r"
           @click="setRoundToRound"
           :class="{ 'variants__variant--selected' : isRoundToRound }">K >
        K
        <svg id="svg_r2r" viewBox="0 0 100 100"
             xmlns="http://www.w3.org/2000/svg">
          <ellipse stroke-width="2" cx="50" cy="50"
                   class="outer" rx="30" ry="30" fill-opacity="0"/>
          <ellipse stroke-width="2" cx="50" cy="50"
                   class="inner" rx="15" ry="15" fill-opacity="0"/>
        </svg>
      </div>
    </div>
    <svg class="sketch" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
      <rect class="sketch__offset" height="48" width="30" y="10" x="163" stroke-opacity="null" fill-opacity="0" stroke-width="1.5" stroke-dasharray="6,6"/>
      <rect class="sketch__new" height="48" width="112" y="10" x="51" stroke-opacity="null" fill-opacity="0" stroke-width="1.5" />
      <rect class="sketch__original" height="20" width="86" y="24" x="163" stroke-opacity="null" fill-opacity="0" stroke-width="1.5"/>

      <text class="sketch__descSizeOriginal" y="42" x="25" fill-opacity="null" stroke-opacity="null" stroke-width="0" >{{ materialSizeDesc }}</text>
      <text class="sketch__descSizeFinal" y="42" x="260" fill-opacity="null" stroke-opacity="null" stroke-width="0" >{{ finalSizeDesc }}</text>
      <text class="sketch__descLengthFinal" y="20" x="214" fill-opacity="null" stroke-opacity="null" stroke-width="0" >{{ finalLengthDesc }}</text>
      <text class="sketch__descOffset" y="84" x="172" fill-opacity="null" stroke-opacity="null" stroke-width="0">{{ materialOffsetDesc }}</text>
    </svg>
    <div class="inputs">
      <div class="inputs__item">
        <div class="inputs__desc">{{ materialSizeDesc }}</div>
        <InputPlusMinus :min="finalSize"
                        v-model="materialSize"></InputPlusMinus>
      </div>
      <div class="inputs__item">
        <div class="inputs__desc">{{ finalSizeDesc }}</div>
        <InputPlusMinus :min="1" :max="materialSize"
                        v-model="finalSize"></InputPlusMinus>
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
  </article>
</template>

<script>
import InputPlusMinus from "@/components/InputPlusMinus";

export default {
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
  height: 60px;
  font-size: 0;
  border: 1px solid var(--button-border-color);
  border-radius: 10px;

  &:hover{
    cursor: pointer;
  }
}
.variants__variant--selected{
  border-color: transparent;
  box-shadow: 0 0 4px 2px #993333;
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
  display: block;
  margin: 1rem auto 0;
  width: 300px;
}
.sketch__original{

}
.sketch__offset{
}
.sketch__new{
}
.sketch__descSizeOriginal{

}
.sketch__descSizeFinal{

}
.sketch__descLengthFinal{

}
.sketch__descOffset{

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
