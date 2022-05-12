import { ElButton } from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import { use } from 'element-plus/lib/locale'

export default (app) => {
  use(lang)
  app.use(ElButton)
}
