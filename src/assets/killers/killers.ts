const images = import.meta.glob('./*.png', { eager: true })

export const killer_paths : string[] = Object.values(images).map((mod: any) => mod.default);

export const killer_entries : [string, string][] = Object.entries(images)
    .map(([path, mod]: [string, any]) => {
        return [path, mod.default];
    });