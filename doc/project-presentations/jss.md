# Styling

## Contents
- Styles are objects
- Property names are camelCase
- Property values are the same as regular CSS
- Pixels are the default
- Properties with multiple values must be strings
- Styles with & without the theme object
- Using the theme object
- Breakpoints
- Dynamic styles

## Styles are objects
```js
const styles = {
  wrapper = {
    color: 'green',
  },
  label: {
    color: 'red',
  }
}
```

## Property names are camelCase
Property names are the same spelling as the regular CSS property names. However the hyphen is removed and the first letter after the hyphen is capatilied.

```js
const styles = {
  body = {
    color: 'green',
    textAlign: 'center',
  },
  label: {
    color: 'red',
    borderBottom: '1px solid black',
  }
}
```



## Property values are the same as regular CSS
```js
const styles = {
  wrapper: {
    borderBottom: 'solid 0.5px gray',
    color: '#f64060',
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: '50%',
  },
}
```

## Pixels are the default
For properties that take a number of pixels you can use a number or a string. Most people are using a number

```js
const styles = {
  body: {
    fontSize: '16px',
  },
  label: {
    fontSize: 12,
  },
}
```

## Properties with multiple values must be strings

```js
const styles = {
  wrapper: {
    padding: '20px 0 20px 0'
  },
}
```

## The Theme Object
Material UI comes with a [default theme](https://material-ui.com/customization/default-theme/).

Material UI will used these default values unless you over-ride them. In our project we do that in <code>src/ui/withRoot.js</code>

<span style="color: yellow">- Show withRoot.js</span>

> Theme properties should be used whereever they apply. This way, if the designer wants to make a change, say a color value, it will update throughout the entire application avoiding the need to search through the code to find every instance of the color.

### Styles with & without the theme object
Styles can be written with and without the theme object

**Without**
```js
const styles = {

}
```

**With**
```js
const styles = theme => ({

})
```

### Using the theme object

If the theme object is past you can use its properties
```js
const styles = theme => ({
  body1: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },

})
```

### You can make it a function

cons tstyles = theme => {
  const unit = theme.spacing.unit
  return ({
    wrapper: {
      backgroundColor: 'white',
      padding: `${unit * 4}px ${unit * 8}px ${unit * 4}px ${unit * 8}px`
    }
  })
}

### Using a color

backgroundColor: theme.palette.grey[800],


## Breakpoints

I have not fully expored the breakpoint system yet. There could be more to it.

The sizes are xs, sm, md, lg, xl

Breakpoints are created like this

```js
const styles = theme => ({
  wrapper: {
    backgroundColor: 'orange',
    [theme.breakpoints.up('md)]: {
      padding: '15%',
    }
  }
})
```
Examples
```js
[theme.breakpoints.up('md)]  // applies to size medium and larger

[theme.breakpoints.only('md)] // applies to size medium only

[theme.breakpoints.down('md)] // applies to size medium and smaller
```

## Dynamic Styles
A common practice in React application is to use the 'style' property to create dynamic properties.

```js
const MyComponent = ({ color }) => {
  const divStyle = {
    backgroundColor: color,
  }

  return (
    <div style={divStyle}>
      //
    </div>
  )
}
```