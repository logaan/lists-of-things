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
})();
