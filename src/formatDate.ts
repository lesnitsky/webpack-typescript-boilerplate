const zz = (template: TemplateStringsArray, ...args: any) => {
  return args[0] < 10 ? `0${args[0]}` : `${args[0]}`;
};

export function formatDate(date: Date) {
  const year = zz`${date.getUTCFullYear()}`;
  const month = zz`${date.getUTCMonth() + 1}`;
  const day = zz`${date.getUTCDate()}`;
  const h = zz`${date.getUTCHours()}`;
  const m = zz`${date.getUTCMinutes()}`;
  const s = zz`${date.getUTCSeconds()}`;
  const ms = zz`${date.getUTCMilliseconds()}`;

  return `${year}-${month}-${day} ${h}:${m}:${s}:${ms}`;
}
