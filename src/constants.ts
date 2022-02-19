import { join } from 'path';
import { homedir } from 'os';

// sls config file path
export const DEFAULT_CONFIG_PATH = join(homedir(), '.yga.yml');
