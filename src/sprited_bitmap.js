(function() {

  exports.SpritedBitmap = SpritedBitmap;

  /**
   * Sprited Bitmap Implementation
   *
   * @param {String} src Source URL of Sprite image
   * @param {Number} imgWithinSpriteX Location of the target bitmap within the entire
   *  sprite (X)
   * @param {Number} imgWithinSpriteX Location of the target bitmap within the entire
   *  sprite (Y)
   * @param {Number} imgWithinSpriteWidth Width of the target bitmap within the entire
   *  sprite
   * @param {Number} imgWithinSpriteHeight Height of the target bitmap within the entire
   *  sprite
   *
   * @example
   *  new SpritedBitmap('path/to/sprite.png', 0, 0, 100, 100)
   *  // Creates a DisplayObject which displays the 100x100 portion of the sprite at {0,0}
   */
  function SpritedBitmap(src, imgWithinSpriteX, imgWithinSpriteY, imgWithinSpriteWidth, imgWithinSpriteHeight) {
    bonsai.Group.call(this);
    new Bitmap(src).attr({
      x: -imgWithinSpriteX,
      y: -imgWithinSpriteY
    }).addTo(this);
    this.attr(
      'clip',
      new Rect(0, 0, imgWithinSpriteWidth, imgWithinSpriteHeight)
    );
  }

  SpritedBitmap.prototype = Object.create(bonsai.Group.prototype);

}());