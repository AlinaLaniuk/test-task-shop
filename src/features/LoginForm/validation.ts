const CHARS_QUANTITY = 3;

export function validateTextField(value: string) {
  return value.length >= CHARS_QUANTITY;
}
