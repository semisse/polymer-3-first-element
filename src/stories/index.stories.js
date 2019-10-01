import { storiesOf } from '@storybook/polymer';
import { html } from 'lit-html';
import '../../icon-toggle.js';

const stories = storiesOf('UI/Actions', module);
stories
  .add(
    'icon-toggle',
    () =>
      html`
      <icon-toggle toggle-icon="star">OTHER TEST</icon-toggle>
      `,
  );
  