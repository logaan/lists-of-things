(function() {
  repository = {};

  repository.store = ko.observable({});

  repository.add = function(thing) {
    var val = repository.store();
    val[thing.id] = thing;
    repository.store(val);
  };

  repository.remove = function(id) {
    repository.store(_.omit(repository.store(), id.toString()));
  };

  repository.get = function(id) {
    return repository.store()[id];
  };

  repository.populate = function(thing) {
    _.each(thing.parents,  repository.populate);
    _.each(thing.children, repository.populate);
    repository.add(thing);
  };

  repository.addParent = function(childId, parent) {
    api.addParent(childId, parent.id).done(function(result) {
      repository.add(parent);

      var rawChild = repository.get(childId);
      rawChild.parents.push(parent);
      repository.add(rawChild);
    });
  }

  repository.removeParent = function(childId, parentId) {
    api.removeParent(childId, parentId).done(function() {
      var child = repository.get(childId);
      child.parents = _.reject(child.parents, function(parent) {
        return parent.id == parentId;
      });
      repository.add(child);
    });
  }
})();
