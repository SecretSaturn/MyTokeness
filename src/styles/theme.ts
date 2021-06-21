const theme = {
  dark: {
    // bg: '#13181c',
    bg: '#0e1115',
    fg: '#181e24',
    border: {
      color: '#212a31',
      radii: {
        sm: '10px',
        md: '20px',
      },
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
        brand: '#f0be72',
        primary: '#fff',
        secondary: '#a0b3c6',
        disabled: '#404a50',
        error: '#d95468',
        warn: '#d95468',
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
        error: '#d95468',
        warn: '#d95468',
      },
      sizes: {
        md: '16px',
        xxl: '50px',
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
    palette: {
      red: {
        600: '#d95468',
      },
      green: {
        600: '#60af73',
      },
      teal: {
        600: '#33ced8',
      },
      blue: {
        600: '#499bfc',
      },
      yellow: {
        600: '#f0be72',
      },
    },

    // buttons
    buttons: {
      button: {
        bg: {
          default: {
            base: 'transparent',
            hover: '#889aa730',
            active: '#889aa778',
          },
          primary: {
            base: '#60af73',
            hover: '#509461',
            active: '#468255',
          },
          danger: {
            base: '#d95468',
            hover: '#b34646',
            active: '#883131',
          },
          disabled: '#30373e',
        },
        color: {
          default: { base: '#fff', hover: '#fff', active: '#fff' },
          primary: '#181e24',
          danger: '#181e24',
          disabled: '#181e24',
        },
        border: {
          default: '1px solid #889aa7',
          primary: 'none',
          danger: 'none',
        },
      },
    },

    // forms
    forms: {
      fileUpload: {
        border: {
          color: {
            default: '#5e707d',
            error: '#d95468',
          },
        },
        bg: {
          default: '#0e1115',
          hover: '#0b0f13',
          active: '#000000',
        },
      },
      input: {
        bg: {
          default: '#0e1115',
        },
        border: {
          color: {
            default: '#5e707d',
            hover: '#849eb1',
            focus: '#399ee8',
            defaultError: '#d95468',
            hoverError: '#e65a6f',
            focusError: '#ef5d73',
          },
          radius: '4px',
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
            disabled: '#404a50',
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
      symbol: {
        bg: 'linear-gradient(0deg,#f0be72 0,#f7ca85 100%)',
      },
    },

    // sidebar
    sidebar: {
      tab: {
        bg: {
          hover: '#232b33',
        },
        indicator: '#8bd49c',
        color: '#f7ca85',
      },
    },

    // notification
    notification: {
      toast: {
        container: {},
        toast: {
          bg: '#181e24',
          border: '2px solid #212a31',
        },
        body: {
          color: {
            default: '#fff',
            error: '#d95468',
            success: '#60af73',
          },
        },
        progress: {
          bg: {
            default: 'linear-gradient(to right, #1891e6, #bd18e6)',
            error: 'linear-gradient(to right, #d95468, #e56276)',
            success: 'linear-gradient(to right, #60af73, #8bd49c)',
          },
        },
      },
    },

    // modal
    modal: {
      overlay: {
        bg: '#0e1115ab',
      },
      card: {
        bg: '#181e24',
        border: '2px solid #212a31',
      },
      header: {
        border: {
          color: '#212a31',
        },
      },
      border: {
        color: '#212a31',
      },
    },

    // loaders
    loaders: {
      skeleton: {
        color: '#3c454e',
        highlightColor: 'linear-gradient(to right, #3c454e, #535e69, #3c454e)',
      },
    },

    // pagination
    pagination: {
      button: {
        bg: {
          selected: '#60af732b',
          hover: '#60af734f',
          active: '#60af7369',
        },
      },
    },

    // tags
    tags: {
      color: '#181e24',
      bg: {
        default: '#e9ebed',
      },
    },

    // step
    step: {
      progression: {
        number: {
          color: {
            default: '#fff',
            disabled: '#404a50',
          },
          border: {
            default: '2px solid #fff',
            disabled: '2px solid #404a50',
          },
        },
      },
    },
  },

  // light mode
  light: {
    //
  },
}

// red #d95468
// green #60af73
// teal #33ced8
// blue #499bfc
// yellow #f0be72

export default theme
