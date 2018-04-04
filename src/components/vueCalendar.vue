<template>
  <div>
    <div class="ant-fullcalendar-fullscreen">
      <div class="ant-fullcalendar-header">
        <div class="ant-fullcalendar-year-select ant-select ant-select-enabled s-calendar-select-wrapper">
          <el-select v-model="selectedYear"
                     placeholder="please choose"
                     @change="onYearOrMonthChange"
                     size="small">
            <el-option
              v-for="item in yearRange"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </div>
        <div class="ant-fullcalendar-month-select ant-select ant-select-enabled s-calendar-select-wrapper">
          <el-select v-model="selectedMonth"
                     placeholder="please choose"
                     @change="onYearOrMonthChange"
                     size="small">
            <el-option
              v-for="item in monthRange"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="ant-fullcalendar ant-fullcalendar-full ant-fullcalendar-fullscreen" tabindex="0">
        <div class="ant-fullcalendar-calendar-body" v-if="monthView && monthView.length">
          <table class="ant-fullcalendar-table" cellspacing="0" role="grid">
            <thead>
            <tr role="row">
              <th role="columnheader" title="Sun" class="ant-fullcalendar-column-header"><span
                class="ant-fullcalendar-column-header-inner">Su</span></th>
              <th role="columnheader" title="Mon" class="ant-fullcalendar-column-header"><span
                class="ant-fullcalendar-column-header-inner">Mo</span></th>
              <th role="columnheader" title="Tue" class="ant-fullcalendar-column-header"><span
                class="ant-fullcalendar-column-header-inner">Tu</span></th>
              <th role="columnheader" title="Wed" class="ant-fullcalendar-column-header"><span
                class="ant-fullcalendar-column-header-inner">We</span></th>
              <th role="columnheader" title="Thu" class="ant-fullcalendar-column-header"><span
                class="ant-fullcalendar-column-header-inner">Th</span></th>
              <th role="columnheader" title="Fri" class="ant-fullcalendar-column-header"><span
                class="ant-fullcalendar-column-header-inner">Fr</span></th>
              <th role="columnheader" title="Sat" class="ant-fullcalendar-column-header"><span
                class="ant-fullcalendar-column-header-inner">Sa</span></th>
            </tr>
            </thead>
            <tbody class="ant-fullcalendar-tbody">
            <tr role="row"
                :key="index"
                v-for="(week, index) in monthView"
                class="ant-fullcalendar-current-week ant-fullcalendar-active-week">
              <td role="gridcell"
                  :key="innerIndex"
                  v-for="(day, innerIndex) in week"
                  :title="day.format('YYYY/MM/DD')"
                  @click="onDayCellClick(day)"
                  :class="getDateClass(day)">
                <div class="ant-fullcalendar-date" v-html="fullCellRender(day)">
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {Select, Option} from 'element-ui'
import {getCurrentViewByYearMonth} from '../utils/index'
import moment from 'moment'
export default {
  name: 'HelloWorld',
  data () {
    return {
      selectedYear: moment().year(),
      selectedMonth: moment().month() + 1,
      selectedDay: this.defaultValue || moment(),
      monthView: getCurrentViewByYearMonth(moment()),
      yearRange: [...Array(10).keys()].map(item => (item + moment().year() - 5)),
      monthRange: [...Array(12).keys()].map(item => item + 1)
    }
  },
  props: {
    defaultValue: Object,
    dateCellRender: Function,
    dateFullCellRender: Function,
    disabledDate: Function,
    // locale: Object,
    onPanelChange: Function,
    onSelect: Function
  },
  components: {
    'el-select': Select,
    'el-option': Option
  },
  created () {
    console.log(this.monthView)
  },
  methods: {
    getDateClass (date) {
      const classList = ['ant-fullcalendar-cell']
      if (date.isSame(Date.now(), 'day')) {
        classList.push('ant-fullcalendar-today')
      }
      if (date.isSame(this.selectedDay, 'day')) {
        classList.push('ant-fullcalendar-selected-day')
      }
      if (date.month() + 1 < this.selectedMonth) {
        classList.push('ant-fullcalendar-last-month-cell')
      }
      if (date.month() + 1 > this.selectedMonth) {
        classList.push('ant-fullcalendar-next-month-btn-day')
      }
      if (this.disabledDate && this.disabledDate(date)) {
        classList.push('ant-fullcalendar-disabled-cell')
      }
      return classList.join(' ')
    },
    onDayCellClick (date) {
      if (this.disabledDate && this.disabledDate(date)) {
        return false
      }
      this.selectedDay = date

      if (date.month() !== (this.selectedMonth - 1)) {
        this.monthView = getCurrentViewByYearMonth(date)
        this.selectedMonth = date.month() + 1
        this.selectedYear = date.year()
      }

      this.onSelect && this.onSelect(date)
    },
    onYearOrMonthChange () {
      this.monthView = getCurrentViewByYearMonth(moment(`${this.selectedYear}-${this.selectedMonth}`))
      this.onPanelChange && this.onPanelChange(moment(`${this.selectedYear}-${this.selectedMonth}`))
    },
    fullCellRender (date) {
      if (this.dateFullCellRender) {
        return this.dateFullCellRender(date)
      }

      if (this.dateCellRender) {
        return `<div class="ant-fullcalendar-value">${date.date()}</div>
                  <div class="ant-fullcalendar-content">
                    ${this.dateCellRender}
                  </div>`
      }
      return `<div class="ant-fullcalendar-value">${date.date()}</div>`
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "~fancy-theme/components/calendar/style/index.less";
  .s-calendar-select-wrapper {
    width: 100px;
    display: inline-block;
  }
</style>
