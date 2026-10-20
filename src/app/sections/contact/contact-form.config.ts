/**
 * The contact form is generated from this config: add, remove, or reorder fields here and
 * the form group, validators, labels, and error messages follow.
 */
export type FieldType = 'text' | 'email' | 'textarea';

export interface FieldConfig {
  name: string;
  label: string;
  type: FieldType;
  autocomplete?: string;
  rows?: number;
  required?: boolean;
  maxLength?: number;
}

export const CONTACT_FIELDS: FieldConfig[] = [
  { name: 'name', label: 'Name', type: 'text', autocomplete: 'name', required: true, maxLength: 100 },
  { name: 'email', label: 'Email', type: 'email', autocomplete: 'email', required: true, maxLength: 200 },
  { name: 'company', label: 'Company (optional)', type: 'text', autocomplete: 'organization', maxLength: 100 },
  { name: 'message', label: 'Message', type: 'textarea', rows: 5, required: true, maxLength: 4000 },
];

/**
 * GitHub Pages can't receive form posts, so messages go through Formspree.
 * Create a free form at https://formspree.io and paste its endpoint here, e.g.
 * 'https://formspree.io/f/abcd1234'. While empty, Send opens the visitor's email app instead.
 */
export const CONTACT_ENDPOINT = '';
