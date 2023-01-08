export const Prefix = 'silent_ui';
export function withPrefixClassname(prefix: string) {
  return function prefixClassname(name: string) {
    return `${prefix}-${name}`;
  };
}
export const prefixClassname = withPrefixClassname(Prefix);
