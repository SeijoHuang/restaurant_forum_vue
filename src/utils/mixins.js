//載入moment函式庫
import moment from 'moment'

export const FromNowFilter = {
  filters: {
    fromNow(dataTime) {
      return dataTime? moment(dataTime).fromNow() : '-'
    }
  } 
}