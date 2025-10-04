import { z } from 'zod'
import { openai } from '../ai'
import type { ToolFn } from '../../types'

export const genrateImageToolDefinition = {
  name: 'generate_image',
  parameters: z.object({
    prompt: z
      .string()
      .describe(
        `prompt for the image. Be sure to consider the user's orignal message when making the prompt. If you are unsure, then as the user to provide more details.`
      ),
  }),
  description: 'generate an image',
}

type Args = z.infer<typeof genrateImageToolDefinition.parameters>

export const generateImage: ToolFn<Args, string> = async ({
  toolArgs,
  userMessage,
}) => {
  const response = await openai.images.generate({
    model: 'dall-e-3',
    prompt: toolArgs.prompt,
    n: 1,
    size: '1024x1024',
  })

  //@ts-ignore
  const imageUrl = response.data[0].url!

  return imageUrl
}
