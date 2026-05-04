
const images = import.meta.glob('./*.png', { eager: true })

export const survivor_paths = Object.values(images);

export const survivor_entries = Object.entries(images);