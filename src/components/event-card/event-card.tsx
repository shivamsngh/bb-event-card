import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'bb-event-card',
  styleUrl: 'event-card.css',
  shadow: true
})
export class EventCard {

  @Prop() headertext: string;
  @Prop() bodytext: string;
  @Prop() date: string;
  @Prop() link: string;
  @Prop() headerstyle: string;
  @Prop() bodystyle: string;

  render() {
    const eventCardInlineStyle = {
      headerStyle: this.headerstyle ? JSON.parse(this.headerstyle) : '',
      bodyStyle: this.bodystyle ? JSON.parse(this.bodystyle) : ''
    }
    return (
      <div class="min-margin">
        <div class="message is-dark">
          <div class="message-header" style={eventCardInlineStyle.headerStyle}>
            <p>{this.headertext}</p>
          </div >
          <div class="message-body" style={eventCardInlineStyle.bodyStyle}>
            {this.bodytext}
            <hr />
            <span><date class="is-pulled-left"> {this.date}</date></span>
            <a href={this.link} class="is-pulled-right" target="_blank" rel="noopener">Details</a>
            <hr class="is-invisible" />
          </div>

        </div >
      </div>

    );
  }
}

