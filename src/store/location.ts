import { defineStore } from "pinia";
import { NominatimLocation } from "../types/nominatim";

export const useLocationStore = defineStore("location", {
  state: () => ({
    locationList: [] as NominatimLocation[],
  }),
  actions: {
    setLocationList(nominatimLocations: NominatimLocation[]) {
      this.locationList = nominatimLocations;
    },
  },
});
