export default {
  add: async (a) => {
    const result = await Promise.resolve(4);

    return result + a;
  },
};
