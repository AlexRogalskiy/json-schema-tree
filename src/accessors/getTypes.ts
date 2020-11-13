import type { SchemaNodeKind } from '../nodes/types';
import type { SchemaFragment } from '../types';
import { isValidType } from './guards/isValidType';
import { inferType } from './inferType';

export function getTypes(fragment: SchemaFragment): SchemaNodeKind[] | null {
  if ('type' in fragment) {
    if (Array.isArray(fragment.type)) {
      return fragment.type.filter(isValidType);
    } else if (isValidType(fragment.type)) {
      return [fragment.type];
    }
  }

  const inferredType = inferType(fragment);
  if (inferredType !== null) {
    return [inferredType];
  }

  return null;
}
