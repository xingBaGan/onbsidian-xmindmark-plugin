import { createMapByXMindMark } from 'xmindmark/dist/src/parser/mindmark'

export async function renderMapByString(content: string): Promise<Object> {
  return await createMapByXMindMark(content)
}
