import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import type { NominatimLocation } from '../../types/nominatim';
import VLocationListItem from '../VLocationListItem/VLocationListItem.vue';
import VLocationList from './VLocationList.vue';

describe('VLocationList', () => {
  it('renders "No locations" when locations array is empty', () => {
    const wrapper = mount(VLocationList, {
      props: {
        locations: [],
      },
    });

    const title = wrapper.find('.location-list__title');
    expect(title.text()).toBe('Locations: No locations');
  });

  it('renders VLocationListItem components when locations are provided', () => {
    const mockLocations: NominatimLocation[] = [
      {
        place_id: 1,
        type: 'city',
        display_name: 'City One, Country',
        lat: '12.345678',
        lon: '98.765432',
        licence: 'CC-BY-SA-4.0',
        osm_type: 'place',
        osm_id: 12345,
        boundingbox: ['12.345678', '12.345678', '98.765432', '98.765432'],
        class: 'place',
        place_rank: 1,
        importance: 1,
        addresstype: 'city',
        name: 'Sample City',
      },
      {
        place_id: 2,
        type: 'town',
        display_name: 'Town Two, Country',
        lat: '23.456789',
        lon: '87.654321',
        licence: 'CC-BY-SA-4.0',
        osm_type: 'place',
        osm_id: 12345,
        boundingbox: ['12.345678', '12.345678', '98.765432', '98.765432'],
        class: 'place',
        place_rank: 1,
        importance: 1,
        addresstype: 'city',
        name: 'Sample City',
      },
    ];

    const wrapper = mount(VLocationList, {
      props: {
        locations: mockLocations,
      },
    });

    const items = wrapper.findAllComponents(VLocationListItem);
    expect(items).toHaveLength(mockLocations.length);

    expect(items[0].props().location).toEqual(mockLocations[0]);
    expect(items[1].props().location).toEqual(mockLocations[1]);
  });
});
