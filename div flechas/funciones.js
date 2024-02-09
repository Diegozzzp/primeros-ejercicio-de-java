window.onload = () => {
    const jugador = {
        element: document.getElementById("jugador"),
        topPosition : 0,
        leftPosition: 0,
        step: 25,
        move: function(direction){
            switch (direction){
                case "ArrowUp":
                    this.topPosition = this.topPosition - this.step
                    this.element.style.top = this.topPosition + "px";
                    break;

                case "ArrowDown":
                    this.topPosition = this.topPosition + this.step
                    this.element.style.top = this.topPosition + "px";
                     break;

                case "ArrowRight":
                    this.leftPosition = this.leftPosition + this.step
                    this.element.style.left = this.leftPosition + "px";
                    break;

                case "Arrowleft":
                    this.leftPosition = this.leftPosition - this.step
                    this.element.style.left = this.leftPosition + "px";
                    break;

                default:
                    break;
            }
        }
    };
    onkeydown = (key) => {
        jugador.move(key.code)
    }
}
