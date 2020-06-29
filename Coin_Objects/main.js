const bodyElement = document.querySelector('body')
let coin = {
    state: 0,
    flip: function() {
        this.state = Math.floor(Math.random() * 2) 
    },

    toString: function() {
        if (this.state == 0){
            return "Heads "
        }
        else {
            return "Tails "
        }
    },

    toHTML: function() {
        let image = document.createElement('img');
        if (this.state == 0) {
            image.src = "images/heads.jpg"
        }
        else {
            image.src = "images/tails.jpg"
        }
        return image
    },
};

function display20Flips() {
    let flipString = document.createElement('h1')
    for (let i = 0; i < 20; i ++){
        coin.flip()
        flipString.append(coin.toString())
    }
    bodyElement.append(flipString)
}
display20Flips()


function display20Images() {
    let flipImage = document.createElement('div')
    for (let i = 0; i < 20; i ++) {
        coin.flip()
        flipImage.append(coin.toHTML())
    }
    bodyElement.append(flipImage)
}
display20Images()