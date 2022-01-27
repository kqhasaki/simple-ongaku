import { get } from '@/util/request'

export async function getTopLists() {
  const { list } = (await get('/toplist')) as any
  return list
}
