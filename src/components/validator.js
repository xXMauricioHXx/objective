class Validator {
  required(event) {
    const value = event.target.value;
    if (!value) {
      return true;
    }
    return false;
  }

  min(event, min) {
    const value = event.target.value;
    if (value.length < min) {
      return true;
    }
    return false;
  }

  max(event, min, max) {
    const value = event.target.value;
    const length = value.length;
    if (length < min && length > max) {
      return true;
    }
    return false;
  }

  getValueWithoutCurrencyFormat(value) {
    if (value) {
      const matchts = value.match(/R\$.*/gm);
      return matchts ? matchts[0].replace(',', '.') : value;
    }
  }
}

export default new Validator();