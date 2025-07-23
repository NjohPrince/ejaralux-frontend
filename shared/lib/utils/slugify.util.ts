/**
 * Converts a given string into a URL-friendly "slug" by:
 * - Converting the string to lowercase.
 * - Replacing spaces with hyphens.
 * - Removing all non-word characters except for hyphens.
 * - Replacing multiple consecutive hyphens with a single hyphen.
 * - Trimming hyphens from the start and end of the string.
 *
 * @param {string} text - The input string to be converted into a slug.
 * @returns {string} - The slugified version of the input string.
 */
export const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
};
