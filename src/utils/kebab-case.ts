
export default function kebabCase(str: string) {
  return str
    .toLowerCase()
    .split(' ')
    .join('-');
}
