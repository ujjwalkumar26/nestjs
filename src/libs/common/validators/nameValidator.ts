export class NameValidator {
  public validateName<T, K extends keyof T>(command: T, field: K): boolean {
    const value = command[field] as string;
    const firstLetter = value.charAt(0);
    const newValue = (value.charAt(0).toUpperCase() + value.slice(1)) as T[K];
    command[field] = newValue;
    if (firstLetter >= 'a' && firstLetter <= 'z') {
      return false;
    }
    return true;
  }
}
