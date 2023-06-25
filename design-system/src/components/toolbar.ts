import {
  Toolbar,
  FoundationElementDefinition,
} from "@microsoft/fast-foundation";

export type DemoToolbarDefinitionOptions = FoundationElementDefinition & {};

export class DemoToolbar extends Toolbar {
  connectedCallback(): void {}
}

export const demoToolbar = DemoToolbar.compose<DemoToolbarDefinitionOptions>({
  baseName: "toolbar",
});
