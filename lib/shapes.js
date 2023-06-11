{/* <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg> */}

class Shapes {
    constructor(color_shape) {
      this.color_shape = color_shape;
    }
    setColor (color) {
        this.color_shape = color;
    }
  }

class Triangle extends Shapes {
    render () {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color_shape}" />`
    }
}

class Square extends Shapes {
    render () {
        return `<rect width="100%" height="100%" fill="${this.color_shape}" />`
    }
}

class Circle extends Shapes {
    render () {
        return `<circle cx="150" cy="100" r="80" fill="${this.color_shape}" />`
    }
}

module.exports = {Triangle, Square, Circle} 