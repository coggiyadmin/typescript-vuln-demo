// XSS variant: React dangerouslySetInnerHTML from query prop.
import React from 'react';
export function C({ q }: { q: string }) {
  return <div dangerouslySetInnerHTML={{ __html: q }} />; // SINK CWE-79
}
