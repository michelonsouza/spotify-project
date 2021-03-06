import * as types from "@/store/types";

export default {
  [types.GETTER_AUTH]: state => state.authorization,
  [types.GETTER_TOKEN]: state => state.token,
  [types.GETTER_EXPIRES_IN]: state => state.expiresIn
};
