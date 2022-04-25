//載入moment函式庫
import moment from 'moment'

export const FromNowFilter = {
  filters: {
    fromNow(dataTime) {
      return dataTime? moment(dataTime).fromNow() : '-'
    }
  } 
}

export const EmptyImageFilter = {
  filters :{
    emptyImage(image){
      return image || 'https://via.placeholder.com/350x220/DFDFDF?text=No+Image'
    }
  }
}