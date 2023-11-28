export const buildDatesWhere = (
  field: string,
  from: string | undefined,
  to: string | undefined
): string => {
  if (!from && !to) {
    return "";
  }

  const fromQuery = from ? `${field} >= toDate('${from}')` : "";

  const toQuery = to
    ? (fromQuery ? " and " : "") + `${field} <= toDate('${to}')`
    : "";

  return `where ${fromQuery}${toQuery}`;
};
