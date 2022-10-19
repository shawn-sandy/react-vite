import React from "react"

import {
  ComponentStory,
  ComponentMeta
} from "@storybook/react"
import { BADGE } from "@geometricpanda/storybook-addon-badges"

import {
  within,
  userEvent,
  waitFor
} from "@storybook/testing-library"
import { expect } from "@storybook/jest"

import ComponentName from "./component-name"
export default {
  title: "Elements/ComponentName",
  component: ComponentName,
  argTypes: {
    children: { control: "text" },
    type: {
      control: "select",
      options: ["ComponentName", "submit", "reset"]
    },
    onPointerDown: { action: 'down' }
  },
  parameters: {
    badges: [BADGE.BETA]
  }
} as ComponentMeta<typeof ComponentName>

const Template: ComponentStory<typeof ComponentName> = (args) => (
  <ComponentName {...args}>{args.children}</ComponentName>
)

export const DefaultComponentName = Template.bind({})
DefaultComponentName.args = {
  children: "Default ComponentName",
}

export const ComponentNameInteractions = Template.bind({})

ComponentNameInteractions.args = {
  children: "ComponentName Test",
  // type: "ComponentName",
  onPointerDown: () => {
    // clicked = true
  }
}

ComponentNameInteractions.play = async ({ args, canvasElement }) => {
  const { getByRole } = within(canvasElement)
  const ComponentName = getByRole("note")
  expect(ComponentName).toHaveAccessibleName("ComponentName Test")
}
