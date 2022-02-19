import { fileExist } from './utils';
import { readFileSync, writeFileSync } from 'fs';
import YAML from 'js-yaml';
import { DEFAULT_CONFIG_PATH } from './constants';

export interface StorageOptions {
  storePath?: string;
}

export class StorageEngine {
  path: string;

  constructor(options: StorageOptions = {}) {
    const { storePath = DEFAULT_CONFIG_PATH } = options;
    this.path = storePath;
  }

  readYaml(): Record<string, string> {
    if (!fileExist(this.path)) {
      return {};
    }
    const content = readFileSync(this.path, 'utf-8');
    const config = YAML.load(content) as Record<string, string>;
    return config || {};
  }

  writeYaml(obj: Record<string, string>) {
    const content = YAML.dump(obj);
    writeFileSync(this.path, content, 'utf-8');
  }

  get(key: string): string | undefined {
    const config = this.readYaml();
    return config[key];
  }

  getKeys() {
    const config = this.readYaml();
    return Object.keys(config);
  }

  set(key: string, value: string) {
    const config = this.readYaml();
    config[key] = value;
    this.writeYaml(config);
  }

  remove(key: string) {
    const config = this.readYaml();
    delete config[key];
    this.writeYaml(config);
  }

  getAll(): Record<string, string> {
    const config = this.readYaml();
    return config || {};
  }
}
