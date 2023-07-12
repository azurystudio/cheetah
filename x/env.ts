import { Context } from '../mod.ts'

let ENV: Record<string, unknown> | undefined

export function env<Environment extends Record<string, unknown>>(
  c: Context,
): Environment {
  if (ENV) {
    return ENV as Environment
  }

  ENV = c.runtime === 'deno' ? Deno.env.toObject() : c.__app.env

  return ENV as Environment
}
