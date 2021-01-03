import { pipe, andThen, otherwise } from "ramda";
import { curry2 } from "../helpers";
import provideUsers from "./provider";

const state = {
  users: [],
  error: null
};

const getters = {
  users: (state) => state.users,
  error: (state) => state.error
};

const mutations = {
  SET_USERS: (state, users) => {
    state.users = users;
  },
  SET_ERROR: (state, error) => {
    state.error = `Error : ${error}`;
  }
};

const actions = {
  getUsers(context) {
    /* Curry commit with 2 args so we can do commit("SET_USERS")(users) */
    const commit = curry2(context.commit);

    const { pipeline, from } = provideUsers();

    pipe(
      ...pipeline,
      andThen(commit("SET_USERS")),
      otherwise(commit("SET_ERROR"))
    )(from);
  }
};

export default { state, getters, mutations, actions };
