import { load } from 'dotenv'

type TConfig =
	| 'PORT'
	| 'TOKEN'

export class ConfigService {
	private static envs: Record<string, string>

	public async load(): Promise<void> {
		ConfigService.envs = await load()
	}

	public get(variableName: string): string | undefined {
		/*
      En modo "development" se usa el atributo estatico "envs"
      En modo "production" se usa el metodo nativo para Deno "env"
    */
		return ConfigService.envs[variableName] || Deno.env.get(variableName)
	}

	public getObject(): Record<TConfig, string> {
		const envsObject = ConfigService.envs || Deno.env.toObject()
		return envsObject
	}
}
