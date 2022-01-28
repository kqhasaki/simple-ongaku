import { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

interface Props {
  coverImgUrl?: string
  showPalyButton?: Boolean
}

const DEFAULT_IMG_URL =
  'https://tva1.sinaimg.cn/large/008i3skNgy1gytiraho8vj30sg0sgdhh.jpg'

export default function Cover({
  coverImgUrl = DEFAULT_IMG_URL,
  showPalyButton = false,
}: Props) {
  const ref = useRef<HTMLImageElement | null>(null)
  const [shadowVisible, setShadowVisible] = useState<Boolean>(false)

  function handleMouseIn() {
    setShadowVisible(true)
  }

  function handleMouseOut() {
    setShadowVisible(false)
  }

  return (
    <div
      className="cover-card-img"
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseOut}
    >
      <img ref={ref} src={coverImgUrl} alt="cover-img" />
      <div
        className="shadow"
        style={{
          transform: shadowVisible ? 'scale(0.96, 1.02)' : 'scale(0.90)',
          top: shadowVisible ? '10px' : '0',
          backgroundImage: `url(${coverImgUrl})`,
        }}
      />
      <button
        className="cover-card-play-button"
        style={{
          transform:
            showPalyButton && shadowVisible ? 'scale(1.0)' : 'scale(0)',
        }}
      >
        <span>
          <FontAwesomeIcon icon={faPlay} />
        </span>
      </button>
    </div>
  )
}
