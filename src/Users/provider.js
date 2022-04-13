import { andThen } from "ramda";
import { PromiseAll, pickMap, mergeByKey } from "../helpers";
import * as api from "./_api";

/* Returns a function that merges todos with the supplied objects list,
    matched by 2nd argument
*/
const attachTodos = mergeByKey(
  "todos",
  (user, todo) => user.id === todo.userId
);

/* Extract relevant fields */
const extractUserFields = pickMap(["id", "name", "email", "website", "todos"]);

const provideUsers = () => ({
  from: [api.getUsers(), api.getTodos()],
  /* Get users and merge them with their todos based on ids */
  pipeline: [PromiseAll, andThen(attachTodos), andThen(extractUserFields)]
});

export default provideUsers;
