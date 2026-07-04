// XSS variant: Angular DomSanitizer.bypassSecurityTrustHtml (framework sink).
import { DomSanitizer } from '@angular/platform-browser';
export class Renderer {
  constructor(private s: DomSanitizer) {}
  render(q: string) { return this.s.bypassSecurityTrustHtml(q); } // SINK CWE-79
}
