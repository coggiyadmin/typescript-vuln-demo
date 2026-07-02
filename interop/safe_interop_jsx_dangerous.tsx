// IL-1 SAFE — JSX text content; React auto-escapes.
import React from 'react';

export function Comment({ location }: { location: { search: string } }) {
  const raw = new URLSearchParams(location.search).get('html'); // SOURCE
  return <div>{raw}</div>;
}
