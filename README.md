# vue-calendar

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dateCellRender | 自定义渲染日期单元格，返回内容会被追加到单元格 | function(date: moment): ReactNode | 无 |
| dateFullCellRender | 自定义渲染日期单元格，返回内容覆盖单元格 | function(date: moment): ReactNode | 无 |
| disabledDate | 不可选择的日期 | (currentDate: moment) => boolean | 无 |
| fullscreen | 是否全屏显示 | boolean | true |
| value | 展示日期 | [moment](http://momentjs.com/) | 当前日期 |
| onPanelChange | 日期面板变化回调 | function(date: moment, mode: string) | 无 |
| onSelect | 点击选择日期回调 | function(date: moment） | 无 |
