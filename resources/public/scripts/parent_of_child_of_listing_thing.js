function ParentOfChildOfListingThing(child, parent) {
  return {
    name: parent.name,
    id:   parent.id,
    open: function() {
      var thingPart = this.id ? "/things/" + this.id : "/things";
      Path.history.pushState({}, "", thingPart);
    }
  }
}

