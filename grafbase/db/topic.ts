import { client } from "./client"

export interface Topic {
  name: string
  content: string
}

export async function addTopic(topic: Topic, userId: string) {
  const res = await client.query(
    `
    UPDATE User FILTER .id = <uuid>$userId SET {
      topics += (
        INSERT Topic {
          name := <str>$topicName,
          content := <str>$topicContent
        }
      )
    }
  `,
    {
      userId: userId,
      topicName: topic.name,
      topicContent: topic.content,
    }
  )

  console.log(res)
  return res
}

export async function deleteTopic(id: string) {
  const res = await client.query(`
  delete Topic
  filter .id = <uuid>'${id}'`)
  console.log(res)
}

export async function getTopics() {
  const res = await client.query(`
  select Topic {
    name,
    content,
    id
  }`)
  console.log(res)
}
