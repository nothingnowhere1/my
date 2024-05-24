import { getNavigationsValue } from '@ijl/cli';
import { generatePath } from 'react-router-dom';

const baseUrl = getNavigationsValue('my.main');

export const URLs = {
  booking: getNavigationsValue('my.booking') && `${baseUrl}${getNavigationsValue('my.booking')}`,
  baseUrl,
  ui: {
    itemDetail: {
      url: `${baseUrl}${getNavigationsValue('my.item.info')}`,
      on: Boolean(getNavigationsValue('my.item.info')),
      getUrl: (itemId: number) => generatePath(`${baseUrl}${getNavigationsValue('my.item.info')}`, { itemId })
    }
  }
}

console.log(URLs.ui.itemDetail.url)