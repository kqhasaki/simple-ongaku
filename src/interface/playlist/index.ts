export interface ListItem {
  name: string
  coverImgUrl: string
}

export interface TopListItem extends ListItem {
  playCount: number
  updateFrequency: string
}

export enum ITEM_TYPES {
  TOP,
  RECOMMEND,
}
