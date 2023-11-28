import { makePath } from '../utils/navigation';

export const ROOT = '/';

export const AUTH = makePath(ROOT, 'authentication');

export const WEATHER = makePath(ROOT, 'weather');
