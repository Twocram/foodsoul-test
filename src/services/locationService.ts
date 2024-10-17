import type { NominatimLocation } from "../types/nominatim";

export async function getLocations(query: string): Promise<{ data: NominatimLocation[], error: unknown }> {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json`);
        const data = await response.json();
        
        return { data, error: null };
    } catch (err: unknown) {
        return { data: [], error: err };
    }
}
