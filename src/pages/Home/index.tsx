import { PlayList } from '@/component'
import { getTopLists } from '@/api/playlist'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const [toplists, setToplists] = useState([])

  useEffect(() => {
    getTopLists().then(list => setToplists(list as any))
  }, [])

  return <PlayList items={toplists} />
}
