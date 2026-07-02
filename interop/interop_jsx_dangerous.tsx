// IL-1 polyglot — TypeScript → JSX (CWE-79, #88).
import React from 'react';

export function Comment({ location }: { location: { search: string } }) {
  const raw = new URLSearchParams(location.search).get('html'); // SOURCE
  return <div dangerouslySetInnerHTML={{ __html: raw ?? '' }} />; // SINK CWE-79
}
