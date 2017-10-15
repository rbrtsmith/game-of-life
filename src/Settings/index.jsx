import React from 'react'
import { Grid, Form, Button } from 'nebula-react'

const Settings = ({
  handleSelectIntervalChange,
  tickInterval,
  handleSelectTransitionDurationChange,
  transitionDuration,
  handleStartStopButtonClick,
  running
}) => (
  <Grid.Wrapper spacing="md" matrix gutter="md" className="u-push-bottom-md">
    <Grid.Item width="1/2">
      <Form.Select
        onChange={handleSelectIntervalChange}
        small
        value={tickInterval}
      >
        <option value={100}>
          Tick Interval: 100ms
              </option>
        <option value={200}>
          Tick Interval: 200ms
              </option>
        <option value={500}>
          Tick Interval: 500ms
              </option>
        <option value={1000}>
          Tick Interval: 1s
              </option>
      </Form.Select>
    </Grid.Item>
    <Grid.Item width="1/2">
      <Form.Select
        onChange={handleSelectTransitionDurationChange}
        small
        value={transitionDuration}
      >
        <option value={0}>
          Transition: 0ms
              </option>
        <option value={0.1}>
          Transition: 100ms
              </option>
        <option value={0.2}>
          Transition: 200ms
              </option>
        <option value={0.4}>
          Transition: 400ms
              </option>
      </Form.Select>
    </Grid.Item>
    <Grid.Item>
      <Button size="lg" fullWidth theme="alpha" onClick={handleStartStopButtonClick}>
        {
          running ? 'Stop' : 'Start'
        }
      </Button>
    </Grid.Item>
  </Grid.Wrapper>
)

export default Settings
