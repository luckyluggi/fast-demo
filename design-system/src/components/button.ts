import { ViewTemplate, attr, css, html } from "@microsoft/fast-element";
import {
  Button,
  FoundationElementDefinition,
  FoundationElementTemplate,
} from "@microsoft/fast-foundation";

export const template: FoundationElementTemplate<
  ViewTemplate<DemoButton>,
  DemoButtonDefinitionOptions
> = (context) => {
  const buttonTag = context.tagFor(Button);
  return html`
        <${buttonTag} appearance="accent">${(x) =>
    x.char + x.char}<slot></slot>${(x) => x.char + x.char}</${buttonTag}>
    `;
};

export type DemoButtonDefinitionOptions = FoundationElementDefinition & {};

export class DemoButton extends Button {
  @attr char: string = "#";

  connectedCallback(): void {
    super.connectedCallback();
  }
}

export const demoButton = DemoButton.compose<DemoButtonDefinitionOptions>({
  baseName: "button",
  template,
  styles: css``,
});
