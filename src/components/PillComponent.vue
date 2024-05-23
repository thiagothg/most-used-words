<template>
  <div class="pill">
    <span class="word"> {{ word }}</span>
    <span class="amount"> {{ amount }}</span>
  </div>
</template>

<script>
export default {
  props: ["word", "amount"],
};
</script>

<style scoped>
.pill {
  margin: 10px;
  height: 55px;
  border-radius: 30px;

  background-color: crimson;
  color: white;
  font-size: 1.3rem;
  font-weight: bold;

  display: flex;
  align-items: center;
}
.pill .word {
  margin-left: 15px;
}

.pill .amount {
  margin: 10px;
  padding: 5px;
  height: 35px;
  width: 35px;
  border-radius: 18px;

  background-color: #ffff;
  color: red;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
