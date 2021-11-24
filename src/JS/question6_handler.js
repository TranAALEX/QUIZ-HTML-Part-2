let q6Handler = {
  init: function() {
    this.primaryImage = null;
    this.secondaryButton = null;
  },

  reset: function() {
    this.primaryImage = null;
    this.secondaryButton = null;
  },

  deletePreviousMatchings: function() {
    const regex = /.\./;
    if (this.secondaryButton.innerHTML.match(regex) != null) {
      return this.secondaryButton.innerHTML.substring(3);
    } else {
      return this.secondaryButton.innerHTML;
    }
  },

  match: function(clickableObject) {
    if (this.primaryImage == null) {
      if (clickableObject["target"].tagName == "IMG")
        this.primaryImage = clickableObject["target"];
    } else {
      this.secondaryButton = clickableObject["target"];
      let unpairedName = this.deletePreviousMatchings();
      this.secondaryButton.innerText = `${this.primaryImage.id} ${unpairedName}`;
      this.reset();
    }
  }
}

q6Handler.init();
