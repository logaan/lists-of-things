function Parent(parnt, childId) {
  return {
    name: parnt.name,
    id: parnt.id,
    removeAsParent: function() {
      api.removeParent(parnt.id, childId, function() {
        console.log("success");
        // Remove this object from it's child
      });
    }
  }
}
