import 'dotenv/config'
import { runAgent } from './src/agent'
import z from 'zod'

const userMessage = process.argv[2]

if (!userMessage) {
  console.error('Please provide a message')
  process.exit(1)
}

const wetherTool = {
  name: 'get_weather',
  description:
    "It's a tool to get weather information. does not need a city or location",
  parameters: z.object({
    reasoning: z.string().describe('The reasoning behind the tool call?'),
  }),
}

await runAgent({
  userMessage,
  tools: [wetherTool],
})
