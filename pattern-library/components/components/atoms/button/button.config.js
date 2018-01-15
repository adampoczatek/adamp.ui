module.exports = {
  label: 'Button',
  name: 'button',
  default: 'default',
  variants: [
    {
      name: 'default',
      label: 'Default',
      context: {
        text: 'Default Button'
      }
    },
    {
      name: 'primary',
      label: 'Primary',
      context: {
        classes: 'button--primary',
        text: 'Primary Button'
      }
    },
    {
      name: 'Disabled',
      label: 'Disabled',
      context: {
        classes: 'button--primary',
        text: 'Disabled Button',
        isDisabled: true,
      }
    }
  ]
};