/**
 * Concatenates a list of class names, filtering out any falsy values.
 *
 * @param classes - A list of class names or conditional values
 * @returns A space-separated string of valid class names
 */
export function classNames(
  ...classes: Array<string | boolean | false | undefined | null>
): string {
  return classes.filter(Boolean).join(" ");
}
