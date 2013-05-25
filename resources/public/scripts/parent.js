function Parent(parnt, child) {
  return {
    name: parnt.name,
    id: parnt.id,
    removeAsParent: function() {
      var me = this;

      api.removeParent(child.id(), parnt.id, function() {
        child.parents.remove(me);
      });
    }
  }
}
