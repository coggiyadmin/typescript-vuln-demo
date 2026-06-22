import React from 'react';
export function Comment(props: { html: string }) {
  return <div dangerouslySetInnerHTML={{ __html: props.html }} />;  // CWE-79
}
