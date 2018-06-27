/*! Built with http://stenciljs.com */
const { h } = window.bbeccomponent;

class EventCard {
    render() {
        const eventCardInlineStyle = {
            headerStyle: this.headerstyle ? JSON.parse(this.headerstyle) : '',
            bodyStyle: this.bodystyle ? JSON.parse(this.bodystyle) : ''
        };
        return (h("div", { class: "min-margin" },
            h("div", { class: "message is-dark" },
                h("div", { class: "message-header", style: eventCardInlineStyle.headerStyle },
                    h("p", null, this.headertext)),
                h("div", { class: "message-body", style: eventCardInlineStyle.bodyStyle },
                    this.bodytext,
                    h("hr", null),
                    h("span", null,
                        h("date", { class: "is-pulled-left" },
                            " ",
                            this.date)),
                    h("a", { href: this.link, class: "is-pulled-right", target: "_blank", rel: "noopener" }, "Details"),
                    h("hr", { class: "is-invisible" })))));
    }
    static get is() { return "bb-event-card"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "bodystyle": {
            "type": String,
            "attr": "bodystyle"
        },
        "bodytext": {
            "type": String,
            "attr": "bodytext"
        },
        "date": {
            "type": String,
            "attr": "date"
        },
        "headerstyle": {
            "type": String,
            "attr": "headerstyle"
        },
        "headertext": {
            "type": String,
            "attr": "headertext"
        },
        "link": {
            "type": String,
            "attr": "link"
        }
    }; }
    static get style() { return "blockquote[data-bb-event-card], body[data-bb-event-card], dd[data-bb-event-card], dl[data-bb-event-card], dt[data-bb-event-card], fieldset[data-bb-event-card], figure[data-bb-event-card], h1[data-bb-event-card], h2[data-bb-event-card], h3[data-bb-event-card], h4[data-bb-event-card], h5[data-bb-event-card], h6[data-bb-event-card], hr[data-bb-event-card], html[data-bb-event-card], iframe[data-bb-event-card], legend[data-bb-event-card], li[data-bb-event-card], ol[data-bb-event-card], p[data-bb-event-card], pre[data-bb-event-card], textarea[data-bb-event-card], ul[data-bb-event-card] {\n    margin: 0;\n    padding: 0;\n}\nhr[data-bb-event-card]{\n    background-color: #f5f5f5;\n    border: none;\n    display: block;\n    height: 2px;\n    margin: 1.5rem 0;\n}\n.min-margin[data-bb-event-card]{\n    margin:10px;\n}\n.message[data-bb-event-card]{\n    background-color: #fafafa;\n    border-radius: 4px;\n    font-size: 1rem;\n    -webkit-font-smoothing: antialiased;\n}\n\n\n.message-header[data-bb-event-card]{\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n    background-color: #363636;\n    border-radius: 4px 4px 0 0;\n    color: #f5f5f5;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    font-weight: 700;\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n    line-height: 1.25;\n    padding: .75em 1em;\n    position: relative\n}\n\n.message-body[data-bb-event-card]{\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    border-radius: 4px;\n    border-width: 0;\n    border-style: solid;\n    padding: 1.25em 1.5em;\n    border-color: #363636;\n    color: #2a2a2a;\n}\n\n.is-pulled-right[data-bb-event-card]{\n    float: right;\n}\n\n.is-pulled-left[data-bb-event-card]{\n    float: left;\n}\n\n.is-invisible[data-bb-event-card]{\n    visibility: hidden;\n}"; }
}

export { EventCard as BbEventCard };
