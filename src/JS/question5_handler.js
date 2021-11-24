let q5Handler = {
  init: function() {
    /*
    primaryInnerText and secondaryInnerText are there to preserve their original text
    even after their InnerText value has been changed
    */
    this.primary = null;
    this.primaryInnerText = null;
    this.secondary = null;
    this.secondaryInnerText = null;
  },

  reset: function() {
    this.primary = null;
    this.secondary = null;
  },

  swapText: function() {
    this.primary["target"].innerText = this.secondaryInnerText;
    this.secondary["target"].innerText = this.primaryInnerText;
  },

  switchPlaces: function(buttonObject) {
    if (this.primary == null) {
      this.primary = buttonObject;
      this.primaryInnerText = this.primary["target"].innerText;
    } else {
      this.secondary = buttonObject;
      this.secondaryInnerText = this.secondary["target"].innerText;
      this.swapText();
      this.reset();
    }
  }
}

q5Handler.init();
