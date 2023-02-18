import { ConfigService } from '$/services/Config.service.ts'

try {
	const config = new ConfigService()
	await config.load()
} catch (error) {
	console.log((error as Error).message)
}
