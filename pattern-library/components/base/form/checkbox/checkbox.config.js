module.exports = {
  label: 'Checkbox',
  name: 'input-checkbox',
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
        type: 'checkbox',
        label: 'Save my details',
        id: 'save-details',
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
        type: 'checkbox',
        label: 'Save my details',
        id: 'save-details',
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