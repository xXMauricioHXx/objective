export class FormValidate {
  constructor() {
    this.rules = ["required", "min", "max"];
  }

  run(schema, state) {
    state.errors = [];
    state.validForm = true;
    schema.forEach(schema => {
      this.rules.forEach(rule => {
        if (schema.rules.includes(rule)) {
          state = { ...state, ...this[rule](schema, state) };
        }
      });
    });
    return state;
  }

  verifyErrors(errors, field) {
    return errors.filter(error => error[field]).length;
  }

  removeOldError(errors, field) {
    return errors.filter(error => !error[field]);
  }

  max(schema, state) {
    const { form, errors } = state;
    const { field, max } = schema;    
    if (form[schema.field] && form[schema.field].length > max) {
      state.validForm = false;
      if (!this.verifyErrors(errors, field)) {
        state.errors.push({
          [schema.field]: "This field accept max 5 characteres."
        });
      }
    } 
    return state;
  }

  min(schema, state) {
    const { form, errors } = state;
    const { field, min } = schema;
    if (form[schema.field] && form[schema.field].length < min) {
      state.validForm = false;
      if (!this.verifyErrors(errors, field)) {
        state.errors.push({
          [schema.field]: "This field accept min 5 characteres."
        });
      }
    }
    return state;
  }

  required(schema, state) {
    const { form, errors } = state;
    const { field } = schema;
    console.log(form[field]);
    if (!form[field]) {
      state.validForm = false;
      if (!this.verifyErrors(errors, field)) {
        state.errors.push({
          [schema.field]: "This field is required."
        });
      }
    }
    return state;
  }
}
