import type { SchemaFragment } from '../../types';
import { BaseNode } from '../BaseNode';
import type { ReferenceNode } from '../ReferenceNode';

export class MirroredReferenceNode extends BaseNode implements ReferenceNode {
  constructor(public readonly mirroredNode: ReferenceNode) {
    super(mirroredNode.fragment);
  }

  public toJSON(): SchemaFragment {
    return this.mirroredNode.fragment;
  }

  get error() {
    return this.mirroredNode.error;
  }

  get value() {
    return this.mirroredNode.value;
  }

  public get external() {
    return this.mirroredNode.external;
  }
}
