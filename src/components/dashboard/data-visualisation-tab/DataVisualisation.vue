<template>
  <div class="data-visualisation-tab dashboard-tab">
    <div class="row">
      <div class="col-md-6">
        <div class="chart-container" v-if="countByDepartmentChartData">
          <h3 class="text-center">Employees by department</h3>
          <vuestic-chart v-bind:data="countByDepartmentChartData" :options="chartOptions"
                         type="donut"></vuestic-chart>
        </div>
      </div>
      <div class="col-md-6">
        <div class="chart-container" v-if="expensesByDepartmentChartData">
          <h3 class="text-center">Expenses by department</h3>
          <vuestic-chart v-bind:data="expensesByDepartmentChartData" :options="chartOptions"
                         type="donut"></vuestic-chart>
        </div>
      </div><!--
      <div class="col-md-6">
        <vuestic-data-table
          :apiMode="apiMode"
          :tableData="tableData"
          :tableFields="tableFields"
          :itemsPerPage="itemsPerPage"
          :onEachSide="onEachSide"
          :sortFunctions="sortFunctions"
          :dataModeFilterableFields="dataModeFilterableFields"
        />
      </div>-->
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import BadgeColumn from 'components/tables/BadgeColumn.vue'
  import TableData from './TableData'
  import FieldsDef from './fields-definition'
  import {mapGetters} from 'vuex'
  import {STATISTICS_PALETTE} from '../../../data/charts/StatisticsPalette'

  Vue.component('badge-column', BadgeColumn)

  export default {
    name: 'data-visualisation-tab',

    data () {
      return {
        donutChartData: {labels: [], datasets: [{}]},
        apiMode: false,
        sortFunctions: FieldsDef.sortFunctions,
        tableData: TableData,
        onEachSide: 1,
        tableFields: FieldsDef.tableFields,
        dataModeFilterableFields: ['name'],
        itemsPerPage: [
          {
            value: 5
          },
          {
            value: 6
          }
        ],
      }
    },
    computed: {
      ...mapGetters([
        'departmentStatistics',
      ]),
      countByDepartmentChartData () {
        const labels = []
        const datasets = [{
          label: 'Company employees by department',
          backgroundColor: [],
          data: []
        }]
        this.departmentStatistics.forEach(function (element) {
          labels.push(element.name)
          datasets[0].backgroundColor.push(STATISTICS_PALETTE[labels.indexOf(element.name)])
          datasets[0].data.push(element.count)
        })
        return {labels: labels, datasets: datasets}
      },
      expensesByDepartmentChartData () {
        const labels = []
        const datasets = [{
          label: 'Company employees by department',
          backgroundColor: [],
          data: []
        }]
        this.departmentStatistics.forEach(function (element) {
          labels.push(element.name)
          datasets[0].backgroundColor.push(STATISTICS_PALETTE[labels.indexOf(element.name)])
          datasets[0].data.push(element.expenses)
        })
        console.log({labels: labels, datasets: datasets})
        return {labels: labels, datasets: datasets}
      }
    },
    methods: {
      chartOptions () {
        return {
          options: {
            title: {
              display: true,
              text: 'Company employees by department'
            }
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../sass/_variables.scss";
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";
  @import "~bootstrap/scss/mixins/breakpoints";

  .chart-container {
    padding: 0 2rem;
    height: 24rem;
  }

  .data-visualisation-tab {
    padding-bottom: 35px;
  }


</style>
