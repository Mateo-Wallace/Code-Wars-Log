function humanReadable(seconds) {
  const HH = () => {
    const hour = Math.floor(seconds / 3600);
    seconds -= hour * 3600;
    return hour.toLocaleString("en-US", { minimumIntegerDigits: 2 });
  };

  const MM = () => {
    const minute = Math.floor(seconds / 60);
    seconds -= minute * 60;
    return minute.toLocaleString("en-US", { minimumIntegerDigits: 2 });
  };

  const SS = () => {
    return seconds.toLocaleString("en-US", { minimumIntegerDigits: 2 });
  };

  return `${HH()}:${MM()}:${SS()}`;
}

module.exports = humanReadable;
