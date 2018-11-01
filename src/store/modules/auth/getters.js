import * as types from "@/store/types";

export default {
  [types.GETTER_AUTH]: state => state.auth,
  [types.GETTER_TOKEN]: state => state.token,
  [types.GETTER_EXPIRES_IN]: state => state.expiresIn
};
