function Parent(child, parnt) {
  return {
    name: parnt.name,
    id: parnt.id,
    removeAsParent: function() {
      var me = this;

      api.removeParent(child.id(), parnt.id, function() {
        // NOTE: This should be removing from the repository.
        child.parents.remove(me);
      });
    }
  }
}
