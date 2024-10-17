import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import type { NominatimLocation } from '../../types/nominatim';
import VLocationListItem from './VLocationListItem.vue';

describe('VLocationListItem', () => {
  const mockLocation: NominatimLocation = {
    place_id: 12345,
    type: 'city',
    display_name: 'Sample City, Country',
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
  };

  it('renders correctly with location prop', () => {
    const wrapper = mount(VLocationListItem, {
      props: {
        location: mockLocation,
      },
    });

    expect(wrapper.find('.location-list-item__id').text()).toContain('12345');
    expect(wrapper.find('.location-list-item__type').text()).toContain('city');
    expect(wrapper.find('.location-list-item__name').text()).toContain('Sample City, Country');
    expect(wrapper.find('.location-list-item__lat').text()).toContain('12.345678');
    expect(wrapper.find('.location-list-item__lon').text()).toContain('98.765432');
  });
});
