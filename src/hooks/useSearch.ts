import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';

interface UseSearchOptions<T> {
  items: T[];
  keys: string[];
  threshold?: number;
}

export function useSearch<T>({ items, keys, threshold = 0.4 }: UseSearchOptions<T>) {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<Record<string, string>>({});

  const fuse = useMemo(() => {
    return new Fuse(items, {
      keys,
      threshold,
      shouldSort: true,
    });
  }, [items, keys, threshold]);

  const results = useMemo(() => {
    let filteredItems = items;

    // Apply filters first
    if (Object.keys(filters).length > 0) {
      filteredItems = items.filter(item => {
        return Object.entries(filters).every(([key, value]) => {
          if (!value) return true;
          return (item as any)[key] === value;
        });
      });
    }

    // Then apply search
    if (query) {
      return fuse.search(query).map(result => result.item);
    }

    return filteredItems;
  }, [query, filters, items, fuse]);

  return {
    query,
    setQuery,
    filters,
    setFilters,
    results,
  };
}