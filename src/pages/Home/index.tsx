import { PlayList } from '@/component/index'
import { getTopLists } from '@/api/playlist'
import { useEffect, useState } from 'react'
import { TopListItem, ITEM_TYPES } from '@/interface/playlist'

export default function HomePage() {
  const [toplists, setToplists] = useState<Array<TopListItem>>([])

  useEffect(() => {
    getTopLists().then(list => setToplists(list))
  }, [])

  return <PlayList type={ITEM_TYPES.TOP} items={toplists} />
}
