function Parent(child, parent) {
  return {
    name: parent.name,
    id:   parent.id,
    removeAsParent: function() {
      repository.removeParent(child.id(), parent.id);
    }
  }
}
