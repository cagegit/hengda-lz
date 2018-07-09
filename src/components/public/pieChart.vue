<template>
    <div class="pie-box">
        <canvas ref="pie"></canvas>
    </div>
</template>
<script>
import Chart from "chart.js"; //图表框架
export default {
  name: "pieChart",
  props: ["data", "colors", "labels"],
  mounted() {
    let ctx = this.$refs.pie.getContext("2d");
    let myChart = new Chart(ctx, {
      type: "pie",
      data: {
          datasets:[
              {
                  data:this.data,
                  backgroundColor:this.colors
              }
          ],
          labels:this.labels
      }
    });
  }
};
</script>
