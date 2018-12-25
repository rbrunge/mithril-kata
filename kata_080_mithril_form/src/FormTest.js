import o from "mithril";
import { Form, Field, ValidationError } from "powerform";

class StringField extends Field {
  modify(newVal) {
    if (!newVal) return "";
    return newVal;
  }
}

class NameField extends StringField {
  modify(newVal, oldVal) {
    if (!newVal) return "";
    return newVal.replace(/(?:^|\s)\S/g, s => s.toUpperCase());
  }

  validate(value, allValues) {
    if (!value) throw new ValidationError("This field is required.");
  }
}

class UsernameField extends StringField {
  validate(value, allValues) {
    if (!value) throw new ValidationError("This field is required.");
  }
}

class PasswordField extends StringField {
  validate(value, allValues) {
    if (!value) throw new ValidationError("This field is required.");
    if (value.length < 8) {
      throw new ValidationError("Password must be at least 8 characters long.");
    }
  }
}

class ConfirmPasswordField extends StringField {
  validate(value, allValues) {
    if (value !== allValues[this.config.field]) {
      throw new ValidationError("Passwords should match.");
    }
  }
}

function checkUserAvailability(value, field) {
  if (value !== "" && value !== "apple") {
    field.setError("The user is not available.");
    o.redraw();
  }
}

class SignupForm extends Form {
  name = NameField.new();
  username = UsernameField.new({
    debounce: 1000,
    onChange: checkUserAvailability
  });
  password = PasswordField.new();
  confirmPassword = ConfirmPasswordField.new({ field: "password" });
}

class FormUI {
  oninit() {
    let data = {
      name: "",
      username: "",
      password: "",
      confirmPassword: ""
    };
    this.form = SignupForm.new({data: data});
  }

  submit(e) {
    e.preventDefault();
    if (this.form.isValid()) {
      // hit api
    }
  }

  reset(e) {
    e.preventDefault();
    e.stopPropagation();
    this.form.reset();
  }

  updateUsername(e) {
    this.form.username.setData(e.target.value);
  }

  view() {
    const { name, username, password, confirmPassword } = this.form;
    return o("section.section",
        o("div.container",
          o("form", {onsubmit: this.submit.bind(this)},
            o("div.field",
              o("label.labe.is-small", "Name"),
              o("div.control",
                o("input.input.is-small", {
                  name: "name",
                  value: name.getData(),
                  oninput: e => name.setData(e.target.value),
                  onchange: e => name.isValid()
                }),
                o("p.help.is-danger", this.form.name.getError())
              )
            ),
            o("div.field",
              o("label.label.is-small", "Username"),
              o("div.control",
                o("input.input.is-small", {
                  name: "username",
                  value: username.getData(),
                  oninput: this.updateUsername.bind(this),
                  onchange: e => username.isValid()
                }),
                o("p.help.is-danger", this.form.username.getError())
              )
            ),
            o("div.field",
              o("label.label.is-small", "Password"),
              o("div.control",
                o("input.input.is-small", {
                  name: "password",
                  value: password.getData(),
                  oninput: e => password.setData(e.target.value),
                  onblur: e => password.isValid()
                }),
                o("p.help.is-danger", this.form.password.getError())
              )
            ),
            o("div.field",
              o("label.label.is-small", "Confirm password"),
              o("div.control",
                o("input.input.is-small", {
                  name: "confirmPassword",
                  value: confirmPassword.getData(),
                  oninput: e => confirmPassword.setData(e.target.value),
                  onblur: e => confirmPassword.isValid()
                }),
                o("p.help.is-danger", this.form.confirmPassword.getError())
              )
            ),
            o("button.button.is-small", "Submit"),
            o("button.button.is-small", {
              onclick: this.reset.bind(this)
              },
              "Reset"
            )
          )
        )
    )
  }
}

export default FormUI;