// v10 allowlist-set
export function render(n: string): string { return `<p>${n.replace(/[<>&]/g, '')}</p>`; }
