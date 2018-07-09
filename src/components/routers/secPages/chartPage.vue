<template>
    <div class="chart-page-box">
        <pie-chart :data="[10,20,60]" :colors="['yellow','pink','black']" :labels="['1','2','3']"></pie-chart>
    </div>
</template>
<script>
import pieChart from "@/components/public/pieChart"; //图表框架
export default {
  name: "chartPage",
  data() {
    return {
      
    };
  },
  components:{pieChart}
};
</script>
