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

    if(existing = repository.get(thing.id)) {
      var extended = _.extend(repository.get(thing.id), thing);
      repository.add(extended);
    } else {
      repository.add(thing);
    }
  };

  repository.addParent = function(childId, parent) {
    api.addParent(childId, parent.id).done(function(result) {
      // repository.add(parent);

      var rawChild = repository.get(childId);
      rawChild.parents.push(parent);
      // NOTE: Jank
      rawChild.selected = true;
      repository.add(rawChild);

      var rawParent = repository.get(parent.id);
      rawParent.children.push(rawChild);
      repository.add(rawParent);
    });
  }

  repository.removeParent = function(childId, parentId) {
    api.removeParent(childId, parentId).done(function() {
      var child = repository.get(childId);
      child.parents = _.reject(child.parents, function(parent) {
        return parent.id == parentId;
      });
      repository.add(child);

      var parent = repository.get(parentId);
      parent.children = _.reject(parent.children, function(child) {
        return child.id == childId;
      });
      repository.add(parent);
    });
  }
})();
