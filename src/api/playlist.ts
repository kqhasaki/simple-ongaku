import { get } from '@/util/request'
import { TopListItem } from '@/interface/playlist'

export async function getTopLists(): Promise<Array<TopListItem>> {
  const { list } = (await get('/toplist')) as any
  return list
}
