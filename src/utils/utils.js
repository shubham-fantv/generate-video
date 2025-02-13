export const toTitleCase = (str) => {
  return str
    .split(/[^a-zA-Z0-9]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export const formatDate = (isoString) => {
  const date = new Date(isoString);

  const options = {
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "GMT",
  };

  return date.toLocaleString("en-US", options).replace(",", "") + " GMT";
};

export const calculateRemainingTime = (startTime, endTime) => {
  const now = new Date();
  const start = new Date(startTime);
  const end = new Date(endTime);

  if (now < start) {
    const remainingTime = start - now;
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    return `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds remaining.`;
  } else if (now >= start && now <= end) {
    return "Ongoing";
  } else {
    return "Ended";
  }
};


export const formatMarketCap = (num) => {
  if (num >= 1e9) {
    return (num / 1e9).toFixed(1) + "bn+";
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(1) + "mn+";
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(1) + "k+";
  } else {
    return num.toFixed(1);
  }
};
