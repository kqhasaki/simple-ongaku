import './index.css'

interface Props {
  item: any
  type?: string
}

export default function CoverCard(props: Props) {
  const { item } = props
  console.log(item)
  return (
    item && (
      <div className="cover-card">
        <img className="cover" src={item.coverImgUrl} alt={item.coverImgUrl} />
        <h4>{item.name}</h4>
        <p>{item.updateFrequency}</p>
      </div>
    )
  )
}
