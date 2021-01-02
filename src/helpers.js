import { curry, curryN, bind, map, pick } from "ramda";

export const curry2 = (f) => curryN(2, f);

export const PromiseAll = bind(Promise.all, Promise);

export const pickMap = curry((fields, items) => map(pick(fields), items));

export const mergeByKey = curry((key, f, [xs, ys]) => {
  const curriedF = curry(f);
  return xs.map((x) => ({
    ...x,
    [key]: ys.filter(curriedF(x))
  }));
});
