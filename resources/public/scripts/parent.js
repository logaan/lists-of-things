function Parent(parnt, childId) {
  return {
    name: parnt.name,
    id: parnt.id,
    removeAsParent: function() {
      api.removeParent(childId, parnt.id, function() {
        console.log("success");
        // Remove this object from it's child
      });
    }
  }
}
