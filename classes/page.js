class Page {
    constructor() {
        this.width = window.outerWidth
        this.height = window.outerHeight
        this.intro =$('<div class="intro"></div>')
        this.main= $('<main id="game" class="container"></main>')
        this.gameContainer = $('<div id="board"></div>')
        this.infoplayer =$('<div id="infoplayer1" class="infoplayer"></div><div id="infoplayer2" class="infoplayer"></div>')
        this.header =$('<header><div id="title"><h1></h1></div></header>')
        this.footer =$('<footer><div id="instruction"><h1>------ INSTRUCTIONS -------</h1></div></footer>')
    }
    displayGame() {
        $("body").empty()
        this.header.appendTo($("body"))
        $("header h1").text(gametitle)
        this.infoplayer.appendTo(this.main)
        this.gameContainer.appendTo(this.main)

        this.main.appendTo($("body"))
        this.footer.appendTo($("body"))
    }


}
