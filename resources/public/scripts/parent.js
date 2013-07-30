function Parent(child, parnt) {
  return {
    name: parnt.name,
    id: parnt.id,
    removeAsParent: function() {
      repository.removeParent(child.id(), parnt.id);
    }
  }
}
