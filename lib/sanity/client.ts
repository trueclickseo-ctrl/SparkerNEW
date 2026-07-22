export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'sparkers_games',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2026-07-01',
  useCdn: false,
};

export async function fetchSanityContent<T>(_query: string, _params: Record<string, unknown> = {}): Promise<T | null> {
  // Graceful fallback to local structured data registries when CMS is disconnected
  return null;
}
