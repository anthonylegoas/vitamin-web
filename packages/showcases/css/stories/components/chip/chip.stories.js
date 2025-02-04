import overview from './examples/overview.html';
import filter from './examples/filter.html';
import input from './examples/input.html';
import singleChoice from './examples/single-choice.html';
import action from './examples/action.html';

export default {
  title: 'Components / Chip ',
  argTypes: { onchange: { action: 'write' } },
};

export const Overview = () => overview;
Overview.parameters = {
  docs: {
    source: {
      code: overview,
    },
  },
};

export const Filter = () => filter;
Filter.parameters = {
  docs: {
    source: {
      code: filter,
    },
  },
};

export const Input = () => input;
Input.parameters = {
  docs: {
    source: {
      code: input,
    },
  },
};

export const SingleChoice = () => singleChoice;
SingleChoice.parameters = {
  docs: {
    source: {
      code: singleChoice,
    },
  },
};

export const Action = () => action;
Action.parameters = {
  docs: {
    source: {
      code: action,
    },
  },
};
