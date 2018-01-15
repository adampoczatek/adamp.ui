module.exports = {
  label: 'Radio',
  name: 'input-radio',
  order: 1,
  default: 'default',
  variants: [
    {
      label: 'Default',
      name: 'default',
      order: 1,
      context: {
        style: {
          labelTop: false,
          labelBottom: true,
          wrap: true,
        },
        type: 'radio',
        label: 'Option 1',
        id: 'option-1',
        classes: {
          input: '',
          label: '',
        },
      },
    },
    {
      label: 'Disabled',
      name: 'disabled',
      order: 2,
      context: {
        style: {
          labelTop: false,
          labelBottom: true,
          wrap: true,
        },
        type: 'radio',
        label: 'Option 1',
        id: 'option-1',
        disabled: true,
        checked: true,
        classes: {
          input: '',
          label: '',
        },
      },
    },
  ]
};