// @ts-nocheck
import { error, fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import type { UsersRecord } from '$lib/types/pocketbase-types';

export const load = async (event: Parameters<PageServerLoad>[0]) => {
  let user: null | UsersRecord = null;
  if (event.locals.pb.authStore.isValid) {
    user = {...event.locals.pb.authStore.model}
  }

  return {
    user,
  };
}