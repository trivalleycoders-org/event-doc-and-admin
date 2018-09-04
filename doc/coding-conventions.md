

SCRATCH START


> component events should start with 'handle'
> constants that that are closely associated with a given module are declared in that module
> single quotes
> no semicolons
> trailing commas for objects
> use arrow functions unless have a reason for doing otherwise

## Action/Action Creator Names
<subject><very>[Request][Key]
E.g.,
- request action: userLoginRequest
- request action key: userLoginRequestKey
- action: userLogin
- action key: userLoginKey
- Actions that are the primary action called by a request success have the same name as the thunk without the 'request' postfix

# selectors
- generally start with the prefix 'get'
- must explicitly return a default value


# imports - not being followed
Imports are organized as follows (in order)
- React imports ('react' * 'prop-types')
- Redux, Recompose, react-redux
- all other external libraries
under the comment /* User */
- All project internal imports
under the comment /* Dev */
- Imports that should/can be removed for production build / post-active development

# React Specific
> Use PropTypes to check for props. Do not write tests for them
> const styles = { ... } goes just above:
  > export default
  > mapStateToProps if present

# Database
> database names use camelCase just like JavaScript variables & functions



