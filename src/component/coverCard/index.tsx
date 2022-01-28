import { TopListItem } from '@/interfaces/playlist'
import Cover from './cover'
import './index.scss'

interface Props {
  item: TopListItem
}

export default function ListCoverCard({ item }: Props) {
  return (
    <div className="cover-card">
      <Cover showPalyButton coverImgUrl={item.coverImgUrl} />
      <h4>{item.name}</h4>
      <p>{item.updateFrequency}</p>
    </div>
  )
}
