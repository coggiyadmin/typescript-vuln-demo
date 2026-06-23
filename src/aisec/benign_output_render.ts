// TN — benign output rendering; fixed app-authored result, no model output.
export function renderSummary(count: number, total: number): string {
  return `Processed ${count} items totalling ${total.toFixed(2)}.`;
}
