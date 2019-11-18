// root.pendingInteractionMap.forEach((scheduledInteractions, scheduledExpirationTime) => {
//    console.log(22) 
// });
root.pendingInteractionMap.forEach(function aa(scheduledInteractions, scheduledExpirationTime) {
  try {
    console.group("aa")
    {
      console.log(22);
    }
  } finally {
    console.groupEnd("aa");
  }
});