// @ts-nocheck
import { error, fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load = async (event: Parameters<PageServerLoad>[0]) => {
  let user = undefined;
  if (event.locals.pb.authStore.isValid) {
    user = {...event.locals.pb.authStore.model}
  }

  return {
    user,
  };
}