// root.pendingInteractionMap.forEach((scheduledInteractions, scheduledExpirationTime) => {
//    console.log(22) 
// });

root.pendingInteractionMap.forEach(function aa(scheduledInteractions, scheduledExpirationTime) {
    if (scheduledExpirationTime <= expirationTime) {
        scheduledInteractions.forEach(interaction =>
            interactions.add(interaction),
        );
    }
});