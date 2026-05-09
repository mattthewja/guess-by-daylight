
const images = import.meta.glob('./*.png', { eager: true })

export const survivor_paths = Object.values(images) as string[];

export const survivor_entries = Object.entries(images) as [string, string][];