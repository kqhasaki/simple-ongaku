import CoverCard from '../coverCard'

interface Props {
  items: any
}

export default function PlayList(props: Props) {
  return (
    <>
      {props.items.map((item: object, idx: number) => (
        <CoverCard item={item} key={idx} />
      ))}
    </>
  )
}
