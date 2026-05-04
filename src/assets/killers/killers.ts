const images = import.meta.glob('./*.png', { eager: true })

export const killer_paths = Object.values(images);

export const killer_entries = Object.entries(images);