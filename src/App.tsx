import { useState } from "react";
import "./App.css";
import FButton, { Border, Size as ButtonSize } from "./components/FButton";
import {
  FTextField,
  Size as TextFieldSize,
  Color,
  TextFieldType,
} from "./components/FTextField";
import { FStepper, Step } from "./components/FStepper";
import IconEye from "./icons/IconEye";
import Chips from "./components/FChips";

const steps: Array<Step> = [
  {
    title: "First step",
    content: <p>First step content</p>,
    icon: <IconEye />,
  },
  {
    title: "Second step",
    content: <p>Second step content</p>,
  },
  {
    title: "Third step",
    content: <p>Third step content</p>,
  },
  {
    title: "Fourth step",
    content: <p>Fourth step content</p>,
  },
];

function App() {
  const [textValue, setTextValue] = useState("Ciao");
  const [passwordValue, setPasswordValue] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTextValue(event?.target.value);
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPasswordValue(event?.target.value);
  }

  function f() {
    console.log("click");
  }

  return (
    <>
      <main>
        <section>
          <div className="container">
            <h1>Frontenders UI KIT</h1>
          </div>
        </section>

        <section>
          <div className="contianer">
            <div className="box">
              <FStepper steps={steps} initialStep={1}></FStepper>
            </div>
          </div>
        </section>

        <section className="alternate">
          <div className="container">
            <div className="box">
              <h2>Button</h2>
            </div>

            <div className="box">
              <h1>Sizes</h1>
              <div className="flex">
                <FButton text="Ciao" onClick={f} />
                <FButton text="Hello" size={ButtonSize.Small} />
                <FButton text="Hola" size={ButtonSize.Medium} />
                <FButton text="Priviet" size={ButtonSize.Large} />
              </div>
            </div>

            <div className="box">
              <h1>Borders</h1>
              <div className="flex">
                <FButton text="Normal" />
                <FButton text="Squared" border={Border.Squared} />
                <FButton text="Rounded" border={Border.Rounded} />
              </div>
            </div>

            <div className="box">
              <h1>State</h1>
              <div className="flex">
                <FButton text="Disabled" disabled />
                <FButton text="Loading" loading />
              </div>
            </div>

            <div className="box">
              <h1>Color States</h1>
              <div className="flex">
                <FButton text="Normal" />
                <FButton text="Primary" state="primary" />
                <FButton text="Link" state="link" />
                <FButton text="Info" state="info" />
                <FButton text="Success" state="success" />
                <FButton text="Warning" state="warning" />
                <FButton text="Danger" state="danger" />
              </div>
            </div>

            <div className="box">
              <h1>Color outline States</h1>
              <div className="flex">
                <FButton text="Normal" outlined />
                <FButton text="Primary" state="primary" outlined />
                <FButton text="Link" state="link" outlined />
                <FButton text="Info" state="info" outlined />
                <FButton text="Success" state="success" outlined />
                <FButton text="Warning" state="warning" outlined />
                <FButton text="Danger" state="danger" outlined />
              </div>
            </div>

            <div className="box">
              <h1>Icons</h1>
              <div className="flex">
                <FButton
                  text="Icon Left"
                  icon="fa-solid fa-user"
                  iconPosition="left"
                  state="primary"
                />
                <FButton
                  text="Icon Right"
                  icon="fa-solid fa-location-dot"
                  iconPosition="right"
                  state="info"
                />
                <FButton
                  icon="fa-solid fa-check"
                  state="success"
                  border={Border.Rounded}
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="box">
              <h2>TextField</h2>
            </div>

            <div className="box">
              <h3>Sizes</h3>
              <div className="flex">
                <FTextField
                  id="small-size-textfield"
                  label="Small"
                  size={TextFieldSize.Small}
                  value={textValue}
                  updateValue={handleChange}
                />
                <p>{textValue}</p>
                <FTextField
                  id="normal-size-textfield"
                  label="Normal"
                  size={TextFieldSize.Normal}
                />
                <FTextField
                  id="medium-size-textfield"
                  label="Medium"
                  size={TextFieldSize.Medium}
                />
                <FTextField
                  id="large-size-textfield"
                  label="Large"
                  size={TextFieldSize.Large}
                />
              </div>
            </div>

            <div className="box">
              <h3>Attributes</h3>

              <div className="flex align-items-start">
                {/* <FTextField
                id="required-attr-textfield"
                label="Required"
                required
              />
              <FTextField
                id="disabled-attr-textfield"
                label="Disabled"
                disabled
              />
              <FTextField
                id="readonly-attr-textfield"
                label="Readonly"
                readonly
              /> */}
                <FTextField
                  id="password-attr-textfield"
                  label="Password"
                  type={TextFieldType.Password}
                  helperText="La password deve contenere almeno 8 caratteri, inclusi lettere maiuscole, minuscole, numeri e caratteri speciali"
                  value={passwordValue}
                  updateValue={handlePasswordChange}
                />
                <p>{passwordValue}</p>
                <FTextField
                  id="searchfield-attr-textfield"
                  label="Searchfield"
                  type={TextFieldType.Search}
                />
                {/* <FTextField
                id="searchfield-attr-textfield"
                label="Helper Text"
                helperText="Some helper text"
              /> */}
              </div>
            </div>

            <div className="box">
              <h3>Colors</h3>

              <div className="flex">
                <FTextField id="normal-color-textfield" label="Normal" />
                <FTextField
                  id="primary-color-textfield"
                  label="Primary"
                  color={Color.Primary}
                />
                <FTextField
                  id="link-color-textfield"
                  label="Link"
                  color={Color.Link}
                />
                <FTextField
                  id="info-color-textfield"
                  label="Info"
                  color={Color.Info}
                />
                <FTextField
                  id="success-color-textfield"
                  label="Success"
                  color={Color.Success}
                />
                <FTextField
                  id="warning-color-textfield"
                  label="warning"
                  color={Color.Warning}
                />
                <FTextField
                  id="danger-color-textfield"
                  label="Danger"
                  color={Color.Danger}
                />
              </div>
            </div>
            <div className="container">
              <h3>Chips</h3>
              <Chips label={"chips"} size={"small"} rounded={false} />
              <Chips
                label={"small solid"}
                appearance={"solid"}
                size={"small"}
                rounded={false}
              />
              <Chips label={"rounded outline"} size={"large"} rounded={true} />
              <Chips
                label={"Rounded small"}
                appearance={"solid"}
                size={"small"}
                rounded={true}
                type="warning"
              />
              <Chips
                label={"chipserror"}
                size={"small"}
                rounded={false}
                type="error"
                appearance={"solid"}
              />
              <Chips
                label={"medium outline"}
                size={"medium"}
                appearance="outline"
                rounded={false}
                type="info"
                icon={<IconEye />}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
