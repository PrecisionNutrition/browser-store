// Types for compiled templates
declare module '@precision-nutrition/browser-store/templates/*' {
  import { TemplateFactory } from 'htmlbars-inline-precompile';
  const tmpl: TemplateFactory;
  export default tmpl;
}
