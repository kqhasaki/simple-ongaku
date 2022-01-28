import { ListItem, TopListItem, ITEM_TYPES } from '@/interface/playlist'
import ListCoverCard from '../covercard'

interface Props {
  items: Array<ListItem>
  type: ITEM_TYPES
}

export default function PlayList({ items, type }: Props) {
  let list: Array<JSX.Element> = []

  function renderList() {
    switch (type) {
      case ITEM_TYPES.TOP:
        list = items.map((item, key) => (
          <ListCoverCard item={item as TopListItem} key={key} />
        ))
        break
      default:
        break
    }

    return <>{list}</>
  }

  return renderList()
}
