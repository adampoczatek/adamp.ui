module.exports = {
  label: 'Select',
  name: 'input-select',
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
        options: [
          { 
            value: 'option-1',
            text: 'Option 1' 
          },
          { 
            value: 'option-2',
            text: 'Option 2' 
          },
          { 
            value: 'option-3',
            text: 'Option 3' 
          }
        ],
        label: 'Options',
        id: 'options',
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
          labelTop: true,
          labelBottom: false,
          wrap: false,
        },
        options: [
          { 
            value: 'option-1',
            text: 'Option 1' 
          },
          { 
            value: 'option-2',
            text: 'Option 2' 
          },
          { 
            value: 'option-3',
            text: 'Option 3' 
          }
        ],
        label: 'Options',
        id: 'options',
        disabled: true,
        classes: {
          input: '',
          label: '',
        },
      },
    },
  ]
};