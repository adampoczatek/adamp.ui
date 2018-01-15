module.exports = {
  label: 'Text',
  name: 'input-text',
  order: 1,
  default: 'default',
  variants: [
    {
      label: 'Default',
      name: 'default',
      order: 1,
      context: {
        style: {
          labelTop: true,
          labelBottom: false,
          wrap: false,
        },
        type: 'text',
        label: 'First name',
        placeholder: 'Enter your first name...',
        value: 'Adam',
        id: 'first-name',
        classes: {
          input: '',
          label: '',
        },
      },
    },
    {
      label: 'Inline',
      name: 'inline',
      order: 2,
      context: {
        style: {
          labelTop: true,
          labelBottom: false,
          wrap: true,
        },
        type: 'text',
        label: 'First name',
        placeholder: 'Enter your first name...',
        value: 'Adam',
        id: 'first-name',
        classes: {
          input: '',
          label: '',
        },
      },
    },
    {
      label: 'No Label',
      name: 'no-label',
      order: 5,
      context: {
        style: {
          labelTop: false,
          labelBottom: false,
          wrap: false,
        },
        type: 'text',
        label: 'First name',
        placeholder: 'Enter your first name...',
        value: 'Adam',
        id: 'first-name',
        classes: {
          input: '',
          label: '',
        },
      },
    },
    {
      label: 'Disabled',
      name: 'disabled',
      order: 6,
      context: {
        style: {
          labelTop: true,
          labelBottom: false,
          wrap: false,
        },
        type: 'text',
        label: 'First name',
        placeholder: 'Enter your first name...',
        value: 'Adam',
        id: 'first-name',
        disabled: true,
        classes: {
          input: '',
          label: '',
        },
      },
    },
  ]
};