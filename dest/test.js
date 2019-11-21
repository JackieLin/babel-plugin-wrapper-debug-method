root.pendingInteractionMap.forEach((scheduledInteractions, scheduledExpirationTime) => {
  try {
    console.group("null")
    console.log(22);
  } finally {
    console.groupEnd("null");
  }
});
root.pendingInteractionMap.forEach(function aa(scheduledInteractions, scheduledExpirationTime) {
  try {
    console.group("aa")

    if (scheduledExpirationTime <= expirationTime) {
      scheduledInteractions.forEach(interaction => {
        try {
          console.group("null")
          return interactions.add(interaction);
        } finally {
          console.groupEnd("null");
        }
      });
    }
  } finally {
    console.groupEnd("aa");
  }
});