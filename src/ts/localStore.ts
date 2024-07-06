type Storable = {
  hiddenColumns: string[];
  sortedColumnNames: string[];
};

export function saveToLocalStorage<T extends keyof Storable>(
  storageKey: string,
  itemType: T,
  value: Storable[T]
) {
  localStorage.setItem(`${storageKey}-${itemType}`, JSON.stringify(value));
}

export function getFromLocalStorage<T extends keyof Storable>(
  storageKey: string,
  itemType: T
): Storable[T] | undefined {
  const storedData = localStorage.getItem(`${storageKey}-${itemType}`);
  try {
    return storedData ? (JSON.parse(storedData) as Storable[T]) : undefined;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`Failed to load data: ${e}.`);
    return undefined;
  }
}
