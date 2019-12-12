export class FormValidate {
  constructor() {
    this.rules = ["required", "min", "max"];
  }

  run(schema, state) {
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
    } else {
      if (this.verifyErrors(errors, field)) {
        state.errors = this.removeOldError(errors, field);
        state.validForm = true;
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
    } else {
      if (this.verifyErrors(errors, field)) {
        state.errors = this.removeOldError(errors, field);        
      }
    }
    return state;
  }

  required(schema, state) {
    const { form, errors } = state;
    const { field } = schema;
    if (!form[field]) {
      state.validForm = false;
      if (!this.verifyErrors(errors, field)) {
        state.errors.push({
          [schema.field]: "This field is required."
        });
      }
    } else {
      
      if (this.verifyErrors(errors, field)) {
        state.errors = this.removeOldError(errors, field);
        state.validForm = true;
      }
    }
    return state;
  }
}
