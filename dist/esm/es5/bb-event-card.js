/*! Built with http://stenciljs.com */
import { h } from './bbeccomponent.core.js';
var EventCard = /** @class */ (function () {
    function EventCard() {
    }
    EventCard.prototype.render = function () {
        var eventCardInlineStyle = {
            headerStyle: this.headerstyle ? JSON.parse(this.headerstyle) : '',
            bodyStyle: this.bodystyle ? JSON.parse(this.bodystyle) : ''
        };
        return (h("div", { class: "min-margin" }, h("div", { class: "message is-dark" }, h("div", { class: "message-header", style: eventCardInlineStyle.headerStyle }, h("p", null, this.headertext)), h("div", { class: "message-body", style: eventCardInlineStyle.bodyStyle }, this.bodytext, h("hr", null), h("span", null, h("date", { class: "is-pulled-left" }, " ", this.date)), h("a", { href: this.link, class: "is-pulled-right", target: "_blank", rel: "noopener" }, "Details"), h("hr", { class: "is-invisible" })))));
    };
    Object.defineProperty(EventCard, "is", {
        get: function () { return "bb-event-card"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventCard, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventCard, "properties", {
        get: function () {
            return {
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
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventCard, "style", {
        get: function () { return "blockquote, body, dd, dl, dt, fieldset, figure, h1, h2, h3, h4, h5, h6, hr, html, iframe, legend, li, ol, p, pre, textarea, ul {\n    margin: 0;\n    padding: 0;\n}\nhr{\n    background-color: #f5f5f5;\n    border: none;\n    display: block;\n    height: 2px;\n    margin: 1.5rem 0;\n}\n.min-margin{\n    margin:10px;\n}\n.message{\n    background-color: #fafafa;\n    border-radius: 4px;\n    font-size: 1rem;\n    -webkit-font-smoothing: antialiased;\n}\n\n\n.message-header{\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n    background-color: #363636;\n    border-radius: 4px 4px 0 0;\n    color: #f5f5f5;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    font-weight: 700;\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n    line-height: 1.25;\n    padding: .75em 1em;\n    position: relative\n}\n\n.message-body{\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    border-radius: 4px;\n    border-width: 0;\n    border-style: solid;\n    padding: 1.25em 1.5em;\n    border-color: #363636;\n    color: #2a2a2a;\n}\n\n.is-pulled-right{\n    float: right;\n}\n\n.is-pulled-left{\n    float: left;\n}\n\n.is-invisible{\n    visibility: hidden;\n}"; },
        enumerable: true,
        configurable: true
    });
    return EventCard;
}());
export { EventCard as BbEventCard };
