

SCRATCH START


> component events should start with 'handle'
> actions, events & selectors follow the convention
	<name>-<actions|events|selectors>.js
	example: event-actions.js
	* name will be singular
> constants that that are closely associated with a given module are declared in that module

> single quotes
> no semicolons
> trailing commas for objects
> use arrow functions unless have a reason for doing otherwise


# actions
## constants
**non-thunks**
- are prefixed with 'key'
- value starts with the word 'actionKey'
**thunks**
- are prefixed with 'requestKey'
- value starts with 'requestKey'

## action names
- thunks start with the prefix 'request'
- non-thunks do not have a prefix
- non-thunks that are the primary action called by a thunk have the same name as the thunk without the word 'request' for example:
thunk: requestCreateEvent
non-thunk: createEvent

# selectors
- generally start with the prefix 'get'


# imports
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

