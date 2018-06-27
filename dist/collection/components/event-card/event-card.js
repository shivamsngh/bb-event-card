export class EventCard {
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
    static get style() { return "/**style-placeholder:bb-event-card:**/"; }
}
