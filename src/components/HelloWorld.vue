<template>
  <div>
    <div class="ant-fullcalendar-fullscreen">
      <div class="ant-fullcalendar-header">
        <div class="ant-fullcalendar-year-select ant-select ant-select-enabled s-calendar-select-wrapper">
          <el-select v-model="selectedYear" placeholder="please choose" size="small">
            <el-option
              v-for="item in [2018, 2017]"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </div>
        <div class="ant-fullcalendar-month-select ant-select ant-select-enabled s-calendar-select-wrapper">
          <el-select v-model="selectedMonth" placeholder="please choose" size="small">
            <el-option
              v-for="item in ['Apr']"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="ant-fullcalendar ant-fullcalendar-full ant-fullcalendar-fullscreen" tabindex="0">
        <div class="ant-fullcalendar-calendar-body">
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
            <tr role="row" class="ant-fullcalendar-current-week ant-fullcalendar-active-week">
              <td role="gridcell" title="April 1, 2018" class="ant-fullcalendar-cell">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">01</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="April 2, 2018" class="ant-fullcalendar-cell">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">02</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="April 3, 2018"
                  class="ant-fullcalendar-cell ant-fullcalendar-today ant-fullcalendar-selected-day">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">03</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="April 4, 2018" class="ant-fullcalendar-cell">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">04</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="April 5, 2018" class="ant-fullcalendar-cell">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">05</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="April 6, 2018" class="ant-fullcalendar-cell">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">06</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="April 7, 2018" class="ant-fullcalendar-cell">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">07</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
            </tr>
            <tr role="row" class="">
              <td role="gridcell" title="April 8, 2018" class="ant-fullcalendar-cell">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">08</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="April 9, 2018" class="ant-fullcalendar-cell">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">09</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="April 10, 2018" class="ant-fullcalendar-cell">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">10</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="April 11, 2018" class="ant-fullcalendar-cell">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">11</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="April 12, 2018" class="ant-fullcalendar-cell">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">12</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="April 13, 2018" class="ant-fullcalendar-cell">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">13</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="April 14, 2018" class="ant-fullcalendar-cell">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">14</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
            </tr>
            <tr role="row" class="">
              <td role="gridcell" title="April 15, 2018" class="ant-fullcalendar-cell">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">15</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="April 16, 2018" class="ant-fullcalendar-cell">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">16</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="April 17, 2018" class="ant-fullcalendar-cell">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">17</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="April 18, 2018" class="ant-fullcalendar-cell">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">18</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="April 19, 2018" class="ant-fullcalendar-cell">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">19</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="April 20, 2018" class="ant-fullcalendar-cell">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">20</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="April 21, 2018" class="ant-fullcalendar-cell">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">21</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
            </tr>
            <tr role="row" class="">
              <td role="gridcell" title="April 22, 2018" class="ant-fullcalendar-cell">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">22</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="April 23, 2018" class="ant-fullcalendar-cell">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">23</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="April 24, 2018" class="ant-fullcalendar-cell">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">24</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="April 25, 2018" class="ant-fullcalendar-cell">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">25</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="April 26, 2018" class="ant-fullcalendar-cell">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">26</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="April 27, 2018" class="ant-fullcalendar-cell">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">27</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="April 28, 2018" class="ant-fullcalendar-cell">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">28</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
            </tr>
            <tr role="row" class="">
              <td role="gridcell" title="April 29, 2018" class="ant-fullcalendar-cell">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">29</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="April 30, 2018" class="ant-fullcalendar-cell">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">30</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="May 1, 2018" class="ant-fullcalendar-cell ant-fullcalendar-next-month-btn-day">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">01</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="May 2, 2018" class="ant-fullcalendar-cell ant-fullcalendar-next-month-btn-day">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">02</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="May 3, 2018" class="ant-fullcalendar-cell ant-fullcalendar-next-month-btn-day">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">03</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="May 4, 2018" class="ant-fullcalendar-cell ant-fullcalendar-next-month-btn-day">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">04</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="May 5, 2018" class="ant-fullcalendar-cell ant-fullcalendar-next-month-btn-day">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">05</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
            </tr>
            <tr role="row" class="">
              <td role="gridcell" title="May 6, 2018" class="ant-fullcalendar-cell ant-fullcalendar-next-month-btn-day">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">06</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="May 7, 2018" class="ant-fullcalendar-cell ant-fullcalendar-next-month-btn-day">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">07</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="May 8, 2018" class="ant-fullcalendar-cell ant-fullcalendar-next-month-btn-day">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">08</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="May 9, 2018" class="ant-fullcalendar-cell ant-fullcalendar-next-month-btn-day">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">09</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="May 10, 2018"
                  class="ant-fullcalendar-cell ant-fullcalendar-next-month-btn-day">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">10</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="May 11, 2018"
                  class="ant-fullcalendar-cell ant-fullcalendar-next-month-btn-day">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">11</div>
                  <div class="ant-fullcalendar-content"></div>
                </div>
              </td>
              <td role="gridcell" title="May 12, 2018"
                  class="ant-fullcalendar-cell ant-fullcalendar-next-month-btn-day">
                <div class="ant-fullcalendar-date">
                  <div class="ant-fullcalendar-value">12</div>
                  <div class="ant-fullcalendar-content"></div>
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
      selectedYear: null,
      selectedMonth: null,
      monthView: getCurrentViewByYearMonth(moment())
    }
  },
  props: {
    dateCellRender: Function,
    dateFullCellRender: Function,
    disabledDate: Function,
    locale: Object,
    value: Object,
    validRange: Array,
    onPanelChange: Function,
    onSelect: Function
  },
  components: {
    'el-select': Select,
    'el-option': Option
  },
  created() {
    console.log(this.monthView)
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "~fancy-theme/components/calendar/style/index.less";
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  .s-calendar-select-wrapper {
    width: 100px;
    display: inline-block;
  }
</style>
