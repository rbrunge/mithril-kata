import m from "mithril";
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
    m.redraw();
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
      name: "a",
      username: "b",
      password: "c",
      confirmPassword: "c"
    };
    this.form = SignupForm.new({ data: data });
  }

  submit(e) {
    e.preventDefault();
    if (this.form.isValid()) {
      console.log("hit api");
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
    return (
      <section class="section">
        <div class="container">
          <form onsubmit={ e => this.submit(e)}>
            <div class="field">
              <label class="label is-small">Name</label>
              <div class="control">
                <input class="input is-small"
                  name="name"
                  value={name.getData()}
                  oninput={e => name.setData(e.target.value)}
                  onchange={e => name.isValid()}></input>
                <p class="help is-danger">{this.form.name.getError()}</p>
              </div>
            </div>
            <div class="field">
              <label class="label is-small">Username</label>
              <div class="control">
                <input class="input is-small"
                  name="username"
                  value={username.getData()}
                  oninput={e => this.updateUsername(this)}
                  onchange={e => username.isValid()}></input>
                <p class="help is-danger">{this.form.username.getError()}</p>
              </div>
            </div>
            <div class="field">
              <label class="label is-small">Password</label>
              <div class="control">
                <input class="input is-small"
                  name="password"
                  value={password.getData()}
                  oninput={e => password.setData(e.target.value)}
                  onchange={e => password.isValid()}></input>
                <p class="help is-danger">{this.form.password.getError()}</p>
              </div>
            </div>
            <div class="field">
              <label class="label is-small">Confirm password</label>
              <div class="control">
                <input class="input is-small"
                  name="confirmPassword"
                  value={confirmPassword.getData()}
                  oninput={e => confirmPassword.setData(e.target.value)}
                  onchange={e => confirmPassword.isValid()}></input>
                <p class="help is-danger">{this.form.confirmPassword.getError()}</p>
              </div>
            </div>
            <button class="button is-small">Submit</button>
            <button class="button is-small" onclick={this.reset.bind(this)}>Reset</button>
          </form>
        </div>
      </section>
    )
  }
}

export default FormUI;