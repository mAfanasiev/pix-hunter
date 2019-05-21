export default (time) => {
  if (!Number.isFinite(time)) {
    throw new Error(`time should be number`);
  }

  if (time < 0) {
    throw new Error(`'time' shouldn't be less zero`);
  }

  return {
    tick() {
      if (time >= 0) {
        time--;
      }

      const result = {
        done: false,
        time
      };

      if (time < 0) {
        result.done = true;
      }

      return result;
    }
  };
};
