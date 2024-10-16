import type { NominatimLocation } from "../types/nominatim";

export async function getLocation(query: string): Promise<{ data: NominatimLocation[], error: Error }> {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json`);
        const data = await response.json();
        
        return { data, error: null };
    } catch (err: Error) {
        return { data: [], error: err };
    }
}
