import { genrateImageToolDefinition } from './generateImage'
import { redditToolDefinition } from './reddit'
import { dadJokeToolDefinition } from './dadJoke'

export const tools = [
  genrateImageToolDefinition,
  redditToolDefinition,
  dadJokeToolDefinition,
]
