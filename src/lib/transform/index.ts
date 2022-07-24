import { ApplyMappingProps, ApplyMapping } from './apply-mapping';
import { DropFieldsProps, DropFields } from './drop-fields';
import { SelectFieldsProps, SelectFields } from './select-fields';

export * from './apply-mapping';
export * from './drop-fields';
export * from './select-fields';

/**
 * Transforms.
 */
export class Transform {
  /**
   * Create a new {@link DropFields}.
   */
  static dropFields(id: string, props: DropFieldsProps) {
    return new DropFields(id, props);
  }

  /**
   * Create a new {@link SelectFields}.
   */
  static selectFields(id: string, props: SelectFieldsProps) {
    return new SelectFields(id, props);
  }

  /**
   * Create a new {@link ApplyMapping}.
   */
  static applyMapping(id: string, props: ApplyMappingProps) {
    return new ApplyMapping(id, props);
  }
}
