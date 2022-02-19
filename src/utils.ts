import { lstatSync } from 'fs';

export const cwdDir = process.cwd();

export async function loadDynamicModule(p: string) {
  const res = await import(p);
  return res.default || res;
}

/**
 * Checks if a file exist
 *
 * @export
 * @param {string} filePath
 * @return {*}  {boolean}
 */
export function fileExist(filePath: string): boolean {
  try {
    const stats = lstatSync(filePath);
    return stats.isFile();
  } catch (e) {
    return false;
  }
}
