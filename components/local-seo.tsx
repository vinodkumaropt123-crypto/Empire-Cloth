import React from 'react';

export default function LocalSEOSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ClothingStore',
    'name': 'Empire Clothing Hub',
    'image': [
      'https://picsum.photos/seed/empire1/800/600',
      'https://picsum.photos/seed/empire2/800/600',
      'https://picsum.photos/seed/empirelogo/800/800'
    ],
    '@id': 'https://empireclothinghub.com/#store',
    'url': 'https://empireclothinghub.com',
    'telephone': '+919999988888',
    'priceRange': '₹₹',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Railway Road, Near Baisla Chowk, Main Market',
      'addressLocality': 'Dadri, Gautam Buddha Nagar',
      'addressRegion': 'Uttar Pradesh',
      'postalCode': '203207',
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 28.5601,
      'longitude': 77.5543
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Monday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        'opens': '10:00',
        'closes': '21:30'
      }
    ],
    'sameAs': [
      'https://www.instagram.com/empire_clothing_hub',
      'https://www.facebook.com/empireclothinghub'
    ],
    'founder': {
      '@type': 'Person',
      'name': 'Vipin Baisla'
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '584'
    },
    'areaServed': [
      {
        '@type': 'AdministrativeArea',
        'name': 'Dadri'
      },
      {
        '@type': 'AdministrativeArea',
        'name': 'Greater Noida'
      },
      {
        '@type': 'AdministrativeArea',
        'name': 'Ghaziabad'
      },
      {
        '@type': 'AdministrativeArea',
        'name': 'Noida'
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
