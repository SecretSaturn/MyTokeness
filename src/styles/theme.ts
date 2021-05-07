const theme = {
  dark: {
    bg: '#13181c',
    fg: '#181e24',
    border: {
      color: '#212a31',
      radii: {
        sm: '10px',
        md: '20px',
      },
    },
    brand: {
      color: '',
    },
    font: {
      sizes: {
        xs: '1rem',
        sm: '1.2rem',
        md: '1.4rem',
        lg: '1.8rem',
        xl: '2.2rem',
        xxl: '2.6rem',
        xxxl: '3.6rem',
      },
      colors: {
        brand: '#499bfc',
        primary: '#fff',
        secondary: '#a0b3c6',
        disabled: '#404a50',
        error: '#de5f5f',
        warn: '#de5f5f',
      },
      weights: {
        thin: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      lineHeights: {
        sm: '1.6rem',
        md: '2rem',
        lg: '2.4rem',
        xl: '2.8rem',
        xxl: '3.2rem',
        xxxl: '4.4rem',
      },
    },
    icon: {
      colors: {
        brand: '#6b6af9',
        primary: '#fff',
        secondary: '#889aa7',
        disabled: '#404a50',
        error: '#de5f5f',
        warn: '#de5f5f',
      },
    },
    space: {
      base: 4,
      xxs: '4px',
      xs: '8px',
      sm: '12px',
      md: '20px',
      lg: '32px',
      xl: '40px',
      xxl: '48px',
    },

    // buttons
    buttons: {
      button: {
        bg: {
          default: {
            base: '#60af73',
            hover: '#509461',
            active: '#468255',
          },
        },
        color: '#181e24',
      },
    },

    // forms
    forms: {
      fileUpload: {
        border: {
          color: {
            default: '#5e707d',
            error: '#de5f5f',
          },
        },
        bg: {
          default: '#11181d',
          hover: '#0b0f13',
          active: '#000000',
        },
      },
      input: {
        bg: {
          default: '#11181d',
        },
        border: {
          color: {
            default: '#5e707d',
            hover: '#849eb1',
            focus: '#399ee8',
            defaultError: '#de5f5f',
            hoverError: '#f56464',
            focusError: '#e83939',
          },
        },
        shadow: {
          color: {
            focus: '#0b4975',
            focusError: '#522424',
          },
        },
        placeholder: {
          color: '#535f67',
        },
      },
      toggle: {
        bg: {
          checked: {
            default: '#1891e6',
            hover: '#1377bd',
            active: '#0e5b92',
          },
          unchecked: {
            default: '#79838a',
            hover: '#59646b',
            active: '#404a50',
          },
        },
      },
      radio: {
        border: {
          checked: {
            default: '#1891e6',
          },
          unchecked: {
            default: '#889aa7',
            hover: '#1377bd',
            active: '#0e5b92',
          },
        },
        bg: {
          checked: {
            default: '#1891e6',
            hover: '#1377bd',
            active: '#0e5b92',
          },
          unchecked: {
            default: 'trasparent',
            hover: '#1377bd',
            active: '#0e5b92',
          },
        },
      },
    },

    // sidebar
    sidebar: {
      tab: {
        bg: {
          hover: '',
        },
      },
    },
  },
  light: {
    //
  },
}

// green #60af73
// teal #33ced8
// blue #499bfc
// yellow #f0be72

export default theme
