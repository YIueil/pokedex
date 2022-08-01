import {
  ElButton,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElScrollbar,
  ElInput,
  ElIcon,
  ElTabs,
  ElTabPane,
  ElEmpty,
  ElSpace,
  ElRow,
  ElCol,
  ElProgress
} from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import {use} from 'element-plus/lib/locale'

export default (app) => {
  use(lang)
  app.use(ElRow)
  app.use(ElCol)
  app.use(ElContainer)
  app.use(ElAside)
  app.use(ElHeader)
  app.use(ElMain)
  app.use(ElButton)
  app.use(ElScrollbar)
  app.use(ElInput)
  app.use(ElIcon)
  app.use(ElTabs)
  app.use(ElTabPane)
  app.use(ElEmpty)
  app.use(ElSpace)
  app.use(ElProgress)
}
