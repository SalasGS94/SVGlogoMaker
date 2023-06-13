class Shapes {
    constructor() {
      this.colorSh = "";
    }
    setColor (color_shape) {
        this.colorSh = color_shape;
    }
  }

class Triangle extends Shapes {
    render () {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.colorSh}" />`
    }
}
class Square extends Shapes {
    render () {
        return `<rect width="100%" height="100%" fill="${this.colorSh}" />`
    }
}
class Circle extends Shapes {
    render () {
        return `<circle cx="150" cy="100" r="80" fill="${this.colorSh}" />`
    }
}

module.exports = {Triangle, Square, Circle} 